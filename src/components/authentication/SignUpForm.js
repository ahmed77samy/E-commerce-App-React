import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import BorderLodaing from '../BorderLodaing';
import { useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CheckEmailForm from './CheckEmailForm';

function SignUpForm() {
  const [errDB, setErrDB] = useState(null);
  const [showCheck, setShowCheck] = useState(false);
  const [email, setEmail] = useState(false);
  const nodeRef = useRef(null);

  // function formik submiting
  const Submiting = (values) => USER.SignupConfig(values, formik, setErrDB, setShowCheck, setEmail);
  // Yup Schema shape
  const YupSchema = {
    name: Yup.string().required('هذا الحقل مطلوب'),
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    password: Yup.string().required('هذا الحقل مطلوب').min(8, 'كلمه المرور صغيره جدا!').max(50, 'كلمه المرور طويله جدا!'),
    phone: Yup.string().required('هذا الحقل مطلوب').matches('^01[0125][0-9]{8}$', 'يجب ان يكون رقم الهاتف رقم مصري صحيح'),
  };
  // Formik configration
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', phone: '' },
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema),
  });

  const SignUpForm = () => {
    return (
      <Form noValidate onSubmit={formik.handleSubmit}>
        {errDB?.map((msg, index) => {
          return (
            <Form.Control.Feedback className="text-capitalize d-block mb-2" type="invalid" key={index}>
              {msg}
            </Form.Control.Feedback>
          );
        })}
        <Form.Group controlId="name" className="form-group">
          <Form.Control
            className="input__classic"
            type="text"
            placeholder="ادخل اسمك"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            isValid={formik.touched.name && !formik.errors.name}
            isInvalid={formik.touched.name && formik.errors.name}
          />
          <Form.Control.Feedback className="text-capitalize" type={formik.touched.name && (formik.errors.name ? 'invalid' : 'valid')}>
            {formik.touched.name && (formik.errors.name ? `${formik.errors.name}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
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
          <Form.Text className="text-muted">لن نشارك بريدك الإلكتروني مع أي شخص آخر.</Form.Text>
          <Form.Control.Feedback className="text-capitalize" type={formik.touched.email && (formik.errors.email ? 'invalid' : 'valid')}>
            {formik.touched.email && (formik.errors.email ? `${formik.errors.email}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="password" className="form-group">
          <Form.Control
            className="input__classic"
            type="password"
            placeholder="ادخل كلمة المرور"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.touched.password && formik.errors.password}
          />
          <Form.Control.Feedback className="text-capitalize" type={formik.touched.password && (formik.errors.password ? 'invalid' : 'valid')}>
            {formik.touched.password && (formik.errors.password ? `${formik.errors.password}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone" className="form-group">
          <Form.Control
            className="input__classic"
            type="tel"
            placeholder="ادخل رقم الهاتف"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            isValid={formik.touched.phone && !formik.errors.phone}
            isInvalid={formik.touched.phone && formik.errors.phone}
          />
          <Form.Control.Feedback className="text-capitalize" type={formik.touched.phone && (formik.errors.phone ? 'invalid' : 'valid')}>
            {formik.touched.phone && (formik.errors.phone ? `${formik.errors.phone}` : 'يبدو جيدا')}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
            {formik.isSubmitting === true ? <BorderLodaing /> : 'إنشاء حساب جديد'}
          </button>
          <button className="btn__classic mt-2 mr-2" type="button" disabled={formik.isSubmitting} data-title-top="التسجيل بواسطه جوجل">
            <BsGoogle />
          </button>
        </Form.Group>
        <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
          <p className="m-0 c-gray">
            بالفعل لديك حساب ؟{' '}
            <Link to="/login" className="link c-black weight-600">
              سجل الان
            </Link>
          </p>
        </Form.Group>
      </Form>
    );
  };

  return (
    <div className="content main-padding">
      <div className="register-form overflow-hidden">
        <Container>
          <h3 className="text-center mb-5">تسجيل حساب جديد</h3>
          <SwitchTransition mode="out-in">
            <CSSTransition key={showCheck} timeout={400} classNames={showCheck ? 'slideright' : 'slideleft'} nodeRef={nodeRef}>
              <div ref={nodeRef}>{!showCheck ? SignUpForm() : <CheckEmailForm email={email} />}</div>
            </CSSTransition>
          </SwitchTransition>
        </Container>
      </div>
    </div>
  );
}

export default SignUpForm;
