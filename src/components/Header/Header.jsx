import { Container } from 'components/CommonComponents/Container/Container';
import { ButtonHeader } from 'components/CommonComponents/ButtonHeader/Button';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.sectionCeil}>
      <Container>
        <ul className={scss.headerList}>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Home" link="/" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="About me" link="/about" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Skills" link="/skills" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Portfolio" link="/portfolio" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Contact Me" link="/contact" />
          </li>
        </ul>
      </Container>
    </header>
  );
};
