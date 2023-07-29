import { Container } from 'react-bootstrap';

function Slider() {
  return (
    <div className="content">
      <div className="slider">
        <img src="img/bk/slider.jpg" alt="slider" />
        <div className="slider__content">
          <Container className="h-100">
            <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center">
              <p className="c-gray">وقت محدود: اونلاين فقط!</p>
              <h1 className="text-uppercase m-0 mb-3">
                احصــل الان علـي <br /> الـعـرض الاخيــر
              </h1>
              <p className="weight-400 c-gray h4">احصــل علـى خصــم 20٪ علـى الـعـروض التي يجـب اقتناؤها</p>
              <button className="mt-3 btn__classic-raduis">هــيا لنبـــدأ</button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Slider;
