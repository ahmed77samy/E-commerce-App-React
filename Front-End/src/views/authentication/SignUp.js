import Header from "../../components/header/Header.js"
import { Container } from "react-bootstrap"
import SignUpForm from "../../components/authentication/SignUpForm.js"

function SignUp () {
  return (
    <div className="page-wrapper">
      <Header style={{ marginBottom: '50px'}} />
      <Container>
        <SignUpForm />
      </Container>
    </div>
  )
}

export default SignUp