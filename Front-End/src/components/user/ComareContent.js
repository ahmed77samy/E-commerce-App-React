import { Container, Table } from 'react-bootstrap';
import { compare_items } from './items';
import { Link } from 'react-router-dom';
import ProductStock from '../products/ProductStock';
import { RiDeleteBin6Line } from 'react-icons/ri';

function ComareContent() {
  const ProductList = compare_items.map((item, index) => {
    const { photo, title, price } = item;
    return (
      <div className="sizer col" key={index}>
        <div>
          <a data-title-left="حذف">
            <RiDeleteBin6Line className="icon" />
          </a>
        </div>
        <img src={photo} className="my-3" />
        <div>
          <h6>
            <Link to="/shop/products/id">{title}</Link>
          </h6>
          <span>{price.money}.00 جـ </span>
        </div>
      </div>
    );
  });

  const DescriptionList = compare_items.map((item, index) => {
    const { description } = item;
    return (
      <div className="sizer col" key={index}>
        <p className="m-0 c-gray text-small">{description}</p>
      </div>
    );
  });

  const CollectionList = compare_items.map((item, index) => {
    return (
      <div className="sizer col" key={index}>
        <Link className="text-small clink c-gray" to="/shop">
          ملابس
        </Link>
      </div>
    );
  });

  const TypeList = compare_items.map((item, index) => {
    return (
      <div className="sizer col" key={index}>
        <Link className="text-small clink c-gray" to="/shop">
          رجالي
        </Link>
      </div>
    );
  });

  const StockList = compare_items.map((item, index) => {
    const {} = item;
    return (
      <div className="sizer col" key={index}>
        <ProductStock stock={true} />
      </div>
    );
  });

  const CodeList = compare_items.map((item, index) => {
    return (
      <div className="sizer col" key={index}>
        <p className="m-0 text-small c-gray">{index}</p>
      </div>
    );
  });

  const SizeList = compare_items.map((item, index) => {
    const { sizes } = item;
    const SizeItemList = sizes.map((e, i) => (
      <span className="text-small c-gray d-block text-uppercase" key={i}>
        {e}
      </span>
    ));
    return (
      <div className="sizer col d-flex flex-wrap c-gap-10" key={index}>
        {SizeItemList}
      </div>
    );
  });

  const ColorList = compare_items.map((item, index) => {
    const { colors } = item;
    const ColorItemList = colors.map((e, i) => (
      <span className="text-small c-gray d-block" key={i}>
        {e.name}
      </span>
    ));
    return (
      <div className="sizer col d-flex flex-wrap c-gap-10" key={index}>
        {ColorItemList}
      </div>
    );
  });

  return (
    <div className="content main-padding">
      <div className="compare-content">
        <Container>
          <h3 className="text-uppercase text-center mb-5">المقارنات</h3>
          <Table responsive>
            <tbody>
              <tr className="product">
                <td className="bd-l bdn-t">
                  <div className="sizer col">المنتج</div>
                </td>
                <td className="bdn-t">
                  <div className="d-flex">{ProductList}</div>
                </td>
              </tr>
              <tr className="description">
                <td className="bd-l">
                  <div className="sizer col">الوصف</div>
                </td>
                <td>
                  <div className="d-flex">{DescriptionList}</div>
                </td>
              </tr>
              <tr className="collections">
                <td className="bd-l">
                  <div className="sizer col">المجموعه</div>
                </td>
                <td>
                  <div className="d-flex">{CollectionList}</div>
                </td>
              </tr>
              <tr className="type">
                <td className="bd-l">
                  <div className="sizer col">النوع</div>
                </td>
                <td>
                  <div className="d-flex">{TypeList}</div>
                </td>
              </tr>
              <tr className="stock">
                <td className="bd-l">
                  <div className="sizer col">الحالة</div>
                </td>
                <td>
                  <div className="d-flex">{StockList}</div>
                </td>
              </tr>
              <tr className="code">
                <td className="bd-l">
                  <div className="sizer col">الباركود</div>
                </td>
                <td>
                  <div className="d-flex">{CodeList}</div>
                </td>
              </tr>
              <tr className="size">
                <td className="bd-l">
                  <div className="sizer col">المقاسات</div>
                </td>
                <td>
                  <div className="d-flex">{SizeList}</div>
                </td>
              </tr>
              <tr className="color">
                <td className="bd-l">
                  <div className="sizer col">الالوان</div>
                </td>
                <td>
                  <div className="d-flex">{ColorList}</div>
                </td>
              </tr>
            </tbody>
          </Table>
          <button className="btn__classic mt-5 mx-auto"> <RiDeleteBin6Line className="icon ml-2" /> حذف الكل</button>
        </Container>
      </div>
    </div>
  );
}

export default ComareContent;
