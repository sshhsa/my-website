import Container from 'components/CommonComponents/Container/Container';
import { ThemeToggle } from 'components/ThemeToggle/ThemeToggle';
import { ButtonHeader } from 'components/ButtonHeader/Button';
import data from '../../data/buttonsHeader';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.sectionCeil}>
      <Container>
        <ThemeToggle />
        <ul className={scss.headerList}>
          {data.map(button => {
            return (
              <li key={button.id} className={scss.headerItem}>
                <ButtonHeader
                  buttonValue={button.buttonValue}
                  link={button.link}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </header>
  );
};
