import Header from '../../components/header/Header.js';
import SignUpForm from '../../components/authentication/SignUpForm.js';
import Footer from '../../components/footer/Footer.js';

function SignUp() {
  return (
    <div className="page-wrapper">
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default SignUp;
