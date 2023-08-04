import React, { useState } from 'react';
import { Container } from 'components/CommonComponents/Container/Container';
import { ButtonHeader } from 'components/CommonComponents/ButtonHeader/Button';
import scss from './Header.module.scss';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('Home');

  const handleNavLinkClick = buttonValue => {
    setActiveButton(buttonValue);
  };

  return (
    <header className={scss.sectionCeil}>
      <Container>
        <ul className={scss.headerList}>
          <li className={scss.headerItem}>
            <ButtonHeader
              buttonValue="Home"
              link="/"
              active={activeButton === 'Home'}
              onClick={() => handleNavLinkClick('Home')}
            />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader
              buttonValue="About me"
              link="/about"
              active={activeButton === 'About'}
              onClick={() => handleNavLinkClick('About')}
            />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader
              buttonValue="Skills"
              link="/skills"
              active={activeButton === 'Skills'}
              onClick={() => handleNavLinkClick('Skills')}
            />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader
              buttonValue="Portfolio"
              link="/portfolio"
              active={activeButton === 'Portfolio'}
              onClick={() => handleNavLinkClick('Portfolio')}
            />
          </li>
          <li className={scss.headerItem}>
            <ButtonHeader
              buttonValue="Contact Me"
              link="/contact"
              active={activeButton === 'Contact'}
              onClick={() => handleNavLinkClick('Contact')}
            />
          </li>
        </ul>
      </Container>
    </header>
  );
};
