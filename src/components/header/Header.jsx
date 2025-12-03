import { useState, useEffect } from "react";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero"); // 🔥 ACTIVE link

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav") && !e.target.closest(".burger")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">

        <div className="logo">
          <FaPlaneDeparture className="logo-icon" />
          AURUM<span>AVIA</span>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a
            href="#hero"
            className={active === "#hero" ? "active" : ""}
            onClick={() => handleLinkClick("#hero")}
          >
            Asosiy
          </a>

          <a
            href="#about"
            className={active === "#about" ? "active" : ""}
            onClick={() => handleLinkClick("#about")}
          >
            Kompaniya
          </a>

          <a
            href="#services"
            className={active === "#services" ? "active" : ""}
            onClick={() => handleLinkClick("#services")}
          >
            Xizmatlar
          </a>

          <a
            href="#partners"
            className={active === "#partners" ? "active" : ""}
            onClick={() => handleLinkClick("#partners")}
          >
            Hamkorlar
          </a>

          <a
            href="#contact"
            className={active === "#contact" ? "active" : ""}
            onClick={() => handleLinkClick("#contact")}
          >
            Kontakt
          </a>

          <FaTimes className="close-menu" onClick={() => setMenuOpen(false)} />
        </nav>

        <FaBars className="burger" onClick={() => setMenuOpen(true)} />
      </div>
    </header>
  );
}
