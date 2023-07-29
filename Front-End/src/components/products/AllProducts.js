import { Col, Container, Row } from 'react-bootstrap';
import { product_items } from './items';
import ProductItem from './ProductItem';
import AsideFilter from './AsideFilter';

function AllProducts() {
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
          <Row className="r-gap-50">
            <Col xs={12} lg={3}>
              <AsideFilter />
            </Col>
            <Col xs={12} lg={9}>
              <div className="products__content">
                <Row xs={1} md={3} className="r-gap-30">
                  {productList}
                </Row>
              </div>
            </Col>
            <Col xs={12} lg={9} className='mr-auto'>
              <button className="btn__classic mx-auto">تحميل المزيد</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AllProducts;
