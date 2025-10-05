"use client";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Main Sllider Start */}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          <SwiperSlide>
            <div className="item main-slider__slide-1">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/hero.webp)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-2.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Oracle JD Edwards | Enterprise Consulting
                  </p>
                  <h2 className="main-slider__title">
                    Engineering Excellence <br /> for Asset-Intensive Enterprises
                  </h2>
                  <p className="main-slider__text">
                    Expert Oracle JD Edwards consulting for Mining, Oil & Gas, Pharmaceuticals, and Utilities.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="contact" className="thm-btn main-slider__btn">
                      Schedule Consultation
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider__slide-2">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/hero.webp)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-2.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Oracle JD Edwards | Enterprise Consulting
                  </p>
                  <h2 className="main-slider__title">
                    Engineering Excellence <br /> for Asset-Intensive Enterprises
                  </h2>
                  <p className="main-slider__text">
                    Expert Oracle JD Edwards consulting for Mining, Oil & Gas, Pharmaceuticals, and Utilities.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="contact" className="thm-btn main-slider__btn">
                      Schedule Consultation
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider__slide-3">
              <div
                className="main-slider__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-1-3.jpg)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider__shape-1" />
              <div className="main-slider__shape-2 float-bob-y">
                <img
                  src="assets/images/shapes/main-slider-shape-2.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="main-slider__shape-3 float-bob-x">
                <img
                  src="assets/images/shapes/main-slider-shape-3.png"
                  alt="Decorative slider shape"
                />
              </div>
              <div className="container">
                <div className="main-slider__content">
                  <p className="main-slider__sub-title">
                    Oracle JD Edwards | Enterprise Consulting
                  </p>
                  <h2 className="main-slider__title">
                    Engineering Excellence <br /> for Asset-Intensive Enterprises
                  </h2>
                  <p className="main-slider__text">
                    Expert Oracle JD Edwards consulting for Mining, Oil & Gas, Pharmaceuticals, and Utilities.
                  </p>
                  <div className="main-slider__btn-box">
                    <a href="contact" className="thm-btn main-slider__btn">
                      Schedule Consultation
                      <span className="fa fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/*Main Sllider Start */}
    </>
  );
}
