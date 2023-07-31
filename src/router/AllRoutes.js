import { Routes, Route } from 'react-router-dom';
import SignUp from '../views/authentication/SignUp.js';
import Login from '../views/authentication/Login.js';
import ForgetPassword from '../views/authentication/ForgetPassword.js';
import Home from '../views/Home.js';
import Products from '../views/shop/Products.js';
import ProductsSingle from '../views/shop/ProductsSingle.js';
import About from "../views/pages/About"
import CustomerService from "../views/pages/CustomerService"
import ClientService from "../views/pages/ClientService"
import Faq from "../views/pages/Faq"
import Contact from "../views/pages/Contact"
import PrivacyPolicy from "../views/pages/PrivacyPolicy"
import CookiePolicy from "../views/pages/CookiePolicy"
import Compare from "../views/user/Compare"
import WishList from "../views/user/WishList"
import Cart from "../views/user/Cart"
import NotFound from "../views/pages/NotFound"

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/products/:id" element={<ProductsSingle />} />


        <Route path="/about" element={<About />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/client-service" element={<ClientService />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        <Route path="/compare" element={<Compare />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/404" element={<NotFound />} />
        <Route path='*' element={<NotFound />}/>

      </Routes>
    </>
  );
}

export default AllRoutes;
