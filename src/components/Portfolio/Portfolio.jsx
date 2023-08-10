import Container from 'components/CommonComponents/Container/Container';
import Title from 'components/CommonComponents/Title/Title';
import scss from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={scss.sectionPortfolio}>
      <Container>
        <Title title="Portfolio" />
      </Container>
    </section>
  );
};

export default Portfolio;
