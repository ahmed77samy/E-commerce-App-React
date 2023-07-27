import { Container } from 'react-bootstrap';
import ProductTab from './ProductTab';
import { product_items } from './items';
import ProductTrending from './ProductTrending';
import ProductView from "./ProductView";
import { useParams } from "react-router-dom";

function ProductSingle() {
const params = useParams();
  const item = product_items[0];
  return (
    <div className="content main-padding">
      <div className="products">
        <Container className="d-flex flex-column r-gap-50">
          <ProductView data={item} id={params.id} />
          <ProductTab />
          <ProductTrending />
        </Container>
      </div>
    </div>
  );
}

export default ProductSingle;
