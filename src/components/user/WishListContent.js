import { Col, Container, Row } from 'react-bootstrap';
import { wishlist_items } from './items';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';

function WishList() {

  // map for items to given the items
  const wishListList = wishlist_items.map((item, index) => {
    const { photo, title, price } = item;
    return (
      <Col key={index}>
        <div className="product-item">
          <div>
            <span role='button' data-title-left="حذف">
              <RiDeleteBin6Line className="icon" />
            </span>
          </div>
          <img src={photo} className="img-fluid my-3" alt="product" />
          <h6>
            <Link to="/shop/products/id">{title}</Link>
          </h6>
          <span className="item-price">
            {price.sale && <span className="sale"> {price.sale}.00 جـ </span>}
            <span className="money">{price.money}.00 جـ </span>
          </span>
          <br />
        </div>
      </Col>
    );
  });

  return (
    <div className="content main-padding">
      <div className="wish-list-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">المفضله</h3>
          <Row xs={1} sm={2} md={4} xl={6} className="mt-4 r-gap-40">
            {wishListList}
          </Row>
          <button className="btn__classic mt-5 mx-auto">
            <RiDeleteBin6Line className="icon ml-2" /> حذف الكل
          </button>
        </Container>
      </div>
    </div>
  );
}

export default WishList;
