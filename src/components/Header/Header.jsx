import { Container } from 'components/CommonComponents/Container/Container';
import { ButtonHeader } from 'components/CommonComponents/ButtonHeader/Button';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.sectionCeil}>
      <Container>
        <ul className={scss.headerList}>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="About me" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Skills" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Portfolio" />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader buttonValue="Contact" />
          </li>
        </ul>
      </Container>
    </header>
  );
};
