import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function SwiperControl({prevEl,nextEl}) {
  return (
    <div className="swiper__control">
      <span className="prev" ref={prevEl}>
        <BsChevronLeft className="icon" />
      </span>
      <span className="next" ref={nextEl}>
        <BsChevronRight className="icon" />
      </span>
    </div>
  );
}

export default SwiperControl;
