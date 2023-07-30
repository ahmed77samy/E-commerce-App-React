import { NavDropdown } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineLogout } from 'react-icons/ai';
import { BiChevronDown, BiShoppingBag, BiUser } from 'react-icons/bi';
import { BsQuestionCircle } from 'react-icons/bs';
import { FaBalanceScaleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import user from '../../core/api/user';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export function AccountNavDropdown() {
  const ParentRef = useRef(null);
  const NodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let subscribe = true;
    if (subscribe) {
      let navDropdownMenu = ParentRef.current.children[1];
      NodeRef.current = navDropdownMenu;
    }
    return () => {
      subscribe = false;
    };
  }, []);

  const showDropdown = (e) => {
    setShow(true);
  };

  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <NavDropdown
      ref={ParentRef}
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      id="details-nav-dropdown"
      renderMenuOnMount={true}
      title={
        <span className="details text-uppercase">
          أحمد سامي
          <BiChevronDown className="icon mr-2" />
        </span>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <NavDropdown.Item as={Link} to="/profile/id">
            <BiUser className="icon ml-2" /> الصفحه الشخصيه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cart">
            <BiShoppingBag className="icon ml-2" /> السله
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/wish-list">
            <AiOutlineHeart className="icon ml-2" /> المفضله
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/compare">
            <FaBalanceScaleRight className="icon ml-2" /> المقارنات
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/client-service">
            <BsQuestionCircle className="icon ml-2" /> خدمه الزباين
          </NavDropdown.Item>
          <NavDropdown.Item onClick={user.LogoutConfig}>
            <AiOutlineLogout className="icon ml-2" /> تسجيل الخروج
          </NavDropdown.Item>
        </div>
      </CSSTransition>
    </NavDropdown>
  );
}

export function AccountNavDropdownMobile() {
  return (
    <>
      <Link to="/profile/id" className="login text-uppercase align-items-center">
        <BiUser className="icon ml-2" />
        الصفحه الشخصية
      </Link>
      <Link to="/cart" className="login text-uppercase align-items-center">
        <BiShoppingBag className="icon ml-2" />
        السله
      </Link>
      <Link to="/wish-list" className="login text-uppercase align-items-center">
        <AiOutlineHeart className="icon ml-2" />
        المفضله
      </Link>
      <Link to="/compare" className="login text-uppercase align-items-center">
        <FaBalanceScaleRight className="icon ml-2" />
        المقارنات
      </Link>
      <Link to="/client-service" className="login text-uppercase align-items-center">
        <BsQuestionCircle className="icon ml-2" />
        خدمه الزباين
      </Link>
      <a href="/" className="login text-uppercase align-items-center" onClick={user.LogoutConfig}>
        <AiOutlineLogout className="icon ml-2" />
        تسجيل الخروج
      </a>
    </>
  );
}
