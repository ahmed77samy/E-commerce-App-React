import { Routes, Route } from 'react-router-dom';
import Home from '../views/home.js';
import SignUp from '../views/authentication/SignUp.js';
import Login from '../views/authentication/Login.js';

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
