import Header from '../../components/header/Header.js';
import LoginForm from '../../components/authentication/LoginForm.js';
import Footer from '../../components/footer/Footer.js';

function Login() {
  return (
    <div className="page-wrapper">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
