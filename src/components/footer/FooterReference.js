import { Col, Container, Row } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBehance, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function FooterReference() {
  return (
    <div className="footer__reference main-padding">
      <Container>
        <Row xs={1} sm={2} lg={4}>
          <Col>
            <h2>تابعنا</h2>
            <div className="spliter light"></div>
            <img src="/img/logo2.png" alt="logo" />
            <ul className="social-media">
              <li><a href="/"><FaTwitter className="icon" /></a></li>
              <li><a href="/"><BsInstagram className="icon" /></a></li>
              <li><a href="/"><FaFacebookF className="icon" /></a></li>
              <li><a href="/"><FaBehance className="icon" /></a></li>
            </ul>
          </Col>
          <Col>
            <h2>مساعدة؟</h2>
            <div className="spliter light"></div>
            <ul className="list-unstyled m-0 p-0">
              <li><a href="/">تسجيل عميل جديد</a></li>
              <li><a href="/">طرق الدفع</a></li>
              <li><a href="/">تقيم المنتجات</a></li>
              <li><a href="/">متابعه سير المنتج</a></li>
              <li><a href="/">الدعم والمساعدة</a></li>
              <li><a href="/">القوانين والسياسات</a></li>
              <li><a href="/">التواصل معنا</a></li>
            </ul>
          </Col>
          <Col>
            <h2>المتجر</h2>
            <div className="spliter light"></div>
            <ul className="list-unstyled m-0 p-0">
              <li><a href="/">الجديد لدينا</a></li>
              <li><a href="/">الاعلي مبيعا</a></li>
              <li><a href="/">الخصومات والعروض الخاصة</a></li>
              <li><a href="/">حريمي</a></li>
              <li><a href="/">رجالي</a></li>
              <li><a href="/">أطفالي</a></li>
              <li><a href="/">اكسسوارات</a></li>
            </ul>
          </Col>
          <Col>
            <h2>اتصل بنا</h2>
            <div className="spliter light"></div>
            <ul className="list-unstyled m-0 p-0">
              <li>
                <IoLogoWhatsapp className="icon ml-2" />
                <a href="/">مصر: (02) 01271231234</a>
              </li>
              <li>
                <IoLogoWhatsapp className="icon ml-2" />
                <a href="/">السعوديه: (966) 547956016</a>
              </li>
              <li>
                <IoLogoWhatsapp className="icon ml-2" />
                <a href="/">عُمان: (968) 96686508</a>
              </li>
              <li>
                <FaLocationDot className="icon ml-2" />
                <a href="/">مصر: حي البستان ,المنتزه , الأسكندريه</a>
              </li>
              <li>
                <FaLocationDot className="icon ml-2" />
                <a href="/">السعودية : حي ابو بكر الصديق، شبرا، الطائف</a>
              </li>
              <li>
                <FaLocationDot className="icon ml-2" />
                <a href="/">شارع المعرفة , مسقط , عُمان</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterReference;
