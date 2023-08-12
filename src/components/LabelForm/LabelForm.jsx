import scss from './LabelForm.module.scss';

const LabelForm = ({ text }) => {
  return <p className={scss.labelForm}>{text}</p>;
};

export default LabelForm;
