import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import BorderLodaing from '../BorderLodaing';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPasswordForm(props) {
  const [errDB, setErrDB] = useState(null);
  const [statusReset, setStatusReset] = useState(null);

  // function formik Code Submiting Code
  const Submiting = (values) => USER.ResetPasswordConfig(values, formik, setErrDB, setStatusReset);

  // Yup Schema Code shape
  const YupSchema = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    otp: Yup.string().required('هذا الحقل مطلوب'),
    newpassword: Yup.string().required('هذا الحقل مطلوب').min(8, 'كلمه المرور صغيره جدا!').max(50, 'كلمه المرور طويله جدا!'),
  };

  // FormikCode configration
  const formik = useFormik({
    initialValues: { email: props.email, otp: '', newpassword: '' },
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema),
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      {errDB && (
        <Form.Control.Feedback className="text-capitalize d-block mb-2" type="invalid">
          {errDB}
        </Form.Control.Feedback>
      )}
      <Form.Control.Feedback className="text-capitalize mb-2 d-block" type="valid">
        {statusReset ? (
          <>
            {statusReset} <Link to="/login" className='link'>سجل الدخول الان</Link>
          </>
        ) : (
          'تم إرسال كود للبريد الالكتروني برجاء ارساله عبر الحقل التالي'
        )}
      </Form.Control.Feedback>
      <Form.Group controlId="otp" className="form-group">
        <Form.Control
          className="input__classic"
          type="text"
          placeholder="ادخل الكود"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.otp}
          isValid={formik.touched.otp && !formik.errors.otp}
          isInvalid={formik.touched.otp && formik.errors.otp}
        />
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.otp && (formik.errors.otp ? 'invalid' : 'valid')}>
          {formik.touched.otp && (formik.errors.otp ? `${formik.errors.otp}` : 'يبدو جيدا')}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="newpassword" className="form-group">
        <Form.Control
          className="input__classic"
          type="newpassword"
          placeholder="ادخل كلمة المرور الجديدة"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.newpassword}
          isValid={formik.touched.newpassword && !formik.errors.newpassword}
          isInvalid={formik.touched.newpassword && formik.errors.newpassword}
        />
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.newpassword && (formik.errors.newpassword ? 'invalid' : 'valid')}>
          {formik.touched.newpassword && (formik.errors.newpassword ? `${formik.errors.newpassword}` : 'يبدو جيدا')}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
        <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
          {formik.isSubmitting === true ? <BorderLodaing /> : 'تأكيد'}
        </button>
      </Form.Group>
    </Form>
  );
}

export default ResetPasswordForm;
