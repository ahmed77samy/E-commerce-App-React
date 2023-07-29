import { Modal, Nav } from 'react-bootstrap';
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { MenNavDropdownMobile } from './MenNavDropdown';
import { WomenNavDropdownMobile } from './WomenNavDropdown';
import { KidsNavDropdownMobile } from './KidsNavDropdown';
import { PagesNavDropdownMobile } from './PagesNavDropdown';
import user from '../../core/api/user';
import { BiUser } from 'react-icons/bi';
import { AccountNavDropdownMobile } from './AccountNavDropdown';

function NavbarMobile(props) {
  const { mobileMenu, ToggleMobileMenu } = props;

  return (
    <Modal show={mobileMenu} onHide={ToggleMobileMenu} className="navbar-modal navbar-menu" animation={true}>
      <Modal.Header>
        <Modal.Title>
          <TfiClose onClick={ToggleMobileMenu} className="icon" />
          <img src="/img/logo.png" width={90} alt="logo" />
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
              <AccountNavDropdownMobile />
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
  );
}

export default NavbarMobile;
