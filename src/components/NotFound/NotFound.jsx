import Container from 'components/CommonComponents/Container/Container';
import ButtonNavLink from 'components/CommonComponents/ButtonNavLink/ButtonNavLink';
import scss from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={scss.sectionNotFound}>
      <Container>
        Page is not found
        <ButtonNavLink text="Back to Home" link="/" />
      </Container>
    </section>
  );
};

export default NotFound;
