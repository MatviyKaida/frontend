import { useState } from 'react';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CalculatorModal from "./components/CalculatorModal";

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const openCalculator = () => setShowCalculator(true);
  const closeCalculator = () => setShowCalculator(false);

  return (
    <>
      <Header onOpenCalculator={openCalculator} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      {showCalculator && <CalculatorModal onClose={closeCalculator} />}
    </>
  );
}

export default App;
