import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import scss from './ButtonNavLink.module.scss';

const ButtonNavLink = ({ text }) => {
  return (
    <NavLink to="/contact" className={scss.buttonNavLink}>
      {text}
    </NavLink>
  );
};

ButtonNavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonNavLink;
