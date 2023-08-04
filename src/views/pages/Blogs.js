import AllBlogs from "../../components/blogs/AllBlogs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Blogs() {
  return (
    <div className="page-wrapper">
      <Header />
      <AllBlogs />
      <Footer />
    </div>
  );
}

export default Blogs;
