import { Container } from 'react-bootstrap';

function Slider() {
  return (
    <div className="content">
      <div className="slider">
        <img src="img/bk/slider.jpg" />
        <div className="slider__content">
          <Container className="h-100">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <p className="c-gray">Limited Time: Online Only!</p>
              <h1 className="text-uppercase m-0 mb-3">
                final <br /> CLEARANCE{' '}
              </h1>
              <p className="weight-400 c-gray h4">Take 20% Off Sale Must-Haves'</p>
              <button className="mt-3 btn__classic-raduis">get started</button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Slider;
