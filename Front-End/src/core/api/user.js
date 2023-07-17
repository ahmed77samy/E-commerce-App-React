import apiURL from "../configration-api"
import cache from "../cache"

class USER {
  /**
   * Send a data request for a new Signup
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   */
  SignupConfig (values , formik) {
    apiURL.post("/register", values)
    .then((res) => {
      if( res.status === 200 ) {
        window.location.href = "/"
        cache.set("TOKEN" , res.data.data.token)
      }
    })
    .catch(({response: {data} }) => formik.setErrors(data.errors))
    .then(_ => formik.setSubmitting(false))
  }
  /**
   * get a data request for a login
   * @param {object} values The values sent within the request
   * @param {object} formik form core values
   */
  LoginConfig (values , formik) {
    apiURL.post("/login", values)
    .then((res) => {
      if( res.status === 200 ) {
        window.location.href = "/"
        cache.set("TOKEN" , res.data.data.token)
      }
    })
    .catch(({response: {data} }) => formik.setErrors(data.errors))
    .then(_ => formik.setSubmitting(false))
  }
  /**
   * remove a cache for a logout
   */
  LogoutConfig () {
    cache.remove("TOKEN")
    window.location.href = "/login"
  }
}

export default new USER