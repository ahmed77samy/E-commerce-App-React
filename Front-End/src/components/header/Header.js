import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { MenNavDropdown } from './MenNavDropdown';
import { WomenNavDropdown } from './WomenNavDropdown';
import { KidsNavDropdown } from './KidsNavDropdown';
import { PagesNavDropdown } from './PagesNavDropdown';
import { AccountNavDropdown } from './AccountNavDropdown';
import ClientService from './ClientService';
import Search from './Search';
import WishList from './WishList';
import Compare from './Compare';
import Cart from './Cart';
import { BiUser } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import user from '../../core/api/user';
import NavbarMobile from './NavbarMobile';

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
                  <ClientService />
                  <Search />
                  <WishList />
                  <Compare />
                  <Cart />
                </ul>
              </Container>
            </div>
            <div className="header__line-bottom bg-white">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className='pr-0'>
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
                    <Nav.Link href="/" className='pl-0'>الشراء الان</Nav.Link>
                  </Nav>
                  <div className="user d-flex align-items-center">
                    <div className="account">
                      {user.IsLogin() ? (
                        <AccountNavDropdown />
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
      <NavbarMobile mobileMenu={mobileMenu} ToggleMobileMenu={ToggleMobileMenu} />
    </div>
  );
}

export default Header;
