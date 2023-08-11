import Container from 'components/CommonComponents/Container/Container';
import Title from 'components/CommonComponents/Title/Title';
import skills from '../../data/skills.json';
import scss from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={scss.sectionSkills}>
      <Container>
        <div className={scss.boxSkills}>
          <Title title="Skills" />
          <ul className={scss.listSkills}>
            {skills.map(skill => {
              return (
                <li key={skill.id} className={scss.skill}>
                  {skill.skill}
                  {skill.marked && <span className={scss.accent}>*</span>}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Skills;

// sCfNe93AobtO4pGKrWuJv;
// tDgOf04BpcuP5qHLsXvKw;
// uEhPg15CqdvQ6rIMtYwLx;
// vFjQh26DrweR7sJNuZmMy;
// wGkRi37EsxfS8tKOvAnNz;
// xHlSj48FtygT9uLPwBoOa;
// yImTk59GuzaU0vMQxPpPb;
// zJnUl60HvbaV1wNRyQqQc;
// aKoVm71IwcxC2xOSzRrRd;
// bLpWn82JyvdD3yPTaSsSe;
