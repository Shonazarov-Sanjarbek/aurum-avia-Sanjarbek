import { FaPlaneDeparture } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="logo">
          <FaPlaneDeparture className="logo-icon" />
          AURUM<span>AVIA</span>
        </div>
        <nav className="nav">
          <a href="#about">Kompaniya</a>
          <a href="#services">Xizmatlar</a>
          <a href="#partners">Partnyorlar</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </div>  
    </header>
  );
}
