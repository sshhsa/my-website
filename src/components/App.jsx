import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Scrollbars } from 'react-custom-scrollbars';

import { Hero } from './Hero/Hero';
import { Skills } from './Skills/Skills';
import { AboutMe } from './AboutMe/AboutMe';
import { NotFound } from './NotFound/NotFound';
import { Portfolio } from './Portfolio/Portfolio';
import { ContactMe } from './ContactMe/ContactMe';

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
