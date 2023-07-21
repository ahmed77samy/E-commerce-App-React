import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

function Products() {
  return (
    <div className="content main-padding">
      <div className="products">
        <Container>
          {/* products__tabe */}
          <ul className="products__tabe list-unstyled">
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                new products
              </Link>
            </li>
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                special products
              </Link>
            </li>
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                featured products
              </Link>
            </li>
          </ul>
          {/* products__tabe */}
          {/* products__content */}
          <div className="products__content">
            <Row xs={1} sm={2} lg={4} className='r-gap-30'>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
            </Row>
          </div>
          {/* products__content */}
        </Container>
      </div>
    </div>
  );
}

export default Products;
