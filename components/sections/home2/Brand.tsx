"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
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
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
    1350: {
      slidesPerView: 4,
    },
  },
};
export default function Brands() {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-two">
        <div className="container">
          <Swiper
            {...swiperOptions}
            className="brand-two__carousel thm-owl__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-two__single">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-1.png"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-two__single">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-2.png"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-two__single">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-3.png"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-two__single">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-4.png"  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-two__single">
                <div className="brand-two__img">
                  <img src="assets/images/brand/brand-1-5.png"  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*Brand One End*/}
    </>
  );
}
