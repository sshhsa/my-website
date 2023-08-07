import { Title } from 'components/CommonComponents/Title/Title';
import scss from './AboutMe.module.scss';

export const AboutMe = () => {
  return (
    <section className={scss.sectionAboutMe}>
      <Title title="About Me" />
      <div className={scss.boxInfo}>
        <div className={scss.boxImage}></div>
        <div className={scss.boxText}>
          <h2 className={scss.myName}>
            My name is <span className={scss.accentText}>Alex</span>
          </h2>
          <p className={scss.description}>
            I'm Full-Stack developer, and i am very passionate and dedicated to
            my work with 1 year Experience.
          </p>
        </div>
      </div>
    </section>
  );
};
