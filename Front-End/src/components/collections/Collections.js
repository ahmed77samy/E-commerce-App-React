import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Collections() {
  return (
    <div className="content main-padding">
      <div className="collections">
        <Container>
          <Row xs={1} sm={2} lg={3} className="r-gap-30">
            <Col>
              <Link to="/" className="collection__item">
                <img src="https://placehold.co/400x300/F4F4F4/png" />
                <div className="textBox py-3">
                  <p className="text head m-0 text-uppercase">men's</p>
                  <span>Cryptocurrency</span>
                  <p className="text price m-0">1.570,00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/" className="collection__item">
                <img src="https://placehold.co/400x300/F4F4F4/png" />
                <div className="textBox py-3">
                  <p className="text head m-0 text-uppercase">women's</p>
                  <span>Cryptocurrency</span>
                  <p className="text price m-0">5.654,34</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/" className="collection__item">
                <img src="https://placehold.co/400x300/F4F4F4/png" />
                <div className="textBox py-3">
                  <p className="text head m-0 text-uppercase">kids</p>
                  <span>Cryptocurrency</span>
                  <p className="text price m-0">2.654,34</p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Collections;
