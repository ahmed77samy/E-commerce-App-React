import { Badge } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaBalanceScaleRight } from 'react-icons/fa';

function ProductItem({ data: { photo, title, price, sizes, colors, badges } }) {
  // map for items to given the items
  const badgeList = badges.map((item, index) => {
    return (
      <Badge key={index} className="mb-1">
        {item}
      </Badge>
    );
  });
  // map for items to given the items
  const colorList = colors.map((item, index) => {
    return <input key={index} defaultChecked={index === 0} className="radio-input" type="radio" name="color" style={{ backgroundColor: `${item.code}` }} data-title-top={item.name} />;
  });
  // map for items to given the items
  const sizeList = sizes.map((item, index) => {
    return <input key={index} defaultChecked={index === 0} className="radio-input" type="radio" name="size" data-value={item} />;
  });

  return (
    <div className="product__item">
      <div className="product__item-image">
        <img className="img-fluid" src={photo} />
        <div className="over-content">
          <div className="d-flex flex-column align-items-start h-100">{badgeList}</div>
          <span className="view">
            <Badge className="position-relative badge-icon" data-title-right="نظرة سريعة">
              <BsEye className="icon" />
            </Badge>
          </span>
          <span className="actions">
            <Badge className="position-relative badge-icon ml-2" data-title-top="المفضلة">
              <AiOutlineHeart className="icon" />
            </Badge>
            <Badge className="position-relative badge-icon" data-title-top="مقارتة">
              <FaBalanceScaleRight className="icon" />
            </Badge>
          </span>
        </div>
      </div>
      <div className="product__item-content mt-3">
        <div>
          <Link to="/shop/products/id" className="h5 d-block mb-1 text-capitalize">
            {title}
          </Link>
          <span className="item-price">
            {price.sale && <span className="sale"> {price.sale}.00 جـ </span>}
            <span className="money">{price.money}.00 جـ </span>
          </span>
        </div>
        <form>
          <div className="item-colorOption mb-2">{colorList}</div>
          <div className="item-sizeOption">{sizeList}</div>
        </form>
        <button className="btn__classic-icon">
          <span>اضافه الي السلة</span>
          <BiShoppingBag className="icon" />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
