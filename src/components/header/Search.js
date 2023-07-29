import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import { TfiClose } from 'react-icons/tfi';
import { product_items } from '../products/items';
import { Link } from 'react-router-dom';

function Search() {
  const [open, setOpen] = useState(false);
  const ToggleSearch = (e) => setOpen(!open);

  const searchResultsList = product_items.map((item, index) => {
    return (
      <div className="product-item" key={index}>
        <Link to="/shop/products/id">
          <img src={item.photo} width={80} alt="product" />
        </Link>
        <div>
          <h6 className='weight-400'><Link to="/shop/products/id">{item.title}</Link></h6>
          <span className='c-gray'>{item.price.money}.00 جـ </span>
        </div>
      </div>
    );
  });

  return (
    <li data-title-down="بحث">
      <a onClick={ToggleSearch}>
        <GoSearch className="icon" />
      </a>
      <Modal show={open} onHide={ToggleSearch} className="navbar-modal navbar-search" animation={true}>
        <Modal.Header>
          <Modal.Title>
            <TfiClose onClick={ToggleSearch} className="icon" />
            <h5 className="mb-0">البحث</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-container">
            <form role="search">
              <input type="text" name="search" id="modal-navbar-search" placeholder="ابحث عن منتجات..." />
              <button className="btn__classic">
                <GoSearch className="icon" />
              </button>
            </form>
            <div className="my-4 spliter light-2"></div>
            <div className="search-results d-flex flex-column r-gap-30">{searchResultsList}</div>
          </div>
        </Modal.Body>
      </Modal>
    </li>
  );
}

export default Search;
