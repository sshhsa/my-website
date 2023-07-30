import scss from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={scss.sectionHero}>
      <p className={scss.heroP}>I'm a</p>
      <h1 className={scss.heroPosition}>Full-Stack developer</h1>
      <button>Contact Me</button>
    </section>
  );
};
