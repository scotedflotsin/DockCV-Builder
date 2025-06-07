import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import AdminLogin from '@/pages/AdminLogin';
import ScrollToTop from '@/components/ScrollToTop';
import ResumeBuilder from '../src/components/ResumeBuilder';
import Tutorial from '@/pages/Tutorial';

import { analytics } from './firebase';
import { logEvent, setCurrentScreen } from 'firebase/analytics';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (analytics && location.pathname) {
      setCurrentScreen(analytics, location.pathname);
      logEvent(analytics, 'screen_view', {
        firebase_screen: location.pathname,
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path='/tutorial' element={<Tutorial />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
