import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay]);

function ProductTrending() {
  return (
    <div className="content main-padding">
      <div className="products tranding">
        <Container>
          <h5 className="text-uppercase text-center mb-4 weight-500">
            <Link to="/" className="link">
              trending now
            </Link>
          </h5>
          <div className="position-relative px-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide key="0">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="1">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="2">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="3">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="4">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="5">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="6">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="7">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="8">
                <ProductItem />
              </SwiperSlide>
              <SwiperSlide key="9">
                <ProductItem />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ProductTrending;
