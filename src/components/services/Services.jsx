import { useState, useEffect } from "react";
import Istanbul from "../../assets/Istanbul.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Moskva from "../../assets/Moskva.jpg";
import Dehli from "../../assets/Dehli.jpg";

const destinations = [
  { name: "Toshkent → Istanbul", surname: "Istanbul → Toshkent", image: Istanbul },
  { name: "Toshkent → Dubay", surname: "Dubay → Toshkent", image: Dubai },
  { name: "Toshkent → Moskva", surname: "Moskva → Toshkent", image: Moskva },
  { name: "Toshkent → Dehli", surname: "Dehli → Toshkent", image: Dehli },
];

export default function Services() {
  const [current, setCurrent] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % destinations.length);
    }, 4000); // 4 sekunddan keyin keyingi rasm

    return () => clearInterval(interval); // cleanup
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Eng mashhur yo‘nalishlar</h2>

        <div className="carousel">
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>

          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {destinations.map((dest, index) => (
                <div
                  className="card"
                  key={index}
                  style={{ backgroundImage: `url(${dest.image})` }}
                >
                  <h3>{dest.name}</h3>
                  <h3>{dest.surname}</h3>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
