import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { product_items } from './items';

function Products() {
  // map for items to given the items
  const productList = product_items.map((item, index) => {
    return (
      <Col key={index}>
        <ProductItem data={item} />
      </Col>
    );
  });

  return (
    <div className="content main-padding">
      <div className="products">
        <Container>
          {/* products__tabe */}
          <ul className="products__tabe mb-4 list-unstyled">
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                أحدث المنتجات
              </Link>
            </li>
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                المنتجات الممميزه
              </Link>
            </li>
            <li className="h5 text-capitalize">
              <Link className="link" to="/">
                أفضل المنتجات
              </Link>
            </li>
          </ul>
          {/* products__tabe */}
          {/* products__content */}
          <div className="products__content">
            <Row xs={1} sm={2} lg={4} className="r-gap-30">
              {productList}
            </Row>
          </div>
          {/* products__content */}
        </Container>
      </div>
    </div>
  );
}

export default Products;
