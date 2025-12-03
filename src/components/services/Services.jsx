import Istanbul from "../../assets/Istanbul.jpg";
import Dubai from "../../assets/Dubai.jpg";
import Moskva from "../../assets/Moskva.jpg";
import Dehli from "../../assets/Dehli.jpg";

const destinations = [
  { name: "Istanbul", image: Istanbul },
  { name: "Dubay", image: Dubai },
  { name: "Moskva", image: Moskva },
  { name: "Dehli", image: Dehli },
];

export default function Services() {
  return (
    <section id="services" className="destinations-section">
      <div className="container">
        <h2>Eng mashhur yo‘nalishdagi reyslar</h2>

        <div className="destinations-grid">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="dest-card"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="overlay" />
              <div className="text">
                <h3>{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
