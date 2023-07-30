import { Swiper, SwiperSlide } from 'swiper/react';
import SponserItem from './SponserItem';
import { sponsers } from './items';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import SwiperControl from '../SwiperControl';

SwiperCore.use([Autoplay, Navigation]);

function Sponsers() {
  let navigationPrevRef = useRef(0);
  let navigationNextRef = useRef(0);

  // map for sponsers to given the items
  const itemList = sponsers.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <SponserItem data={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="sponsers">
      <div className="position-relative px-5">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            576: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 6,
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
          {itemList}
        </Swiper>
        <SwiperControl prevEl={navigationPrevRef} nextEl={navigationNextRef} />
      </div>
    </div>
  );
}

export default Sponsers;
