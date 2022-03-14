import banner_1 from 'image/banner/banner1.png';
import banner_2 from 'image/banner/banner2.png';
import banner_3 from 'image/banner/banner3.png';
import banner_4 from 'image/banner/banner4.png';
import banner_5 from 'image/banner/banner5.png';
import banner_6 from 'image/banner/banner6.png';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'scss/app.scss';
import SwiperCore, {
  A11y,
  Autoplay,
  EffectCube,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'components/body/banner/style.scss';

// install Swiper modules
SwiperCore.use([Navigation, EffectCube, Pagination, Scrollbar, A11y, Autoplay]);

const Banner: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        navigation
        effect="cube"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          {' '}
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
            effect="blur"
            style={{ width: '100%', height: 230, borderRadius: '5px' }}
            src={banner_6}
          />
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
};

export default Banner;
