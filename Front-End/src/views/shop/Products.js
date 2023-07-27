import AllProducts from "../../components//products/AllProducts";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Products() {
  return (
    <div className="page-wrapper">
      <Header />
      <AllProducts />
      <Footer />
    </div>
  );
}

export default Products;
