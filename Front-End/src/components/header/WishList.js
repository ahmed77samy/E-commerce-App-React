import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { TfiClose } from 'react-icons/tfi';
import { product_items } from '../products/items';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

function WishList() {
  const [open, setOpen] = useState(false);
  const ToggleWishList = (e) => setOpen(!open);

  const WishListList = product_items.map((item, index) => {
    const { photo, title, price } = item;
    return (
      <div className="product-item" key={index}>
        <div>
          <a data-title-left="حذف">
            <RiDeleteBin6Line className="icon" />
          </a>
        </div>
        <Link to="/shop/products/id">
          <img src={photo} width={80} />
        </Link>
        <div>
          <h6 className="weight-400">
            <Link to="/shop/products/id">{title}</Link>
          </h6>
          <span className="c-gray">{price.money}.00 جـ </span>
        </div>
      </div>
    );
  });

  return (
    <li data-title-down="المفضله">
      <a onClick={ToggleWishList}>
        <AiOutlineHeart className="icon" />
      </a>
      <Modal show={open} onHide={ToggleWishList} className="navbar-modal navbar-wish-list" animation={true}>
        <Modal.Header>
          <Modal.Title>
            <TfiClose onClick={ToggleWishList} className="icon" />
            <h5 className="mb-0">المفضله</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="d-flex flex-column r-gap-30">{WishListList}</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn__classic">
            <RiDeleteBin6Line className="icon ml-2" /> حذف الكل
          </button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default WishList;
