import PropTypes from 'prop-types';
import scss from './Button.module.scss';

export const Button = ({ buttonValue }) => {
  return <button className={scss.buttonHeader}>{buttonValue}</button>;
};

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
};
