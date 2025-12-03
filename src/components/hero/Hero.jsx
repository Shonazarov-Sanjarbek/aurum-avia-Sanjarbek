import { useState, useEffect } from "react";
import heroImg from "../../assets/about.jpg";

export default function Hero() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("heroForm");
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("heroForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("So‘rov yuborildi!");
    setFormData({ name: "", phone: "", message: "" });
    setPopupOpen(false);
  };

  const closePopup = () => setPopupOpen(false);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero__overlay"></div>

      <div className="container hero__content">
        <h1>Aurum-Aviaga hush kelibsiz</h1>
        <p>
          Biz bilan dunyoning barcha yo'nalishlari uchun tezkor va ishonchli biletlarni xarid qilishingiz mumkin.
        </p>

        <div className="hero__cta">
          <p>bilet narxlarini bilish uchun quyidagi tugmani bosing</p>
          <button
            className="hero-btn"
            onClick={() => setPopupOpen(true)}
          >
            Narxni bilish
          </button>
        </div>
      </div>

      {/* POPUP */}
      {popupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <h3>So‘rov qoldirish</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon raqamingiz"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Xabaringiz"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
              <button type="submit" className="hero-btn">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
