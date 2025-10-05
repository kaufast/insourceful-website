"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      {/*Testimonial One Start*/}
      <section className="testimonial-one">
        <div className="testimonial-one__wrap">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img src="assets/images/icon/section-title-icon.png" alt="Section title icon" />
                </div>
                <p className="section-title__tagline">Our Testimonial</p>
              </div>
              <h2 className="section-title__title">
                Our Sweet Client Feedback
              </h2>
            </div>
            <div className="testimonial-one__inner">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="testimonial-one__left">
                    <Swiper
                      {...swiperOptions}
                      className="testimonial-one__carousel"
                    >
                      <SwiperSlide>
                        {/*Testimonial One Single Start*/}
                        <div className="item">
                          <div className="testimonial-one__single">
                            <div className="testimonial-one__quote">
                              <span className="icon-left1" />
                            </div>
                            <p className="testimonial-one__text">
                              Lorem ipsum is to create a natura consectetur in a
                              tip looking block of text that doesn'tdistract
                              from the largere layout aying out pages with
                              meaningle aute are bigiger in reprehenderit nulla
                              pariatur at doesn'tdistra gseoert loked tips for
                              at busimsgd juge the ateste workseres.
                            </p>
                            <div className="testimonial-one__client-box">
                              <div className="testimonial-one__client-img">
                                <img
                                  src="assets/images/testimonial/testimonial-1-1.jpg"
                                  
                                />
                              </div>
                              <div className="testimonial-one__client-info">
                                <h3 className="testimonial-one__client-name">
                                  <span>J</span>ason Smith
                                </h3>
                                <p className="testimonial-one__client-sub-title">
                                  Web Designer
                                </p>
                                <div className="testimonial-one__client-ratting">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-alt" />
                                  <span className="fa fa-star-half-alt" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Testimonial One Single End*/}
                      </SwiperSlide>
                      <SwiperSlide>
                        {/*Testimonial One Single Start*/}
                        <div className="item">
                          <div className="testimonial-one__single">
                            <div className="testimonial-one__quote">
                              <span className="icon-left1" />
                            </div>
                            <p className="testimonial-one__text">
                              Lorem ipsum is to create a natura consectetur in a
                              tip looking block of text that doesn'tdistract
                              from the largere layout aying out pages with
                              meaningle aute are bigiger in reprehenderit nulla
                              pariatur at doesn'tdistra gseoert loked tips for
                              at busimsgd juge the ateste workseres.
                            </p>
                            <div className="testimonial-one__client-box">
                              <div className="testimonial-one__client-img">
                                <img
                                  src="assets/images/testimonial/testimonial-1-2.jpg"
                                  
                                />
                              </div>
                              <div className="testimonial-one__client-info">
                                <h3 className="testimonial-one__client-name">
                                  <span>A</span>lisha Martin
                                </h3>
                                <p className="testimonial-one__client-sub-title">
                                  Web Designer
                                </p>
                                <div className="testimonial-one__client-ratting">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-alt" />
                                  <span className="fa fa-star-half-alt" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*Testimonial One Single End*/}
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="testimonial-one__right">
                    <div className="testimonial-one__img">
                      <img
                        src="assets/images/testimonial/testimonial-one-img-1.jpg"
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Testimonial One End*/}
    </>
  );
}
