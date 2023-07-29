import { useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { product_items } from '../products/items';
import { TfiClose } from 'react-icons/tfi';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsBagCheck } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';

function Cart() {
  const [open, setOpen] = useState(false);
  const ToggleCart = (e) => setOpen(!open);

  const CartList = product_items.map((item, index) => {
    const { photo, title, price } = item;
    return (
      <div className="product-item" key={index}>
        <div>
          <a data-title-left="تعديل" className='ml-2'>
            <GrEdit className="icon" />
          </a>
          <a data-title-left="حذف">
            <RiDeleteBin6Line className="icon" />
          </a>
        </div>
        <Link to="/shop/products/id">
          <img src={photo} width={80} />
        </Link>
        <div>
          <h6 className="weight-400 m-0">
            <Link to="/shop/products/id">{title}</Link>
          </h6>
          <span className="c-gray">ابيض / xs</span>
          <br />
          <span className="c-gray">{price.money}.00 جـ </span>
        </div>
      </div>
    );
  });

  return (
    <li data-title-down="السله">
      <a onClick={ToggleCart}>
        <BiShoppingBag className="icon" />
      </a>
      <Modal show={open} onHide={ToggleCart} className="navbar-modal navbar-cart" animation={true}>
        <Modal.Header>
          <Modal.Title>
            <TfiClose onClick={ToggleCart} className="icon" />
            <h5 className="mb-0">السله</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <div className="d-flex flex-column r-gap-30">{CartList}</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex-column align-items-stretch">
          <h6>إجمالي السعر : 800 جـ</h6>
          <button className="btn__classic mt-3">
            <BsBagCheck className="icon ml-2" />
            الذهاب للدفع
          </button>
          <button className="btn__classic mt-3">
            <RiDeleteBin6Line className="icon ml-2" /> حذف الكل
          </button>
        </Modal.Footer>
      </Modal>
    </li>
  );
}

export default Cart;
