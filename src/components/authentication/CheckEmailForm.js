import USER from '../../core/api/user';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap';
import * as Yup from 'yup';
import BorderLodaing from '../BorderLodaing';
import { useState } from 'react';

function CheckEmailForm(props) {
  const [errDB, setErrDB] = useState(null);

  // function formik Submiting
  const Submiting = (values) => USER.CheckEmailConfig(values, formik, setErrDB);

  // Yup Schema shape
  const YupSchema = {
    email: Yup.string().required('هذا الحقل مطلوب').email('بريد الكتروني غير صحيح'),
    otp: Yup.string().required('هذا الحقل مطلوب'),
  };

  // Formik configration
  const formik = useFormik({
    initialValues: { email: props.email, otp: '' },
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
        تم إرسال رساله تاكيد للبريد الالكتروني برجاء ادخال كود التاكيد
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
      <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
        <button className="btn__classic mt-2 w-100" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
          {formik.isSubmitting === true ? <BorderLodaing /> : 'تأكيد'}
        </button>
      </Form.Group>
    </Form>
  );
}

export default CheckEmailForm;
