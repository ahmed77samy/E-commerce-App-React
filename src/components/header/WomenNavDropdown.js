import { useEffect, useRef, useState } from 'react';
import { Col, Container, NavDropdown, Row } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export function WomenNavDropdown() {
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
      id="women-nav-dropdown"
      renderMenuOnMount={true}
      title={
        <>
          حريمي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <Container>
          <Row xs={1} md={6}>
            <Col>
              <h5 className="dropdown-header">ملابس</h5>
              <NavDropdown.Item as={Link} to="/shop">بناطيل</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جواكيت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">بليزرات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">فساتين</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">تيشرتات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">باديهات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">بلوزات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">سويتشرت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جيب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">تريكو</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جواكيت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">بليزرات</NavDropdown.Item>
            </Col>
            <Col>
              <h5 className="dropdown-header">احذيه</h5>
              <NavDropdown.Item as={Link} to="/shop">رياضي</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جزم واحذيه الكاحل</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">كعوب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">منصات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">الشقق</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">صنادل بكعب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جزم واحذيه الكاحل</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">كعوب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">منصات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">الشقق</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">صنادل بكعب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جزم واحذيه الكاحل</NavDropdown.Item>
            </Col>
            <Col>
              <h5 className="dropdown-header">اكسسوارات</h5>
              <NavDropdown.Item as={Link} to="/shop">اكياس</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">حقائب ظهر</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">نظارات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">مجوهرات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">اقراط</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">حافظات ايفون</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">الادوات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">قباعات</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">المحافظ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">احزمه</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">جوارب</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop">الادوات</NavDropdown.Item>
            </Col>
            <Col md={6}>
              <h5 className="dropdown-header">افضل العروض</h5>
              <Row xs={1} md={2} className="m-0 r-gap-20">
                <Col className="collection-item">
                  <Link to="/shop">
                    <img src="/img/collections/8.jpg" className="img-fluid" alt="collection" />
                    <div>
                      <h6 className="m-0 weight-400">الجديد في</h6>
                      <span className="c-gray">مجموعه ربيع / صيف 2023</span>
                    </div>
                  </Link>
                </Col>
                <Col className="collection-item">
                  <Link to="/shop">
                    <img src="/img/collections/7.jpg" className="img-fluid" alt="collection" />
                    <div>
                      <h6 className="m-0 weight-400">التخفيضات والعروض الخاصه</h6>
                      <span className="c-gray">احصل علي خصم يصل الي 20%</span>
                    </div>
                  </Link>
                </Col>
                <Col className="collection-item">
                  <Link to="/shop">
                    <img src="/img/collections/11.jpg" className="img-fluid" alt="collection" />
                    <div>
                      <h6 className="m-0 weight-400">متميز</h6>
                      <span className="c-gray">العناصر الشعبية</span>
                    </div>
                  </Link>
                </Col>
                <Col className="collection-item">
                  <Link to="/shop">
                    <img src="/img/collections/15.jpg" className="img-fluid" alt="collection" />
                    <div>
                      <h6 className="m-0 weight-400">قريبا</h6>
                      <span className="c-gray">مجموعة خريف 2023</span>
                    </div>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </NavDropdown>
  );
}

export function WomenNavDropdownMobile() {
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
      id="women-nav-dropdown-mobile"
      renderMenuOnMount={true}
      title={
        <>
          حريمي <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <h5 className="dropdown-header">ملابس</h5>
          <NavDropdown.Item as={Link} to="/shop">بناطيل</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جواكيت</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">بليزرات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">فساتين</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">تيشرتات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">باديهات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">بلوزات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">سويتشرت</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جيب</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">تريكو</NavDropdown.Item>
          <div className="spliter light my-2"></div>
          <h5 className="dropdown-header">احذيه</h5>
          <NavDropdown.Item as={Link} to="/shop">رياضي</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">جزم واحذيه الكاحل</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">كعوب</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">منصات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">الشقق</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">صنادل بكعب</NavDropdown.Item>
          <div className="spliter light my-2"></div>
          <h5 className="dropdown-header">اكسسوارات</h5>
          <NavDropdown.Item as={Link} to="/shop">اكياس</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">حقائب ظهر</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">نظارات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">مجوهرات</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/shop">اقراط</NavDropdown.Item>
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
