import { Container } from 'components/CommonComponents/Container/Container';
import { ButtonHeader } from 'components/CommonComponents/ButtonHeader/Button';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.sectionCeil}>
      <Container>
        <ul className={scss.headerList}>
          <li>
            <ButtonHeader buttonValue="About me" />
          </li>
          <li>
            <ButtonHeader buttonValue="Skills" />
          </li>
          <li>
            <ButtonHeader buttonValue="Portfolio" />
          </li>
          <li>
            <ButtonHeader buttonValue="Contact" />
          </li>
        </ul>
      </Container>
    </header>
  );
};
