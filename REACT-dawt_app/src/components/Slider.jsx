import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="https://www.kfcpakistan.com/images/892f12f0-fb81-11ed-9cfc-13924e99eefd-DUO-Box-1920x420_desktop_image-2023-05-26045528.jpg"/></SwiperSlide>
      <SwiperSlide><img src="https://www.kfcpakistan.com/images/892f12f0-fb81-11ed-9cfc-13924e99eefd-DUO-Box-1920x420_desktop_image-2023-05-26045528.jpg"/></SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};