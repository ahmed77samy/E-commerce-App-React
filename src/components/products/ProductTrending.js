import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { product_items } from './items';

SwiperCore.use([Autoplay, Pagination]);

function ProductTrending() {
  // map for items to given the items
  const productList = product_items.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <ProductItem data={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="content main-padding">
      <div className="products tranding">
        <Container>
          <h5 className="text-uppercase text-center mb-4 weight-500">
            <Link to="/" className="link">
              أفـضـل منتـاجـتنا الان
            </Link>
          </h5>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            {productList}
          </Swiper>
        </Container>
      </div>
    </div>
  );
}

export default ProductTrending;
