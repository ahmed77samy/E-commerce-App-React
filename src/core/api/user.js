import apiURL from '../configration-api';
import cache from '../cache';

class USER {
  constructor() {
    this.route = '/api/v1/users';
  }
  /**
   * check the user login session
   * @returns boolean
   */
  IsLogin() {
    return cache.get('TOKEN') ? true : false;
  }

  /**
   * Send a data request for a new Signup
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   */
  SignupConfig(values, formik) {
    apiURL
      .post(this.route + '/signup', values)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
          cache.set('TOKEN', res.data.token);
        }
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          formik.setErrors({ email: response.data.message });
        } else {
          console.log(response.data.message);
        }
      })
      .then((_) => formik.setSubmitting(false));
  }
  /**
   * get a data request for a login
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   */
  LoginConfig(values, formik) {
    apiURL
      .post(this.route + '/signin', values)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
          cache.set('TOKEN', res.data.token);
        }
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          formik.setErrors({ error: response.data.message });
        } else {
          console.log(response.data.message);
        }
      })
      .then((_) => formik.setSubmitting(false));
  }

  /**
   * get a data request reset password
   * @param {object} values The values sent within the request
   * @param {object} formikEmail form email core values
   * @param {object} formikCode form email code values
   * @param {Function} setShowCode set update show code state
   * @param {Function} setShowAlert set update show alert state
   */
  ForgetPasswordConfig(values, formikEmail, formikCode, setShowCode) {
    apiURL
      .patch(this.route + '/sendCode', values)
      .then((res) => {
        setShowCode(true);
        formikCode.setFieldValue('email', values.email);
      })
      .catch(({ response }) => {
        formikEmail.setErrors({ email: response.data.message });
      })
      .then((_) => formikEmail.setSubmitting(false));
  }

  /**
   * get a data request for a login
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   */
  SendCode(values, formikCode) {
    apiURL
      .patch(this.route + '/forgetPassword', values)
      .then((res) => {
        if (res.status === 200) {
          window.location.href = '/';
          cache.set('TOKEN', res.data.token);
        }
      })
      .catch(({ response }) => {
        formikCode.setErrors({ code: response.data.message });
      })
      .then((_) => formikCode.setSubmitting(false));
  }

  /**
   * remove a cache for a logout
   */
  LogoutConfig() {
    cache.remove('TOKEN');
    window.location.href = '/login';
  }
}
const newUSER = new USER();
export default newUSER;
