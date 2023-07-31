import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import BorderLodaing from '../BorderLodaing';
import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function ForgetPasswordForm() {
  const [showCode, setShowCode] = useState(false);
  const nodeRef = useRef(null);

  // function formik Email Submiting Email
  const SubmitingEmail = (values) => USER.ForgetPasswordConfig(values, formikEmail, formikCode, setShowCode);

  // Yup Schema Email shape
  const YupSchemaEmail = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
  };

  // Formik Email configration
  const formikEmail = useFormik({
    initialValues: { email: '' },
    onSubmit: SubmitingEmail,
    validationSchema: Yup.object(YupSchemaEmail),
  });

  // function formik Code Submiting Code
  const SubmitingCode = (values) => USER.SendCode(values, formikCode);

  // Yup Schema Code shape
  const YupSchemaCode = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    code: Yup.string().required('هذا الحقل مطلوب'),
    password: Yup.string().required('هذا الحقل مطلوب').min(8, 'كلمه المرور صغيره جدا!').max(50, 'كلمه المرور طويله جدا!'),
  };

  // FormikCode configration
  const formikCode = useFormik({
    initialValues: { email: '', code: '', password: '' },
    onSubmit: SubmitingCode,
    validationSchema: Yup.object(YupSchemaCode),
  });

  const FormEmail = () => {
    return (
      <Form noValidate onSubmit={formikEmail.handleSubmit}>
        <Form.Group controlId="email" className="form-group">
          <Form.Control
            className="input__classic"
            type="email"
            placeholder="ادخل بريدك الألكتروني"
            onChange={formikEmail.handleChange}
            onBlur={formikEmail.handleBlur}
            value={formikEmail.values.email}
            isValid={formikEmail.touched.email && !formikEmail.errors.email}
            isInvalid={formikEmail.touched.email && formikEmail.errors.email}
          />
          <Form.Control.Feedback className="text-capitalize" type={formikEmail.touched.email && (formikEmail.errors.email ? 'invalid' : 'valid')}>
            {formikEmail.touched.email && (formikEmail.errors.email ? `${formikEmail.errors.email}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <button className="btn__classic mt-2 w-100" type="submit" disabled={formikEmail.isSubmitting || !formikEmail.isValid}>
            {formikEmail.isSubmitting === true ? <BorderLodaing /> : 'تأكيد'}
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

  const FormCode = () => {
    return (
      <Form noValidate onSubmit={formikCode.handleSubmit}>
        <Form.Control.Feedback className="text-capitalize mb-2 d-block" type="valid">
          تم إرسال كود للبريد الالكتروني برجاء ارساله عبر الحقل التالي
        </Form.Control.Feedback>
        <Form.Group controlId="code" className="form-group">
          <Form.Control
            className="input__classic"
            type="text"
            placeholder="ادخل الكود"
            onChange={formikCode.handleChange}
            onBlur={formikCode.handleBlur}
            value={formikCode.values.code}
            isValid={formikCode.touched.code && !formikCode.errors.code}
            isInvalid={formikCode.touched.code && formikCode.errors.code}
          />
          <Form.Control.Feedback className="text-capitalize" type={formikCode.touched.code && (formikCode.errors.code ? 'invalid' : 'valid')}>
            {formikCode.touched.code && (formikCode.errors.code ? `${formikCode.errors.code}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" className="form-group">
          <Form.Control
            className="input__classic"
            type="password"
            placeholder="ادخل كلمة المرور الجديدة"
            onChange={formikCode.handleChange}
            onBlur={formikCode.handleBlur}
            value={formikCode.values.password}
            isValid={formikCode.touched.password && !formikCode.errors.password}
            isInvalid={formikCode.touched.password && formikCode.errors.password}
          />
          <Form.Control.Feedback className="text-capitalize" type={formikCode.touched.password && (formikCode.errors.password ? 'invalid' : 'valid')}>
            {formikCode.touched.password && (formikCode.errors.password ? `${formikCode.errors.password}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <button className="btn__classic mt-2 w-100" type="submit" disabled={formikCode.isSubmitting || !formikCode.isValid}>
            {formikCode.isSubmitting === true ? <BorderLodaing /> : 'تأكيد'}
          </button>
        </Form.Group>
      </Form>
    );
  };

  return (
    <div className="content main-padding">
      <div className="forget-password-form">
        <Container>
          <h3 className="text-center mb-5">اعد ضبط كلمه السر</h3>
          <SwitchTransition mode="out-in">
            <CSSTransition key={showCode} timeout={400} classNames={showCode ? 'slideright' : 'slideleft'} nodeRef={nodeRef}>
              <div ref={nodeRef}>{!showCode ? FormEmail() : FormCode()}</div>
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
