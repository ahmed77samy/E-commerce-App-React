import { useEffect, useRef, useState } from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export function MenNavDropdown() {
  const ParentRef = useRef(null);
  const NodeRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let navDropdownMenu = ParentRef.current.children[1];
    NodeRef.current = navDropdownMenu;
  }, []);
  const showDropdown = (e) => {
    setShow(!show);
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
      id="men-nav-dropdown"
      renderMenuOnMount={true}
      title={
        <>
          رجالي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <Container>
          <Row xs={1} md={5}>
            <Col className="collection-item">
              <Link to="/shop">
                <img src="/img/collections/18.jpg" className="img-fluid" alt="collection" />
                <div>
                  <h6 className="m-0 weight-400">الجديد في</h6>
                  <span className="c-gray">مجموعه ربيع / صيف 2023</span>
                </div>
              </Link>
            </Col>
            <Col>
              <h5 className="dropdown-header">ملابس</h5>
              <NavDropdown.Item as={Link} to="/shop">بناطيل</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جواكيت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">بليزرات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">قمصان</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">سويت بانس</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">شروال</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">ترينجات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">سويتشرت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">سروال</NavDropdown.Item>
            </Col>
            <Col>
              <h5 className="dropdown-header">احذيه</h5>
              <NavDropdown.Item as={Link} to="/shop">رياضي</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جزم واحذيه جلد</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">كونفرس</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">اير ماكس</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">كلاسيك</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">صنادل</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">شباشب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">احذيه برقبه</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">كلاسيك</NavDropdown.Item>
            </Col>
            <Col>
              <h5 className="dropdown-header">اكسسوارات</h5>
              <NavDropdown.Item as={Link} to="/shop">فضه</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">حظاظات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">اكياس</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">حقائب ظهر</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">نظارات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">حافظات ايفون</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">الادوات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">قباعات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">المحافظ</NavDropdown.Item>
            </Col>

            <Col className="collection-item">
              <Link to="/shop">
                <img src="/img/collections/19.jpg" className="img-fluid" alt="collection" />
                <div>
                  <h6 className="m-0 weight-400">التخفيضات والعروض الخاصه</h6>
                  <span className="c-gray">احصل علي خصم يصل الي 20%</span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </NavDropdown>
  );
}

export function MenNavDropdownMobile() {
  const ParentRef = useRef(null);
  const NodeRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let navDropdownMenu = ParentRef.current.children[1];
    NodeRef.current = navDropdownMenu;
  }, []);

  const showDropdown = () => {
    setShow(!show);
  };

  return (
    <NavDropdown
      ref={ParentRef}
      show={show}
      onClick={showDropdown}
      id="men-nav-dropdown-mobile"
      renderMenuOnMount={true}
      title={
        <>
          رجالي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <h5 className="dropdown-header">ملابس</h5>
          <NavDropdown.Item as={Link} to="/shop">بناطيل</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جواكيت</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">بليزرات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">قمصان</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">سويت بانس</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">شروال</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">ترينجات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">سويتشرت</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">سروال</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">تريكو</NavDropdown.Item>
          <div className="spliter light my-2"></div>
          <h5 className="dropdown-header">احذيه</h5>
          <NavDropdown.Item as={Link} to="/shop">رياضي</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جزم واحذيه جلد</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">كونفرس</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">اير ماكس</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">كلاسيك</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">صنادل</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">شباشب</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">احذيه برقبه</NavDropdown.Item>
          <div className="spliter light my-2"></div>
          <h5 className="dropdown-header">اكسسوارات</h5>
          <NavDropdown.Item as={Link} to="/shop">فضه</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">حظاظات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">اكياس</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">حقائب ظهر</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">نظارات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">حافظات ايفون</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">الادوات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">قباعات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">المحافظ</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">احزمه</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جوارب</NavDropdown.Item>
        </div>
      </CSSTransition>
    </NavDropdown>
  );
}
