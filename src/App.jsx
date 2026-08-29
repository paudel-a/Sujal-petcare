import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import whyChurpi from "./components/WhyChurpi";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <whyChurpi />
        <Benefits />
        <FAQ />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
