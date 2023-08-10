import { NavLink } from 'react-router-dom';
import Container from 'components/CommonComponents/Container/Container';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={scss.sectionHero}>
      <Container>
        <div className={scss.boxHero}>
          <p className={scss.heroP}>I'm a</p>
          <h1 className={scss.heroPosition}>
            Full-Stack developer<span className={scss.point}>.</span>
          </h1>
          <NavLink to="/contact" className={scss.buttonHero}>
            Contact Me
          </NavLink>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
