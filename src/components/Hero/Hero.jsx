import Container from 'components/CommonComponents/Container/Container';
import ButtonNavLink from 'components/CommonComponents/ButtonNavLink/ButtonNavLink';
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
          <ButtonNavLink text="Contact Me"></ButtonNavLink>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
