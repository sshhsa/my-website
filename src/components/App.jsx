import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useState, useEffect, lazy } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import ContactMe from './ContactMe/ContactMe';
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  const [isToast, setIsToast] = useState(false);

  useEffect(() => {
    if (!isToast) {
      toast.success('Welcome!');
      setIsToast(true);
    }
  }, [isToast]);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Toaster />
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Hero />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="skills" element={<Skills />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Scrollbars>
    </div>
  );
};
