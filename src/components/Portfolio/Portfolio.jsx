import { Title } from 'components/CommonComponents/Title/Title';
import scss from './Portfolio.module.scss';

export const Portfolio = () => {
  return (
    <section className={scss.sectionPortfolio}>
      <Title title="Portfolio" />
    </section>
  );
};
