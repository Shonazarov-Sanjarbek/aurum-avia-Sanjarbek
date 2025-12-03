import aboutImg from "../../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="about container">
      <div className="about__right">
        <h2>Kompaniya haqida</h2>
        <p>
          Bizning aviakassa 15 yillik tajribaga ega bo‘lib, dunyoning barcha
          yo‘nalishlariga aviachipta taqdim etamiz. Ishonchli, qulay va tezkor
          xizmat ko‘rsatamiz.
        </p>
      </div>

      <div className="about__left">
        <img src={aboutImg} alt="about" />
      </div>
    </section>
  );
}
