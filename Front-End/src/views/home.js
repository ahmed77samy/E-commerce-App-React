import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Slider from '../components/slider/Slider';
import Collections from '../components/collections/Collections';
import Products from '../components/products/Products';
import Banner from '../components/banner/Banner1';
import Clients from "../components/clients/Clients"
import Blogs from "../components/blogs/Blogs"
import ProductTrending from "../components/products/ProductTrending"

function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      <Slider />
      <Collections />
      <Products />
      <Banner />
      <Clients />
      <Blogs />
      <ProductTrending />
      <Footer />
    </div>
  );
}

export default Home;
