import { Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../core/api/user';
import { GoSearch } from 'react-icons/go';
import { FaBalanceScaleRight } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiUser, BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { MenNavDropdown, MenNavDropdownMobile } from './MenNavDropdown';
import { WomenNavDropdown, WomenNavDropdownMobile } from './WomenNavDropdown';
import { KidsNavDropdown, KidsNavDropdownMobile } from './KidsNavDropdown';
import { PagesNavDropdown, PagesNavDropdownMobile } from './PagesNavDropdown';
import { TfiClose } from 'react-icons/tfi';

function Header(props) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const ToggleMobileMenu = () => setMobileMenu(!mobileMenu);


  return (
    <div className="content">
      <header {...props}>
        {/* header__tape */}
        <div className="header__tape d-flex py-2 bk-black">
          <Container>
            <p className="m-0 text-center">العرض الاخير: احصل على خصم 20٪ على العروض التي يجب اقتناؤها</p>
          </Container>
        </div>
        {/* header__tape */}
        {/* header__content */}
        <div className="header__content">
          <Navbar expand="lg" className="p-0">
            <div className="header__line-top bg-white">
              <Container className="d-flex align-items-center justify-content-start flex-wrap py-1">
                {/* <Navbar.Toggle  /> */}
                <AiOutlineMenu className="icon icon-toggler" onClick={ToggleMobileMenu} />
                <Navbar.Brand href="/">
                  <img src="/img/logo.png" width={90} />
                </Navbar.Brand>
                <ul className="header__sidebar list-unstyled mb-0 mr-auto d-flex align-items-center c-gap-20">
                  <li data-title-down="خدمه العملاء">
                    <a href="/">
                      <BsQuestionCircle className="icon" />
                    </a>
                  </li>
                  <li data-title-down="بحث">
                    <a href="/">
                      <GoSearch className="icon" />
                    </a>
                  </li>
                  <li data-title-down="المفضله">
                    <a href="/">
                      <AiOutlineHeart className="icon" />
                    </a>
                  </li>
                  <li data-title-down="مقارنه">
                    <a href="/">
                      <FaBalanceScaleRight className="icon" />
                    </a>
                  </li>
                  <li data-title-down="السله">
                    <a href="/">
                      <BiShoppingBag className="icon" />
                    </a>
                  </li>
                </ul>
              </Container>
            </div>
            <div className="header__line-bottom bg-white">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto c-gap-20">
                    <Nav.Link as={Link} to="/">
                      الرئيسيه
                    </Nav.Link>
                    <Nav.Link as={Link} to="/shop">
                      المتجر
                    </Nav.Link>
                    <MenNavDropdown />
                    <WomenNavDropdown />
                    <KidsNavDropdown />
                    <PagesNavDropdown />
                    <Nav.Link as={Link} to="/blogs">
                      المدونه
                    </Nav.Link>
                    <Nav.Link href="/">الشراء الان</Nav.Link>
                  </Nav>
                  <div className="user d-flex align-items-center">
                    <div className="account">
                      {user.IsLogin() ? (
                        <Link to="/user" className="login text-uppercase align-items-center">
                          <BiUser className="icon" />
                          الصفحه الشخصية
                        </Link>
                      ) : (
                        <Link to="/login" className="login text-uppercase">
                          <BiUser className="icon" />
                          تسجيل جديد / تسجيل الدخول
                        </Link>
                      )}
                    </div>
                  </div>
                </Navbar.Collapse>
              </Container>
            </div>
          </Navbar>
        </div>
        {/* header__content */}
      </header>
      <Modal show={mobileMenu} onHide={ToggleMobileMenu} className="navbar-modal" animation={true}>
        <Modal.Header>
          <Modal.Title>
            <TfiClose onClick={ToggleMobileMenu} className="icon c-light" />
            <img src="/img/logo2.png" width={90} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav.Link as={Link} to="/">
            الرئيسيه
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            المتجر
          </Nav.Link>
          <MenNavDropdownMobile />
          <WomenNavDropdownMobile />
          <KidsNavDropdownMobile />
          <PagesNavDropdownMobile />
          <Nav.Link as={Link} to="/blogs">
            المدونه
          </Nav.Link>
          <Nav.Link href="/">الشراء الان</Nav.Link>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div className="user text-right">
            <div className="account">
              {user.IsLogin() ? (
                <Link to="/user" className="login text-uppercase align-items-center">
                  <BiUser className="icon ml-2" />
                  الصفحه الشخصية
                </Link>
              ) : (
                <Link to="/login" className="login text-uppercase">
                  <BiUser className="icon" />
                  تسجيل جديد / تسجيل الدخول
                </Link>
              )}
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
