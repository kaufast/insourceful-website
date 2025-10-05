"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 5,
    },
    1350: {
      slidesPerView: 6,
    },
  },
};
export default function Brands() {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-one">
        <div className="brand-one__inner">
          <Swiper
            {...swiperOptions}
            className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/pfizer-white.svg" alt="Pfizer" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/kinross-white.svg" alt="Kinross Gold" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/exxonmobil-white.svg" alt="ExxonMobil" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/mallinckrodt-white.svg" alt="Mallinckrodt" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/newmont-white.svg" alt="Newmont" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/mallinckrodt-white.svg" alt="Mallinckrodt" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/newmont-white.svg" alt="Newmont" style={{height: '60px', filter: 'brightness(0) invert(1) contrast(100%) saturate(0%)'}} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* If we need navigation buttons */}
        </div>
      </section>
      {/*Brand One End*/}
    </>
  );
}
