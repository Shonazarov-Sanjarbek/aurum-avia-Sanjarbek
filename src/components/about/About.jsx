import about from '../../assets/about.jpg';

export default function About() {
  return (
    <section id="about" className="about" style={{ backgroundImage: `url(${about})` }}>
      <div className="about__overlay"></div>
      <div className="container about__content">
        <h2>Kompaniya haqida</h2>
        <p>
          Bizning aviakassa 15 yillik tajribaga ega bo‘lib, dunyoning barcha
          yo‘nalishlariga aviachipta taqdim etamiz. Ishonchli, qulay va tezkor
          xizmat ko‘rsatamiz.
        </p>
      </div>
    </section>
  );
}
