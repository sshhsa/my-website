import Container from 'components/CommonComponents/Container/Container';
import Title from 'components/CommonComponents/Title/Title';
import scss from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={scss.sectionAboutMe}>
      <Container>
        <Title title="About Me" />
        <div className={scss.boxInfo}>
          <div className={scss.boxImage}>
            <div className={scss.myImage}></div>
          </div>
          <div className={scss.boxText}>
            <h2 className={scss.myName}>
              My name is <span className={scss.accentText}>Alex</span>
            </h2>
            <p className={scss.description}>
              Hello! I'm Alex Marynkevych. I have a strong desire to improve my
              hard and soft skills. I am particularly proficient in Front-end
              and Back-end developments. Although I only have one year of
              experience, I am capable of creating functional websites according
              to strict requirements. My main goal is to become a sought-after
              Full-Stack developer for your company.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
