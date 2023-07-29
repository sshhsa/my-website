import { Container } from 'components/CommonComponents/Container/Container';
import { Button } from 'components/CommonComponents/Button/Button';
import scss from './Header.module.scss';

export const Header = () => {
  return (
    <header className={scss.sectionCeil}>
      <Container>
        <Button buttonValue="About me" />
        <Button buttonValue="Skills" />
        <Button buttonValue="Portfolio" />
        <Button buttonValue="Contact" />
      </Container>
    </header>
  );
};
