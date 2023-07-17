import USER from "../../core/api/user"
import { useFormik } from "formik"
import { Button, Form } from "react-bootstrap"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

function SignUpForm () {
  const navigate = useNavigate();
  // function formik submiting
  const Submiting = (values) => USER.SignupConfig(values , formik)
  // Yup Schema shape
  const YupSchema = {
    name: Yup.string().required("this field is required"),
    email: Yup.string().required("this field is required").email("invaild email address"),
    password: Yup.string().required('this field is required').min(8, 'password is Too Short!').max(50, 'password is Too Long!'),
    password_confirmation: Yup.string().required('this field is required').test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
  }
  // Formik configration
  const formik = useFormik({
    initialValues: {name: "", email: "", password: "", password_confirmation: ""},
    onSubmit: Submiting,
    validationSchema: Yup.object(YupSchema)
  })

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Form.Group controlId="name" className="form-group">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Enter name" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.name}
          isValid={formik.touched.name && !formik.errors.name}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.name && (formik.errors.name ? "invalid" : "valid")}>
          {formik.touched.name && (formik.errors.name ? `${formik.errors.name}` : "Looks good!")}
        </Form.Control.Feedback>
      </Form.Group>
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
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.password && (formik.errors.password ? "invalid" : "valid")}>
          {formik.touched.password && (formik.errors.password ? `${formik.errors.password}` : "Looks good!")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="password_confirmation" className="form-group">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password" 
          placeholder="confirm Password"
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.password_confirmation}
          isValid={formik.touched.password_confirmation && !formik.errors.password_confirmation}
          isInvalid={formik.touched.password_confirmation && formik.errors.password_confirmation}
        />
        <Form.Control.Feedback className="text-capitalize" type={formik.touched.password_confirmation && (formik.errors.password_confirmation ? "invalid" : "valid")}>
          {formik.touched.password_confirmation && (formik.errors.password_confirmation ? `${formik.errors.password_confirmation}` : "Looks good!")}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="form-group d-flex align-items-center justify-content-center mt-5">
        <Button variant="primary" type="submit" disabled={formik.isSubmitting || !formik.isValid}>SignUp</Button>
        <span className="mx-2">OR</span>
        <Button variant="success" onClick={() => navigate("/login")}>I Already Have An Account</Button>
      </Form.Group>
    </Form>
  )
}

export default SignUpForm