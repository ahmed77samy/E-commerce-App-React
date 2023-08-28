import { useEffect, useRef, useState } from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import image1 from "../../assets/image/collections/14.jpg"
import image2 from "../../assets/image/collections/6.jpg"

export function KidsNavDropdown() {
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
      className="dropdown-fullwidth"
      id="kids-nav-dropdown"
      renderMenuOnMount={true}
      title={
        <>
          أطفالي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <Container>
          <Row xs={1} md={6}>
            <Col>
              <h5 className="dropdown-header">ملابس</h5>
              <NavDropdown.Item as={Link} to="/shop">
                فساتين حفلات
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                فستان حريمي
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                بدلات كاجوال
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                قطع سفليه
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                قطع علويه
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                ملابس خروج
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                ترنجات اطفال
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                ملابس داخليه
              </NavDropdown.Item>
            </Col>
            <Col>
              <h5 className="dropdown-header">احذيه</h5>
              <NavDropdown.Item as={Link} to="/shop">
                أحذيه رياضيه
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                أحذيه مسطحه
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                أحذيه سهره
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                احذيه برقبه
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                صنادل
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                شباشب
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                كروكس
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">
                جوارب
              </NavDropdown.Item>
            </Col>
            <Col className="collection-item" md={4}>
              <Link to="/shop">
                <img src={image1} className="img-fluid" alt="collection" />
              </Link>
              <div className="position-static">
                <h6 className="mb-0 weight-400">الجديد في</h6>
                <span className="c-gray">مجموعه ربيع / صيف 2023</span>
              </div>
            </Col>
            <Col className="collection-item" md={4}>
              <Link to="/shop">
                <img src={image2} className="img-fluid" alt="collection" />
              </Link>
              <div className="position-static">
                <h6 className="mb-0 weight-400">أفضل العروض والخصومات</h6>
                <span className="c-gray">خصومات تصل حتي 20%</span>
              </div>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </NavDropdown>
  );
}

export function KidsNavDropdownMobile() {
  const ParentRef = useRef(null);
  const NodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let navDropdownMenu = ParentRef.current.children[1];
    NodeRef.current = navDropdownMenu;
  }, []);

  const showDropdown = () => {
    setShow(prev => !prev);
  };

  return (
    <NavDropdown
      ref={ParentRef}
      show={show}
      onClick={showDropdown}
      id="kids-nav-dropdown-mobile"
      renderMenuOnMount={true}
      title={
        <>
          اطفالي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <h5 className="dropdown-header">ملابس</h5>
          <NavDropdown.Item as={Link} to="/shop">
            فساتين حفلات
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            فستان حريمي
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            بدلات كاجوال
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            قطع سفليه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            قطع علويه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            ملابس خروج
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            ترنجات اطفال
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            ملابس داخليه
          </NavDropdown.Item>
          <div className="spliter light my-2"></div>
          <h5 className="dropdown-header">احذيه</h5>
          <NavDropdown.Item as={Link} to="/shop">
            أحذيه رياضيه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            أحذيه مسطحه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            أحذيه سهره
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            احذيه برقبه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            صنادل
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            شباشب
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            كروكس
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">
            جوارب
          </NavDropdown.Item>
        </div>
      </CSSTransition>
    </NavDropdown>
  );
}
