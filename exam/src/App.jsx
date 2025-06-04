import { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from './components/Header';
import CalculatorModal from './components/CalculatorModal';

function App() {
  const [isCalcOpen, setCalcOpen] = useState(false);

  return (
    <>
      <Header onOpenCalculator={() => setCalcOpen(true)} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <CalculatorModal isOpen={isCalcOpen} onClose={() => setCalcOpen(false)} />
    </>
  );
}

export default App;
