import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { RiSendPlaneFill } from 'react-icons/ri';

import Container from 'components/CommonComponents/Container/Container';
import LabelForm from 'components/LabelForm/LabelForm';
import ListItems from './ListItems/ListItems';
import scss from './ContactMe.module.scss';

const schemaContact = yup.object().shape({
  name: yup
    .string()
    .min(6, 'Not enough symbols')
    .max(20, 'Too long name')
    .required(),
  text: yup
    .string()
    .min(10, 'Let`s type more text')
    .max(1000, 'Too long message')
    .required(),
});

const ContactMe = () => {
  const handleSubmit = (_, { resetForm }) => {
    toast.success('Form is completed!');
    resetForm();
  };

  return (
    <section className={scss.sectionContactMe}>
      <Container>
        <Formik
          initialValues={{ name: '', text: '' }}
          validationSchema={schemaContact}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off" className={scss.formContact}>
            <label>
              <LabelForm text="Name" />
              <Field type="text" name="name" className={scss.fieldFormik} />
              <ErrorMessage
                component="span"
                name="name"
                className={scss.errorMessage}
              />
            </label>
            <label>
              <LabelForm text="Text" />
              <Field
                component="textarea"
                name="text"
                className={scss.fieldFormik}
              />
              <ErrorMessage
                component="span"
                name="text"
                className={scss.errorMessage}
              />
            </label>
          </Form>
        </Formik>
        <button className={scss.buttonSumit} type="submit">
          Send <RiSendPlaneFill className={scss.sendIcon} />
        </button>
        <ListItems />
      </Container>
    </section>
  );
};

export default ContactMe;
