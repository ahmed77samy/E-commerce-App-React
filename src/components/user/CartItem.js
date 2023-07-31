import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

function CartItem(props) {
  const { photo, title } = props.data;

  return (
    <>
      <div className="cart-item">
        <div className="details">
          <Link to="/shop/products/id">
            <img src={photo} alt="product" width={100} />
          </Link>
          <div>
            <Link to="/shop/products/id">
              <h6>{title}</h6>
            </Link>
            <p className="m-0">
              <label>اللون : </label> اسود
            </p>
            <p className="m-0">
              <label>المقاس : </label> XS
            </p>
            <p className="m-0">
              <label>السعر : </label> 180 جـ
            </p>
          </div>
        </div>
        <div className="quantity">
          <span className="m-0">
            <label>الكمية : </label> 4
          </span>
        </div>
        <div className="subtotal">
          <span className="m-0">
            <label>إجمالي السعر : </label> 720 جـ
          </span>
        </div>
        <div className="actions">
          <span role='button' data-title-top="تعديل">
            <GrEdit className="icon" />
          </span>
          <span role='button' data-title-top="حذف" className='mr-3'>
            <RiDeleteBin6Line className="icon" />
          </span>
        </div>
      </div>
      <div className="spliter light-2 my-3"></div>
    </>
  );
}

export default CartItem;
