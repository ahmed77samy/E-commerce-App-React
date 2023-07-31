import Header from '../../components/header/Header.js';
import ForgetPasswordForm from '../../components/authentication/ForgetPasswordForm.js';
import Footer from '../../components/footer/Footer.js';

function ForgetPassword() {
  return (
    <div className="page-wrapper">
      <Header />
      <ForgetPasswordForm />
      <Footer />
    </div>
  );
}

export default ForgetPassword;
