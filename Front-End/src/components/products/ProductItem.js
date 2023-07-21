import { Badge } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaBalanceScaleRight } from 'react-icons/fa';

function ProductItem() {
  return (
    <div className="product__item">
      <div className="product__item-image">
        <img className="img-fluid" src="https://placehold.co/400x500/F4F4F4/png" />
        <div className="over-content">
          <div className="d-flex flex-column align-items-start h-100">
            <Badge className="mb-1">new</Badge>
            <Badge className="mb-1">-25%</Badge>
          </div>
          <span className="view">
            <Badge className="position-relative badge-icon" data-title-left="quick view">
              <BsEye className="icon" />
            </Badge>
          </span>
          <span className="actions">
            <Badge className="position-relative badge-icon mr-2" data-title-top="wish list">
              <AiOutlineHeart className="icon" />
            </Badge>
            <Badge className="position-relative badge-icon" data-title-top="compare">
              <FaBalanceScaleRight className="icon" />
            </Badge>
          </span>
        </div>
      </div>
      <div className="product__item-content mt-3">
        <div>
          <Link to="/" className="h6 d-block mb-1 text-capitalize">
            Belted chino trousers polo
          </Link>
          <span className="item-price">
            <span className="sale">$680.00</span>
            <span className="money">$170.00</span>
          </span>
        </div>
        <div>
          <div className="item-colorOption mb-2">
            <input defaultChecked className="radio-input" type="radio" name="color" style={{ backgroundColor: '#000' }} data-title-top="black" />
            <input className="radio-input" type="radio" name="color" style={{ backgroundColor: '#d5d2d1 ' }} data-title-top="gray" />
            <input className="radio-input" type="radio" name="color" style={{ backgroundColor: '#FFC0CB' }} data-title-top="pink" />
          </div>
          <div className="item-sizeOption">
            <input className="radio-input" type="radio" name="size" data-value={'xs'} />
            <input className="radio-input" type="radio" name="size" data-value={'s'} />
            <input defaultChecked className="radio-input" type="radio" name="size" data-value={'m'} />
            <input className="radio-input" type="radio" name="size" data-value={'l'} />
            <input className="radio-input" type="radio" name="size" data-value={'3xl'} />
          </div>
        </div>
        <button className="btn__classic-icon">
          <span>add to cart</span>
          <BiShoppingBag className="icon" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
