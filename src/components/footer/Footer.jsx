import {
  FaInstagram,
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaPlaneDeparture,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <div className="logo">
            <FaPlaneDeparture className="logo-icon" />
            AURUM<span>AVIA</span>
          </div>
          <p>© 2025 Aviakassa — Barcha huquqlar himoyalangan.</p>
        </div>

        {/* Sayt bo‘limlari va Aloqa */}
        <div className="footer-wrapper">
          <div className="footer-links">
            <h3>Sayt bo‘limlari</h3>
            <p>Bosh sahifa</p>
            <p>Xizmatlar</p>
            <p>Biz haqimizda</p>
            <p>Aloqa</p>
          </div>

          <div className="footer-contact">
            <h3>Aloqa</h3>
            <div className="contact-item">
              <FaPhoneAlt /> <a href="tel:+998909870987">+998 90 987 09 87</a>
            </div>
            <div className="contact-item">
              <FaEnvelope />{" "}
              <a href="mailto:AURUM_AVIA@MAIL.RU">AURUM_AVIA@MAIL.RU</a>
            </div>
            <div className="social-icons">
              <a href="https://t.me/adkhamov_987" target="_blank">
                <FaTelegramPlane />
              </a>
              <a href="https://instagram.com/aurum_avia" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer pastki qism */}
      <div className="footer-bottom">
        Sayt <span>San_Dev</span> tomonidan yaratilgan
      </div>
    </footer>
  );
}
