import PropTypes from 'prop-types';
import scss from './Title.module.scss';

const Title = ({ title }) => {
  return <h1 className={scss.titleCategory}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
