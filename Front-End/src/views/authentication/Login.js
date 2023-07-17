import Header from "../../components/header/Header.js"
import { Container } from "react-bootstrap"
import LoginForm from "../../components/authentication/LoginForm.js"

function Login () {
  return (
    <div className="page-wrapper">
      <Header style={{ marginBottom: '50px'}} />
      <Container>
        <LoginForm />
      </Container>
    </div>
  )
}

export default Login