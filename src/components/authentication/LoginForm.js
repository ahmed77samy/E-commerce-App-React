import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';

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
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                تسجيل الدخول
              </button>
            </Form.Group>
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <p className="m-0">
                <a className="link c-black weight-600">هل نسيت كلمة المرور ؟</a>
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
            <Form.Group className="form-group d-flex align-items-center justify-content-center mb-0 mt-4">
              <div className="sign-with">
                <div className="spliter light-2 mt-3 mb-4"></div>
                <ul className="social-media justify-content-center">
                  <li>
                    <a href="/">
                      <FaTwitter className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsGoogle className="icon" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaFacebookF className="icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default LoginForm;
