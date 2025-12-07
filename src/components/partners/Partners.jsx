import React from "react";
import uzAir from "../../assets/Uzbekistan-Airways-logo.png";
import silk from "../../assets/silk-avia-logo.png";
import amadeus from "../../assets/Amadeus-Logo.png";
import centrum from "../../assets/Centrum_Air-logo.png";
import easy from "../../assets/easybooking-logo.png";
import qanot from "../../assets/qanot sharq-logo.png";
import tch from "../../assets/tch-rus-logo.png";
import aurum from "../../assets/Aurum-AIR2-logo.png";

export default function Partners() {
  const logos = [amadeus, uzAir, silk, aurum, centrum, easy, qanot, tch];
  const marqueeLogos = [...logos, ...logos, ...logos]; // Silliq animatsiya uchun 3 martta takrorlash

  return (
    <section className="partners">
      <div className="container">
        <h2>Hamkorlar</h2>

        {/* 1-qator: markazda statik */}
        <div className="partners-row row-right">
          <div className="marquee marquee-right">
            {marqueeLogos.map((logo, i) => (
              <img key={`right-${i}`} src={logo} alt={`partner-${i}`} />
            ))}
          </div>
        </div>

        {/* 2-qator: chapdan ongga yuruvchi */}
        <div className="partners-row row-left">
          <div className="marquee marquee-left">
            {marqueeLogos.map((logo, i) => (
              <img key={`left-${i}`} src={logo} alt={`partner-${i}`} />
            ))}
          </div>
        </div>

        {/* 3-qator: ongdan chapga yuruvchi */}
        <div className="partners-row row-right">
          <div className="marquee marquee-right">
            {marqueeLogos.map((logo, i) => (
              <img key={`right-${i}`} src={logo} alt={`partner-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
