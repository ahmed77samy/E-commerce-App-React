import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import BorderLodaing from '../BorderLodaing';
import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ResetPasswordForm from './ResetPasswordForm';

function ForgetPasswordForm() {
  const [errDB, setErrDB] = useState(null);
  const [showReset, setShowReset] = useState(false);
  const [email, setEmail] = useState(false);
  const nodeRef = useRef(null);

  // function formik Email Submiting Email
  const Submiting = (values) => USER.ForgetPasswordConfig(values, formik, setErrDB, setShowReset, setEmail);

  // Yup Schema Email shape
  const YupSchema = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
  };

  // Formik Email configration
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema),
  });

  const ForgetPasswordForm = () => {
    return (
      <Form noValidate onSubmit={formik.handleSubmit}>
        {errDB && (
          <Form.Control.Feedback className="text-capitalize mb-2 d-block" type="invalid">
            {errDB}
          </Form.Control.Feedback>
        )}
        <Form.Group controlId="email" className="form-group">
          <Form.Control
            className="input__classic"
            type="email"
            placeholder="ادخل بريدك الألكتروني"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isValid={formik.touched.email && !formik.errors.email}
            isInvalid={formik.touched.email && formik.errors.email}
          />
          <Form.Control.Feedback className="text-capitalize" type={formik.touched.email && (formik.errors.email ? 'invalid' : 'valid')}>
            {formik.touched.email && (formik.errors.email ? `${formik.errors.email}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
            {formik.isSubmitting === true ? <BorderLodaing /> : 'تأكيد'}
          </button>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <p className="m-0 c-gray">
            العوده الي{' '}
            <Link to="/login" className="link c-black weight-600">
              تسجيل الدخول
            </Link>
          </p>
        </Form.Group>
      </Form>
    );
  };

  return (
    <div className="content main-padding">
      <div className="forget-password-form overflow-hidden">
        <Container>
          <h3 className="text-center mb-5">اعد ضبط كلمه السر</h3>
          <SwitchTransition mode="out-in">
            <CSSTransition key={showReset} timeout={400} classNames={showReset ? 'slideright' : 'slideleft'} nodeRef={nodeRef}>
              <div ref={nodeRef}>{!showReset ? ForgetPasswordForm() : <ResetPasswordForm email={email} />}</div>
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
