import { Link } from 'react-router-dom';

function BlogItem() {
  return (
    <div className="blog-item d-flex gap-20">
      <div className="product__item-image">
        <img className="img-fluid" src="https://placehold.co/300x200/F4F4F4/png" />
      </div>
      <div className="product__item-content d-flex flex-column justify-content-start align-items-start">
        <Link to="/" className="h3 text-uppercase">
          one of the best?
        </Link>
        <span className="c-gray italic text-small">Octobar 31, 2018</span>
        <p className="c-gray italic">Posted by ANNIE GREENBERG</p>
      </div>
    </div>
  );
}

export default BlogItem;
