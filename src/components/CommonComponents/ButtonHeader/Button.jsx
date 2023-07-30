import PropTypes from 'prop-types';
import scss from './Button.module.scss';

export const ButtonHeader = ({ buttonValue }) => {
  return <button className={scss.buttonHeader}>{buttonValue}</button>;
};

ButtonHeader.propTypes = {
  buttonValue: PropTypes.string.isRequired,
};
