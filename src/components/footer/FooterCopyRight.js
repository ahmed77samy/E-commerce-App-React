import { Container } from 'react-bootstrap';

function FooterCopyRight() {
  return (
    <div className="footer__copyright">
      <Container>
        <div className="d-flex flex-wrap gap-30 justify-content-between">
          <p className="m-0">جميع الحقوق محوظه @2023 لدي شركتنا</p>
          <ul className="list-unstyled m-0 p-0">
            <li>
              <a href="/">سياسة الخصوصية</a>
            </li>
            <li>
              <a href="/">القوانين</a>
            </li>
            <li>
              <a href="/">شركاؤنا</a>
            </li>
            <li>
              <a href="/">فروعنا</a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default FooterCopyRight;
