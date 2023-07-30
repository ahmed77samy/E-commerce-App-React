import NotFoundContent from "../../components/pages/NotFoundContent";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function NotFound() {
  return (
    <div className="page-wrapper">
      <Header />
      <NotFoundContent />
      <Footer />
    </div>
  );
}

export default NotFound;
