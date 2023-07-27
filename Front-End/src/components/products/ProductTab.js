import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import user from '../../core/api/user';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReviews';
import SizeGuide from './SizeGuide';
import ShippingAndReturn from './ShippingAndReturn';

function ProductTab() {
  return (
    <div className="product__tabs">
      <Tabs defaultActiveKey="description" id="product-single-tabs">
        <Tab eventKey="description" title="وصف المنتج">
          <ProductDescription />
        </Tab>
        <Tab eventKey="reviews" title="التقيمات">
          {user.IsLogin() ? (
            <ProductReviews />
          ) : (
            <p className="text-center m-0">
              من فضلك{' '}
              <Link to="/login" className="link weight-700">
                سجل الدخول
              </Link>{' '}
              لكي تري التقيمات
            </p>
          )}
        </Tab>
        <Tab eventKey="size-guide" title="شروط المقاسات">
          <SizeGuide />
        </Tab>
        <Tab eventKey="shipping-and-return" title="الشحن والإرجاع">
          <ShippingAndReturn />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProductTab;
