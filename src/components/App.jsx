import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';
import { Portfolio } from './Portfolio/Portfolio';
import { ContactMe } from './ContactMe/ContactMe';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
    </>
  );
};
