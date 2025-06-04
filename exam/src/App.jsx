import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from './components/Header';
import CalculatorModal from './components/CalculatorModal';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <CalculatorModal />
    </>
  );
}

export default App;
