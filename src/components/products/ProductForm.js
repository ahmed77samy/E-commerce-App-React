import { useRef, useState } from 'react';
import { AiOutlineHeart, AiOutlineMinus } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { FaBalanceScaleRight } from 'react-icons/fa';

function ProductForm({ data }) {
  const [quantity, setQuantity] = useState(1);
  const quantityRef = useRef(0);

  // decrement state quantity one by one
  // add new event and called handleChange
  const decrement = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity - 1);
    var event = new Event(quantityRef.current, {
      bubbles: true,
      cancelable: true,
    });
    quantityRef.current.dispatchEvent(event);
    handleChange(event, true, quantity - 1);
  };

  // increment state quantity one by one
  // add new event and called handleChange
  const increment = (e) => {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
    var event = new Event(quantityRef.current, {
      bubbles: true,
      cancelable: true,
    });
    quantityRef.current.dispatchEvent(event);
    handleChange(event, true, quantity + 1);
  };

  // handle change satate
  const handleChange = (e, x, y) => {
    if (!x) {
      setQuantity(e.target.value);
    } else {
      e.target.value = y;
    }
  };

  // map for items to given the items
  const colorList = data.colors.map((item, index) => {
    return <input key={index} defaultChecked={index === 0} className="radio-input" type="radio" name="color" style={{ backgroundColor: `${item.code}` }} data-title-top={item.name} />;
  });
  // map for items to given the items
  const sizeList = data.sizes.map((item, index) => {
    return <input key={index} defaultChecked={index === 0} className="radio-input" type="radio" name="size" data-value={item} />;
  });

  return (
    <form>
      <div className="item-colorOption mb-4">{colorList}</div>
      <div className="item-sizeOption mb-4">{sizeList}</div>
      <div className="item-quantity mb-4">
        <button className="btn__classic" name="decrement" onClick={decrement}>
          <AiOutlineMinus className="icon" />
        </button>
        <input name="quantity" ref={quantityRef} value={quantity} type="number" onChange={handleChange} />
        <button className="btn__classic" name="increment" onClick={increment}>
          <BsPlusLg className="icon" />
        </button>
      </div>

      <div className="d-flex gap-10 actions">
        <div className="item-cart">
          <button className="btn__classic-icon">
            <span>اضافه الي السلة</span>
            <BiShoppingBag className="icon" />
          </button>
        </div>

        <div className="item-wishlist">
          <button className="btn__classic" name="wishlist">
            <AiOutlineHeart className="icon" />
          </button>
        </div>
        <div className="item-compare">
          <button className="btn__classic" name="compare">
            <FaBalanceScaleRight className="icon" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
