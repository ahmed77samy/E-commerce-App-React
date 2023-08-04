import apiURL from '../configration-api';
import cache from '../cache';

class USER {
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
   * @param {Function} setErrDB set update err data base state
   * @param {Function} setShowCheck set update show check email state
   * @param {Function} setEmail set update email state
   */
  SignupConfig(values, formik, setErrDB, setShowCheck, setEmail) {
    apiURL
      .post('/signup', values)
      .then((res) => {
        setEmail(values.email);
        setShowCheck(true);
      })
      .catch((err) => {
        if (err.response) {
          setErrDB(err.response.data.errors);
        } else {
          setErrDB(['حدث خطا ما']);
        }
      })
      .then((_) => formik.setSubmitting(false));
  }

  /**
   * Send a data request for a check email
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   * @param {Function} setErrDB set update err data base state
   */
  CheckEmailConfig(values, formik, setErrDB) {
    apiURL
      .post('/checkemail', values)
      .then((res) => {
        window.location.href = '/';
        cache.set('TOKEN', res.data.data.token);
      })
      .catch((err) => {
        if (err.response) {
          setErrDB(err.response.data.message);
        } else {
          setErrDB('حدث خطا ما');
        }
      })
      .then((_) => formik.setSubmitting(false));
  }

  /**
   * get a data request for a login
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   * @param {Function} setErrDB set update err data base state
   */
  LoginConfig(values, formik, setErrDB) {
    apiURL
      .post('/login', values)
      .then((res) => {
        window.location.href = '/';
        cache.set('TOKEN', res.data.data.token);
      })
      .catch((err) => {
        if (err.response) {
          setErrDB(err.response.data.message);
        } else {
          setErrDB('حدث خطا ما');
        }
      })
      .then((_) => formik.setSubmitting(false));
  }

  /**
   * get a data request reset password
   * @param {object} values The values sent within the request
   * @param {object} formikEmail form email core values
   * @param {Function} setErrDB set update err data base state
   * @param {Function} setShowReset set update show reset password state
   * @param {Function} setEmail set update email state
   */
  ForgetPasswordConfig(values, formik, setErrDB, setShowReset, setEmail) {
    apiURL
      .post('/forgetpassword', values)
      .then((res) => {
        setEmail(values.email);
        setShowReset(true);
      })
      .catch((err) => {
        if (err.response) {
          setErrDB(err.response.data.message);
        } else {
          setErrDB('حدث خطا ما');
        }
      })
      .then((_) => formik.setSubmitting(false));
  }

  /**
   * get a data request for a login
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   * @param {Function} setErrDB set update err data base state
   * @param {Function} setStatusReset set update response data base state
   */
  ResetPasswordConfig(values, formik, setErrDB, setStatusReset) {
    apiURL
      .post('/resetPassword', values)
      .then((res) => {
        setStatusReset("تم تغير كلمه المرور بنجاح")
      })
      .catch((err) => {
        if (err.response) {
          setErrDB(err.response.data.message);
        } else {
          setErrDB('حدث خطا ما');
        }
      })
      .then((_) => formik.setSubmitting(false));
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
