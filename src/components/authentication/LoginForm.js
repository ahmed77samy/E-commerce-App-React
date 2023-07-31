import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import BorderLodaing from '../BorderLodaing';

function LoginForm() {
  // function formik submiting
  const Submiting = (values) => USER.LoginConfig(values, formik);
  // Yup Schema shape
  const YupSchema = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    password: Yup.string().required('هذا الحقل مطلوب'),
  };
  // Formik configration
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema),
  });
  return (
    <div className="content main-padding">
      <div className="login-form">
        <Container>
          <h3 className="text-center mb-5">تسجيل الدخول</h3>
          <Form noValidate onSubmit={formik.handleSubmit}>
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
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                {formik.isSubmitting === true ? <BorderLodaing /> : 'تسجيل الدخول'}
              </button>
              <button className="btn__classic mt-2 mr-2" type='button' disabled={formik.isSubmitting} data-title-top="الدخول بواسطه جوجل">
                <BsGoogle />
              </button>
            </Form.Group>
            <Form.Group>
              {formik.errors.error && (
                <Form.Control.Feedback className="text-capitalize m-0 d-block" type="invalid">
                  {formik.errors.error}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <p className="m-0">
                <Link to="/forget-password" className="link c-black weight-600">هل نسيت كلمة المرور ؟</Link>
              </p>
            </Form.Group>
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <p className="m-0 c-gray">
                ليس لديك حساب ؟{' '}
                <Link to="/signup" className="link c-black weight-600">
                  سجل الان
                </Link>
              </p>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default LoginForm;
