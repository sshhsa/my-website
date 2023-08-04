import PropTypes from 'prop-types';
import scss from './Button.module.scss';
import { NavLink } from 'react-router-dom';

export const ButtonHeader = ({ buttonValue, link, active, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <NavLink
      to={link}
      className={`${scss.buttonHeader} ${active ? scss.active : ''}`}
      onClick={handleClick}
    >
      {buttonValue}
    </NavLink>
  );
};

ButtonHeader.propTypes = {
  link: PropTypes.string,
  buttonValue: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
