import RateStars from '../RateStars';
import { Col, Row } from 'react-bootstrap';
import { reviews } from './items';

function Reviews() {
  return (
    <div className="reviews">
      <Row className="r-gap-50">
        <Col xs={12} lg={6}>
          <div className="reviews__item">
            <p className="comment">{reviews[0].comment}</p>
            <div className="inteface">
              <img src={reviews[0].photo} alt="reviews" />
              <div>
                <h6 className="text-uppercase m-0">{reviews[0].name}</h6>
                <p className="mb-1">{reviews[0].job}</p>
                <RateStars stars={reviews[0].rating} />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <div className="reviews__item">
            <p className="comment">{reviews[1].comment}</p>
            <div className="inteface">
              <img src={reviews[1].photo} alt="reviews" />
              <div>
                <h6 className="text-uppercase m-0">{reviews[1].name}</h6>
                <p className="mb-1">{reviews[1].job}</p>
                <RateStars stars={reviews[1].rating} />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <div className="reviews__item reverse">
            <div className="inteface">
              <img src={reviews[2].photo} alt="reviews" />
              <div>
                <h6 className="text-uppercase m-0">{reviews[2].name}</h6>
                <p className="mb-1">{reviews[2].job}</p>
                <RateStars stars={reviews[2].rating} />
              </div>
            </div>
            <p className="comment top">{reviews[2].comment}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Reviews;
