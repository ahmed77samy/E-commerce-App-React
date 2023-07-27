import { Routes, Route } from 'react-router-dom';
import SignUp from '../views/authentication/SignUp.js';
import Login from '../views/authentication/Login.js';
import Home from '../views/Home.js';
import Products from '../views/shop/Products.js';
import ProductsSingle from '../views/shop/ProductsSingle.js';
import About from "../views/pages/About"
import CustomerService from "../views/pages/CustomerService"
import Faq from "../views/pages/Faq"
import Contact from "../views/pages/Contact"
import PrivacyPolicy from "../views/pages/PrivacyPolicy"
import CookiePolicy from "../views/pages/CookiePolicy"

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="/shop" element={<Products />} />
        <Route path="/shop/products/:id" element={<ProductsSingle />} />


      </Routes>
    </>
  );
}

export default AllRoutes;
