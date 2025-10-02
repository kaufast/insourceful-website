"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CounterUp from "@/components/elements/CounterUp";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
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
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1,
    },
    1350: {
      slidesPerView: 1,
    },
  },
};
export default function Testimonial() {
  return (
    <>
      {/*Testimonial Two Start*/}
      <section className="testimonial-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="testimonial-two__left">
                <div className="testimonial-two__left-img">
                  <img
                    src="assets/images/testimonial/testimonial-two-left-img-1.jpg"
                    
                  />
                </div>
                <div className="section-title-two text-left">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">
                      Get To Know Us
                    </span>
                  </div>
                  <h2 className="section-title-two__title">
                    Take Your Business To The Next Level
                  </h2>
                </div>
                <p className="testimonial-two__text-1">
                  Consectetur adipisicing elit, sed do eiusmod tempor <br />
                  incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad
                  minim veniam
                </p>
                <div className="testimonial-two__counter">
                  <div className="testimonial-two__counter-single">
                    <div className="testimonial-two__counter-icon">
                      <span className="icon-risk" />
                    </div>
                    <div className="testimonial-two__counter-content">
                      <div className="testimonial-two__counter-count">
                        <h3>
                          <CounterUp end={12} />
                        </h3>
                        <span className="testimonial-two__counter-letter">
                          K
                        </span>
                      </div>
                      <p className="testimonial-two__counter-text">
                        Working Hours
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-two__counter-single">
                    <div className="testimonial-two__counter-icon">
                      <span className="icon-content-management" />
                    </div>
                    <div className="testimonial-two__counter-content">
                      <div className="testimonial-two__counter-count">
                        <h3>
                          <CounterUp end={15} />
                        </h3>
                        <span className="testimonial-two__counter-letter">
                          K
                        </span>
                      </div>
                      <p className="testimonial-two__counter-text">
                        Successfull Project
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="testimonial-two__right">
                <Swiper
                  {...swiperOptions}
                  className="testimonial-two__carousel owl-carousel owl-theme thm-owl__carousel"
                >
                  <SwiperSlide>
                    <div className="item">
                      <div className="testimonial-two__single">
                        <div className="testimonial-two__quote">
                          <span className="icon-left" />
                        </div>
                        <p className="testimonial-two__text-2">
                          I Was Very Impresed By The Osfin in the Services
                          Meridian Sun Strikes The Upper in Surface Of The
                          Impenetrable in Foliage My Trees.
                        </p>
                        <div className="testimonial-two__client-info">
                          <div className="testimonial-two__client-img">
                            <img
                              src="assets/images/testimonial/testimonial-2-1.jpg"
                              
                            />
                          </div>
                          <div className="testimonial-two__client-content">
                            <h4 className="testimonial-two__client-name">
                              Mony Smith
                            </h4>
                            <p className="testimonial-two__client-sub-title">
                              Business Owner
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="testimonial-two__single">
                        <div className="testimonial-two__quote">
                          <span className="icon-left" />
                        </div>
                        <p className="testimonial-two__text-2">
                          I Was Very Impresed By The Osfin in the Services
                          Meridian Sun Strikes The Upper in Surface Of The
                          Impenetrable in Foliage My Trees.
                        </p>
                        <div className="testimonial-two__client-info">
                          <div className="testimonial-two__client-img">
                            <img
                              src="assets/images/testimonial/testimonial-2-2.jpg"
                              
                            />
                          </div>
                          <div className="testimonial-two__client-content">
                            <h4 className="testimonial-two__client-name">
                              Kevin Smith
                            </h4>
                            <p className="testimonial-two__client-sub-title">
                              Business Owner
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="testimonial-two__single">
                        <div className="testimonial-two__quote">
                          <span className="icon-left" />
                        </div>
                        <p className="testimonial-two__text-2">
                          I Was Very Impresed By The Osfin in the Services
                          Meridian Sun Strikes The Upper in Surface Of The
                          Impenetrable in Foliage My Trees.
                        </p>
                        <div className="testimonial-two__client-info">
                          <div className="testimonial-two__client-img">
                            <img
                              src="assets/images/testimonial/testimonial-2-3.jpg"
                              
                            />
                          </div>
                          <div className="testimonial-two__client-content">
                            <h4 className="testimonial-two__client-name">
                              Streve Smith
                            </h4>
                            <p className="testimonial-two__client-sub-title">
                              Business Owner
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial Two End*/}
    </>
  );
}
