import Header from "../components/header/Header";
import About from "../components/about/About";
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
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
