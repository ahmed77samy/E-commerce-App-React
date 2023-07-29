import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';

function ProductStock(props) {
  const { stock } = props;
  return (
    <span className="stock">
      {stock ? (
        <span className="in-stock">
          <AiOutlineCheckCircle className="icon mr-1" /> in stock
        </span>
      ) : (
        <span className="out-stock">
          <FaRegTimesCircle className="icon mr-1" /> out of stock
        </span>
      )}
    </span>
  );
}

export default ProductStock;
