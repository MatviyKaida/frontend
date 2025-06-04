import React, { useState } from 'react';
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from './components/Header';
import CalculatorModal from './components/CalculatorModal';

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <>
      <Header onOpenCalculator={() => setShowCalculator(true)} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
      <CalculatorModal
        isVisible={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </>
  );
}

export default App;
