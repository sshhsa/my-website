import { Title } from 'components/CommonComponents/Title/Title';
import scss from './Skills.module.scss';
import { Container } from 'components/CommonComponents/Container/Container';

export const Skills = () => {
  return (
    <section className={scss.sectionSkills}>
      <Container>
        <div className={scss.boxSkills}>
          <Title title="Skills" />
          <ul className={scss.listSkills}>
            <li className={scss.skill}>
              <span className={scss.valueSkill}>HTML</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}>CSS/SCSS</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> SASS/LESS</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> Java Script</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> React.js</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> Redux</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> React Native</span>
            </li>
            <li className={scss.skill}>
              <span className={scss.valueSkill}> Node.js</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
