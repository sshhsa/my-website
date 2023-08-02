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
          <h3 clasName={scss.skillsTitle}>My skills</h3>
          <ul className={scss.listSkills}>
            <li className={scss.skill}>
              <span className={scss.accentPoint}>HTML</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}>CSS/SCSS</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> SASS/LESS</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> Java Script</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> React.js</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> Redux</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> React Native</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.accentPoint}> Node.js</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
