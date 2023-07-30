import { useEffect, useRef, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export function PagesNavDropdown() {
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
      id="pages-nav-dropdown"
      renderMenuOnMount={true}
      title={
        <>
          الصفحات <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <NavDropdown.Item as={Link} to="/about">
            من نحن
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/customer-service">
            خدمة العملاء
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/faq">
            الاسئله الشائعه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact">
            تواصل معنا
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/privacy-policy">
            سياسة الخصوصية
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cookie-policy">
            سياسة ملفات الارتباط
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/404">
            خطا 404
          </NavDropdown.Item>
        </div>
      </CSSTransition>
    </NavDropdown>
  );
}

export function PagesNavDropdownMobile() {
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
      id="pages-nav-dropdown-mobile"
      renderMenuOnMount={true}
      title={
        <>
          الصفحات <BiChevronDown className="icon" />
        </>
      }
    >
      <CSSTransition in={show} nodeRef={NodeRef} timeout={200} classNames="slideup" unmountOnExit>
        <div>
          <NavDropdown.Item as={Link} to="/about">
            من نحن
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/customer-service">
            خدمة العملاء
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/faq">
            الاسئله الشائعه
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/contact">
            تواصل معنا
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/privacy-policy">
            سياسة الخصوصية
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cookie-policy">
            سياسة ملفات الارتباط
          </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/404">
            خطا 404
          </NavDropdown.Item>
        </div>
      </CSSTransition>
    </NavDropdown>
  );
}
