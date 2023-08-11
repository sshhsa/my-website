import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import scss from './Button.module.scss';

export const ButtonHeader = ({ buttonValue, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <NavLink
      to={link}
      className={`${scss.buttonHeader} ${isActive ? scss.active : ''}`}
    >
      {buttonValue}
      {isActive && <div className={scss.activeIndicator}></div>}
    </NavLink>
  );
};

ButtonHeader.propTypes = {
  link: PropTypes.string,
  buttonValue: PropTypes.string.isRequired,
};
