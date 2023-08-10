import { Container } from 'components/CommonComponents/Container/Container';
import { Title } from 'components/CommonComponents/Title/Title';
import scss from './ContactMe.module.scss';

const ContactMe = () => {
  return (
    <section className={scss.sectionContactMe}>
      <Container>
        <Title title="Contact" />
      </Container>
    </section>
  );
};

export default ContactMe;
