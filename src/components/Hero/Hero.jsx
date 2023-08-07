import { Container } from 'components/CommonComponents/Container/Container';
import scss from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={scss.sectionHero}>
      <Container>
        <div className={scss.boxHero}>
          <p className={scss.heroP}>I'm a</p>
          <h1 className={scss.heroPosition}>
            Full-Stack developer<span className={scss.point}>.</span>
          </h1>
          <button className={scss.buttonHero}>Contact Me</button>
        </div>
      </Container>
    </section>
  );
};
