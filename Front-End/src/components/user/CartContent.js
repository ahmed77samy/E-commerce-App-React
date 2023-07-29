import { Container } from 'react-bootstrap';
import { cart_items } from './items';
import CartItem from './CartItem';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsBagCheck } from 'react-icons/bs';

function CartContent() {
  const CartList = cart_items.map((item, index) => {
    return <CartItem data={item} key={index} />;
  });

  return (
    <div className="content main-padding">
      <div className="cart-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">السله</h3>
          <div className="cart-header">
            <h4 className="m-0">المجموع: 800 جـ</h4>
            <h6 className="m-0">6 عناصر</h6>
          </div>
          <div className="spliter light-2 my-3"></div>
          <div className="cart-content">{CartList}</div>
          <div className='mt-3 d-flex flex-wrap gap-20 justify-content-between'>
            <button className="btn__classic">
              <BsBagCheck className="icon ml-2" />
              الذهاب للدفع
            </button>
            <button className="btn__classic">
              <RiDeleteBin6Line className="icon ml-2" /> حذف الكل
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CartContent;
