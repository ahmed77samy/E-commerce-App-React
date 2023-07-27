import { AiFillStar } from 'react-icons/ai';

function RateStars(props) {
  const { stars } = props;
  let fiveStars = Array.from(Array(5));

  // map for fiveStars to create stars fill and stroke
  const starList = fiveStars.map((e, i) => {
    let type = stars > i ? 'fill' : 'empty';
    return type === 'fill' ? (
      <span key={i}>
        <AiFillStar className={`icon ${type}`} />
      </span>
    ) : (
      <span key={i}>
        <AiFillStar className={`icon ${type}`} />
      </span>
    );
  });

  return (
    <div {...props} className="fivestars">
        <div className="d-inline" data-title-left={`${stars}.00`}>{starList}</div>
    </div>
  );
}

export default RateStars;
