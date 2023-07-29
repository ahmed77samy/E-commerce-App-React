import { Link } from "react-router-dom";

function CollectionItem({data: {photo, title, count}}) {
  return (
    <Link to="/shop" className="collection__item">
      <img src={photo} alt="collection" />
      <div className="textBox py-3">
        <p className="text head m-0 text-uppercase">{title}</p>
        <p className="text price m-0">{count}</p>
      </div>
    </Link>
  );
}

export default CollectionItem;
