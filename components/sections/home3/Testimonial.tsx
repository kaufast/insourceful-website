'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
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
    }



}

export default function Testimonial() {
    return (
        <>
 
  {/*Testimonial Three Start*/}
  <section className="testimonial-three">
    <div
      className="testimonial-three__bg"
      style={{
        backgroundImage:
          "url(assets/images/backgrounds/testimonial-three-bg.jpg)"
      }}
    />
    <div className="container">
      <div className="testimonial-three__inner">
        <div className="testimonial-three__shape-1">
          <img
            src="assets/images/shapes/testimonial-three-shape-1.png"
            
          />
          <div className="testimonial-three__shape-2">
            <img
              src="assets/images/shapes/testimonial-three-shape-2.png"
              
            />
          </div>
          <div className="testimonial-three__shape-3">
            <img
              src="assets/images/shapes/testimonial-three-shape-3.png"
              
            />
          </div>
          <div className="testimonial-three__shape-4">
            <img
              src="assets/images/shapes/testimonial-three-shape-4.png"
              
            />
          </div>
          <div className="testimonial-three__shape-5 zoominout" />
          <div className="testimonial-three__shape-6 float-bob-x" />
          <div className="testimonial-three__right-img">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-1.png"
              
            />
          </div>
          <div className="testimonial-three__right-img-2 img-bounce">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-2.png"
              
            />
          </div>
          <div className="testimonial-three__right-img-3 float-bob-x">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-3.png"
              
            />
          </div>
          <div className="testimonial-three__right-img-4 float-bob-y">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-4.png"
              
            />
          </div>
          <div className="testimonial-three__right-img-5 zoom-fade-2">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-5.png"
              
            />
          </div>
          <div className="testimonial-three__right-img-6 img-bounce">
            <img
              src="assets/images/testimonial/testimonial-three-right-img-6.png"
              
            />
          </div>
        </div>
        <div className="section-title-three text-left">
          <div className="section-title-three__tagline-box">
            <p className="section-title-three__tagline">Testimonial</p>
          </div>
          <h2 className="section-title-three__title">Our Sweet Client Say</h2>
        </div>
        <div className="testimonial-three__bottom">
          <Swiper {...swiperOptions}
            className="testimonial-three__carousel owl-carousel owl-theme thm-owl__carousel"
          >
            <SwiperSlide>
            {/*Testimonial One Single Start*/}
            <div className="item">
              <div className="testimonial-three__single">
                <div className="testimonial-three__quote">
                  <img
                    src="assets/images/icon/testimonial-three-quote-icon.png"
                    
                  />
                </div>
                <p className="testimonial-three__text">
                  Excepteur sint occaecat cupidatat non proide sunt in culpa qui
                  off deserunt mollit anim id est laborum. omnis iste natus
                  error sit voluptate audantium, totam rem aperiam architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="testimonial-three__client-box">
                  <div className="testimonial-three__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-3-1.jpg"
                      
                    />
                  </div>
                  <div className="testimonial-three__client-info">
                    <h3 className="testimonial-three__client-name">
                      Mhon Smith
                    </h3>
                    <p className="testimonial-three__client-sub-title">
                      Ui Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Testimonial One Single Start*/}
            <div className="item">
              <div className="testimonial-three__single">
                <div className="testimonial-three__quote">
                  <img
                    src="assets/images/icon/testimonial-three-quote-icon.png"
                    
                  />
                </div>
                <p className="testimonial-three__text">
                  Excepteur sint occaecat cupidatat non proide sunt in culpa qui
                  off deserunt mollit anim id est laborum. omnis iste natus
                  error sit voluptate audantium, totam rem aperiam architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="testimonial-three__client-box">
                  <div className="testimonial-three__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-3-2.jpg"
                      
                    />
                  </div>
                  <div className="testimonial-three__client-info">
                    <h3 className="testimonial-three__client-name">
                      David Kapor
                    </h3>
                    <p className="testimonial-three__client-sub-title">
                      Ui Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
            </SwiperSlide>
            <SwiperSlide>
            {/*Testimonial One Single Start*/}
            <div className="item">
              <div className="testimonial-three__single">
                <div className="testimonial-three__quote">
                  <img
                    src="assets/images/icon/testimonial-three-quote-icon.png"
                    
                  />
                </div>
                <p className="testimonial-three__text">
                  Excepteur sint occaecat cupidatat non proide sunt in culpa qui
                  off deserunt mollit anim id est laborum. omnis iste natus
                  error sit voluptate audantium, totam rem aperiam architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="testimonial-three__client-box">
                  <div className="testimonial-three__client-img">
                    <img
                      src="assets/images/testimonial/testimonial-3-3.jpg"
                      
                    />
                  </div>
                  <div className="testimonial-three__client-info">
                    <h3 className="testimonial-three__client-name">
                      Monnu Smith
                    </h3>
                    <p className="testimonial-three__client-sub-title">
                      Ui Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Testimonial One Single End*/}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  {/*Testimonial Three End*/}


            
        </>
    )
}
