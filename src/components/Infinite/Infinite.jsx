import React from 'react'
import s from './Infinite.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const infinite = () => {
  return (
  <>
  <div className={s.infinite}>
  <Swiper
        slidesPerView={7}
        spaceBetween={10}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0,
        }}
        breakpoints={ {
          1300: {
            slidesPerView: 5,
          },
          800: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 1,
          }
        }}
        className={s.mySwiper}
      >
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide className={s.swiper_slide}>
        <div className={s.swiper_slide}>
       <h3>MEMBERSHIP</h3>
        <img src="/weblogo2.svg" alt="" />
        </div>
        </SwiperSlide>

      </Swiper>
  </div>
  </>
  )
}

export default infinite