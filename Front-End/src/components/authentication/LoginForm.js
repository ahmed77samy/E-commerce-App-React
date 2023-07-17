import USER from "../../core/api/user"
import { useFormik } from "formik"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

function LoginForm () {
  const navigate = useNavigate();
  // function formik submiting
  const Submiting = (values) => USER.LoginConfig(values , formik)
  // Yup Schema shape
  const YupSchema = {
    email: Yup.string().required("this field is required").email("invaild email address"),
    password: Yup.string().required('this field is required')
  }
  // Formik configration
  const formik = useFormik({
    initialValues: {email: "", password: ""},
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema)
  })
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group controlId="email" className="form-group">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email" 
          placeholder="Enter email" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.email && (formik.errors.email ? "invalid" : "valid")}>
          {formik.touched.email && (formik.errors.email ? `${formik.errors.email}` : "Looks good!")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password" className="form-group">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password" 
          placeholder="Password"
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isValid={formik.touched.password && !formik.errors.password}
          isInvalid={formik.touched.password && formik.errors.password}
        />
        <Form.Text>
          <Link to="/">Forgotten password?</Link>
        </Form.Text>
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.password && (formik.errors.password ? "invalid" : "valid")}>
          {formik.touched.password && (formik.errors.password ? `${formik.errors.password}` : "Looks good!")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group d-flex align-items-center justify-content-center mt-3">
        <Button variant="primary" type="submit" disabled={formik.isSubmitting || !formik.isValid}>Login</Button>
        <span className="mx-2">OR</span>
        <Button variant="success" onClick={() => navigate("/signup")}>Create New Account</Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm