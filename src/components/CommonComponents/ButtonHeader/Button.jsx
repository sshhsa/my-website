import PropTypes from 'prop-types';
import scss from './Button.module.scss';
import { NavLink } from 'react-router-dom';

export const ButtonHeader = ({ buttonValue, link }) => {
  return (
    <NavLink to={link} className={scss.buttonHeader}>
      {buttonValue}
    </NavLink>
  );
};

ButtonHeader.propTypes = {
  link: PropTypes.string,
  buttonValue: PropTypes.string.isRequired,
};
