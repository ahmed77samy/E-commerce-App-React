import { Link } from 'react-router-dom';
import { last_product_items } from '../products/items';
import { best_blog_items } from './items';

function AsideBlog() {
  // map for product_items to given the items
  const lastProductsList = last_product_items.map((item, index) => {
    return (
      <div className="product-item" key={index}>
        <Link to="/shop/products/id">
          <img src={item.photo} width={80} alt="product" />
        </Link>
        <div>
          <h6 className="weight-400">
            <Link to="/shop/products/id">{item.title}</Link>
          </h6>
          <span className="c-gray">{item.price.money}.00 جـ </span>
        </div>
      </div>
    );
  });
  // map for product_items to given the items
  const bestBlogsList = best_blog_items.map((item, index) => {
    return (
      <div className="blog-item" key={index}>
        <Link to="/shop/blogs/id">
          <img src={item.photo} width={100} alt="product" />
        </Link>
        <div>
          <h6 className="weight-400">
            <Link to="/shop/blogs/id">{item.title}</Link>
          </h6>
          <span className="c-gray italic text-small">{item.date}</span>
          <p className="c-gray italic text-small">نشر بواسطه {item.publisher}</p>
        </div>
      </div>
    );
  });

  return (
    <aside className="aside__blog">
      <div className="aside-group">
        <div className="aside-header">
          <h4 className="m-0">اخر المنتجات</h4>
        </div>
        <div className="aside-body d-flex flex-column r-gap-10">{lastProductsList}</div>
      </div>
      <div className="spliter light-2 my-4"></div>
      <div className="aside-group">
        <div className="aside-header">
          <h4 className="m-0">افضل المقالات</h4>
        </div>
        <div className="aside-body d-flex flex-column r-gap-10">{bestBlogsList}</div>
      </div>
      <div className="spliter light-2 my-4"></div>
      <div className="aside-group">
        <div className="aside-header">
          <h4 className="m-0">الاشارات</h4>
        </div>
        <div className="aside-body tags d-flex flex-column r-gap-10">
          <ul className='list-unstyled m-0 d-flex flex-wrap r-gap-10'>
            <li> <Link to="/shop">رجالي</Link> </li>
            <li> <Link to="/shop">حريمي</Link> </li>
            <li> <Link to="/shop">أطفالي</Link> </li>
            <li> <Link to="/shop">اكسسوارات</Link> </li>
            <li> <Link to="/shop">أحذية</Link> </li>
            <li> <Link to="/shop">بيجامات</Link> </li>
            <li> <Link to="/shop">ساعات</Link> </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default AsideBlog;
