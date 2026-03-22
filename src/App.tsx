import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FeatureDetail } from './components/FeatureDetail';
import { THEMES, ThemeId } from './constants/themes';
import { cn } from './lib/utils';

const Home: React.FC<{ currentTheme: ThemeId }> = ({ currentTheme }) => (
  <>
    <Hero currentTheme={currentTheme} />
    <Features currentTheme={currentTheme} />
    <Pricing currentTheme={currentTheme} />
    <Testimonials currentTheme={currentTheme} />
    <FAQ currentTheme={currentTheme} />
  </>
);

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('light');
  const { scrollYProgress } = useScroll();
  const location = useLocation();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Apply theme-specific background to body for smooth transitions
  useEffect(() => {
    document.body.style.backgroundColor = THEMES[currentTheme].color;
    document.documentElement.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className={cn('min-h-screen transition-colors duration-700', THEMES[currentTheme].bg)}>
      {/* Navbar with theme switcher */}
      <Navbar currentTheme={currentTheme} setTheme={setCurrentTheme} />

      {/* Main Content with Page Transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home currentTheme={currentTheme} />} />
            <Route path="/features/:slug" element={<FeatureDetail currentTheme={currentTheme} />} />
          </Routes>
          <Footer currentTheme={currentTheme} />
        </motion.main>
      </AnimatePresence>

      {/* Global Scroll Progress Indicator */}
      <motion.div
        className={cn('fixed top-0 left-0 right-0 h-1 z-[100]', THEMES[currentTheme].accent)}
        style={{
          scaleX,
          transformOrigin: '0%',
        }}
      />
    </div>
  );
}


