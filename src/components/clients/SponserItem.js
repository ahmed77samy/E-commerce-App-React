import { Link } from 'react-router-dom';

function SponserItem({ data: { photo } }) {
  // prevent default
  const handleClick = (e) => e.preventDefault();
  return (
    <Link to="/" onClick={handleClick}>
      <img src={photo} className="img-fluid" alt="sponser" />
    </Link>
  );
}

export default SponserItem;
