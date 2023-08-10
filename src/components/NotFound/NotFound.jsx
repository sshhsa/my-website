import { Container } from 'components/CommonComponents/Container/Container';
import scss from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={scss.sectionNotFound}>
      <Container>Not Found Page</Container>
    </section>
  );
};

export default NotFound;
