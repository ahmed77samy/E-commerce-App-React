import { Link } from 'react-router-dom';

function BlogItem({ data: { photo, title, date, publisher } }) {
  return (
    <div className="blog-item d-flex gap-20">
      <div className="blog__item-image">
        <img className="img-fluid" src={photo} alt="blog" />
      </div>
      <div className="blog__item-content d-flex flex-column justify-content-start align-items-start">
        <Link to="/" className="h3 text-uppercase">
          {title}
        </Link>
        <span className="c-gray italic text-small">{date}</span>
        <p className="c-gray italic">نشر بواسطه {publisher}</p>
      </div>
    </div>
  );
}

export default BlogItem;
