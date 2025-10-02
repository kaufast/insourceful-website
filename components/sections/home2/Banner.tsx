"use client";
import Link from "next/link";
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
  return (
    <>
      {/* Main Sllider Start */}
      <section className="main-slider-two">
        <Swiper
          {...swiperOptions}
          className="main-slider-two__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          <SwiperSlide>
            <div className="item main-slider-two__slide-1">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-1.jpg)",
                }}
              ></div>

              {/* /.slider-one__bg */}
              <div className="main-slider-two__shape-1" />
              <div className="main-slider-two__img">
                <img
                  src="assets/images/resources/main-slider-two-img-1.png"
                  
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <p className="main-slider-two__sub-title">
                    Modern I Business I Consultan
                  </p>
                  <h2 className="main-slider-two__title">
                    Digital Solution <br /> Business
                  </h2>
                  <p className="main-slider-two__text">
                    We're Best Consultant Agency In Market
                  </p>
                  <div className="main-slider-two__btn-box">
                    <Link href="#" className="thm-btn main-slider-two__btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider-two__slide-2">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-2.jpg)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider-two__shape-1" />
              <div className="main-slider-two__img">
                <img
                  src="assets/images/resources/main-slider-two-img-1.png"
                  
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <p className="main-slider-two__sub-title">
                    Modern I Business I Consultan
                  </p>
                  <h2 className="main-slider-two__title">
                    Digital Solution <br /> Business
                  </h2>
                  <p className="main-slider-two__text">
                    We're Best Consultant Agency In Market
                  </p>
                  <div className="main-slider-two__btn-box">
                    <Link href="#" className="thm-btn main-slider-two__btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item main-slider-two__slide-3">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/slider-2-3.jpg)",
                }}
              ></div>
              {/* /.slider-one__bg */}
              <div className="main-slider-two__shape-1" />
              <div className="main-slider-two__img">
                <img
                  src="assets/images/resources/main-slider-two-img-1.png"
                  
                />
              </div>
              <div className="container">
                <div className="main-slider-two__content">
                  <p className="main-slider-two__sub-title">
                    Modern I Business I Consultan
                  </p>
                  <h2 className="main-slider-two__title">
                    Digital Solution <br /> Business
                  </h2>
                  <p className="main-slider-two__text">
                    We're Best Consultant Agency In Market
                  </p>
                  <div className="main-slider-two__btn-box">
                    <Link href="#" className="thm-btn main-slider-two__btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </Link>
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
