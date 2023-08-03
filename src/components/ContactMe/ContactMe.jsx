import { Title } from 'components/CommonComponents/Title/Title';
import scss from './ContactMe.module.scss';

export const ContactMe = () => {
  return (
    <section className={scss.sectionContactMe}>
      <Title title="Contact" />
    </section>
  );
};
