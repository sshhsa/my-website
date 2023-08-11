import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { lazy } from 'react';

import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import ContactMe from './ContactMe/ContactMe';
// import NotFound from './NotFound/NotFound';

// const Skills = lazy(() => './Skills/Skills');
// const AboutMe = lazy(() => './AboutMe/AboutMe');
// const Portfolio = lazy(() => import('./Portfolio/Portfolio'));
// const ContactMe = lazy(() => import('./ContactMe/ContactMe'));
// const NotFound = lazy(() => import('./NotFound/NotFound'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
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
