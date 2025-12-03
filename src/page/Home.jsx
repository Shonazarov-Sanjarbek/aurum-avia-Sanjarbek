import Header from "../components/header/Header";
import About from "../components/about/About";
import Certificates from "../components/certificates/Certificates";
import Services from "../components/services/Services";
import Partners from "../components/partners/Partners";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";


export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <About />
      <Certificates />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
