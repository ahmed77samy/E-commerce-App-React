import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../core/api/user';
import { GoSearch } from 'react-icons/go';
import { FaBalanceScaleRight } from 'react-icons/fa';
import { BsQuestionCircle } from 'react-icons/bs';
import { BiUser, BiShoppingBag, BiChevronDown } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';

function Header(props) {
  return (
    <div className="content">
      <header {...props}>
        {/* header__tape */}
        <div className="header__tape d-flex py-2 bk-black">
          <Container>
            <p className="m-0 text-center">FINAL CLEARANCE Take 20% Off Sale Must-Haves'</p>
          </Container>
        </div>
        {/* header__tape */}
        {/* header__content */}
        <div className="header__content">
          <div className="header__line-top bg-white">
            <Container className="d-flex align-items-center py-1">
              <Navbar.Brand href="/">
                <img src="img/logo.png" width={90} />
              </Navbar.Brand>
              <ul className="header__sidebar list-unstyled mb-0 ml-auto d-flex align-items-center c-gap-20">
                <li data-title-down='Client Service'>
                  <a href="/">
                    <BsQuestionCircle className="icon" />
                  </a>
                </li>
                <li data-title-down='Search'>
                  <a href="/">
                    <GoSearch className="icon" />
                  </a>
                </li>
                <li data-title-down='Wish List'>
                  <a href="/">
                    <AiOutlineHeart className="icon" />
                  </a>
                </li>
                <li data-title-down='Compare'>
                  <a href="/">
                    <FaBalanceScaleRight className="icon" />
                  </a>
                </li>
                <li data-title-down='Bag'>
                  <a href="/">
                    <BiShoppingBag className="icon" />
                  </a>
                </li>
              </ul>
            </Container>
          </div>
          <div className="header__line-bottom bg-white">
            <Container>
              <Navbar expand="lg" className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="c-gap-20 mr-auto">
                    <NavDropdown
                      title={
                        <>
                          layouts <BiChevronDown className="icon" />
                        </>
                      }
                      id="layouts-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          shop <BiChevronDown className="icon" />
                        </>
                      }
                      id="shop-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          blog <BiChevronDown className="icon" />
                        </>
                      }
                      id="blog-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          gallery <BiChevronDown className="icon" />
                        </>
                      }
                      id="gallery-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          pages <BiChevronDown className="icon" />
                        </>
                      }
                      id="pages-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          women's <BiChevronDown className="icon" />
                        </>
                      }
                      id="womens-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown
                      title={
                        <>
                          men's <BiChevronDown className="icon" />
                        </>
                      }
                      id="mens-nav-dropdown"
                    >
                      <NavDropdown.Item href="/">Action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="/">buy now</Nav.Link>
                  </Nav>
                  <div className="user d-flex align-items-center">
                    <div className="account">
                      {user.IsLogin() ? (
                        <NavDropdown
                          title={
                            <span className="details text-uppercase">
                              ahmed
                              <BiChevronDown className="icon" />
                            </span>
                          }
                          id="details-nav-dropdown"
                        >
                          <NavDropdown.Item href="/">Action</NavDropdown.Item>
                          <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                          <NavDropdown.Item onClick={user.LogoutConfig}>Logout</NavDropdown.Item>
                        </NavDropdown>
                      ) : (
                        <Link to="/login" className="login text-uppercase">
                          login / signup
                          <BiUser className="icon" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Container>
          </div>
        </div>
        {/* header__content */}
      </header>
    </div>
  );
}

export default Header;
