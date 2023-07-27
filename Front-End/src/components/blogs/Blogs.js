import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import BlogItem from './BlogItem';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperControl from '../SwiperControl';
import { blog_items } from './items';

SwiperCore.use([Autoplay, Navigation, Pagination]);

function Blogs() {
  let navigationPrevRef = useRef(0);
  let navigationNextRef = useRef(0);

  // map for items to given the items
  const blogList = blog_items.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <BlogItem data={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="content main-padding">
      <div className="blogs">
        <Container>
          <h5 className="text-uppercase text-center mb-4 weight-500">
            <Link to="/" className="link">
              عالــمــنا
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
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                992: {
                  slidesPerView: 2,
                },
              }}
              /**
               * Delay execution for the refs to be defined
               * Override prevEl & nextEl now that refs are defined
               * Re-init navigation
               */
              onSwiper={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {blogList}
            </Swiper>
            <SwiperControl prevEl={navigationPrevRef} nextEl={navigationNextRef} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Blogs;
