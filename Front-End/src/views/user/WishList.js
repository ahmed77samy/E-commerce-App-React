import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import WishListContent from "../../components/user/WishListContent";

function WishList() {
  return (
    <div className="page-wrapper">
      <Header />
      <WishListContent />
      <Footer />
    </div>
  );
}

export default WishList;
