import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import ContactMe from './ContactMe/ContactMe';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
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
  );
};
