import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';

function SignUpForm() {
  // function formik submiting
  const Submiting = (values) => USER.SignupConfig(values, formik);
  // Yup Schema shape
  const YupSchema = {
    name: Yup.string().required('هذا الحقل مطلوب'),
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    password: Yup.string().required('هذا الحقل مطلوب').min(8, 'كلمه المرور صغيره جدا!').max(50, 'كلمه المرور طويله جدا!'),
    password_confirmation: Yup.string()
      .required('هذا الحقل مطلوب')
      .test('passwords-match', 'يجب أن تتطابق كلمات المرور', function (value) {
        return this.parent.password === value;
      }),
  };
  // Formik configration
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', password_confirmation: '' },
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema),
  });

  return (
    <div className="content main-padding">
      <div className="register-form">
        <Container>
          <h3 className="text-center mb-5">تسجيل حساب جديد</h3>
          <Form noValidate onSubmit={formik.handleSubmit}>
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
            <Form.Group controlId="password_confirmation" className="form-group">
              <Form.Control
                className="input__classic"
                type="password"
                placeholder="تأكيد كلمة المرور"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password_confirmation}
                isValid={formik.touched.password_confirmation && !formik.errors.password_confirmation}
                isInvalid={formik.touched.password_confirmation && formik.errors.password_confirmation}
              />
              <Form.Control.Feedback className="text-capitalize" type={formik.touched.password_confirmation && (formik.errors.password_confirmation ? 'invalid' : 'valid')}>
                {formik.touched.password_confirmation && (formik.errors.password_confirmation ? `${formik.errors.password_confirmation}` : 'يبدو جيدا')}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
              <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                إنشاء حساب جديد
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

export default SignUpForm;
