import { Container } from 'components/CommonComponents/Container/Container';
import { Title } from 'components/CommonComponents/Title/Title';
import scss from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={scss.sectionSkills}>
      <Container>
        <div className={scss.boxSkills}>
          <Title title="Skills" />
          <ul className={scss.listSkills}>
            <li className={scss.skill}>GIT</li>
            <li className={scss.skill}>
              HTML<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>
              CSS/SCSS<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>SASS/LESS</li>
            <li className={scss.skill}>
              Java Script<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>
              React.js<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>
              Redux<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>Formik</li>
            <li className={scss.skill}>Yup</li>
            <li className={scss.skill}>i18Next</li>
            <li className={scss.skill}>Swiper</li>
            <li className={scss.skill}>
              React Native<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>
              Node.js<span className={scss.accent}>*</span>
            </li>
            <li className={scss.skill}>Parcel</li>
            <li className={scss.skill}>Axios</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
