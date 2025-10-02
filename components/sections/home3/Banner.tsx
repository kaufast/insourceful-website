
'use client'
import Link from "next/link"
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



}

export default function Banner() {
  return (
    <>

      {/* Main Sllider Start */}
      <section className="main-slider-three">
        <div
          className="main-slider-three__bg-1"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/main-slider-three-bg-1.jpg)"
          }}
        />
        <div className="main-slider-three__social">
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Pinterest</Link>
        </div>
        <ul className="list-unstyled main-slider-three__open-close-hours">
          <li>Mon - fri</li>
          <li>9am - 7pm</li>
        </ul>
        <Swiper {...swiperOptions} className="main-slider-three__wrap">
          <div
            className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel"
          >
            <SwiperSlide>
              <div className="item main-slider-three__slide-1">
                <div className="main-slider-three__img">
                  <img
                    src="assets/images/resources/main-slider-three-img-1.jpg"
                    
                  />
                </div>
                <div className="main-slider-three__overly" />
                <div className="main-slider-three__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-1.png"
                    
                  />
                </div>
                <div className="container">
                  <div className="main-slider-three__content">
                    <p className="main-slider-three__sub-title">
                      Modern I Business I Consultan
                    </p>
                    <h2 className="main-slider-three__title">
                      Best Grow Your <br /> Business
                    </h2>
                    <p className="main-slider-three__text">
                      Our Best Business Technology Consulting
                    </p>
                    <div className="main-slider-three__btn-box">
                      <Link href="contact" className="main-slider-three__btn">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item main-slider-three__slide-1">
                <div className="main-slider-three__img">
                  <img
                    src="assets/images/resources/main-slider-three-img-1.jpg"
                    
                  />
                </div>
                <div className="main-slider-three__overly" />
                <div className="main-slider-three__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-1.png"
                    
                  />
                </div>
                <div className="container">
                  <div className="main-slider-three__content">
                    <p className="main-slider-three__sub-title">
                      Modern I Business I Consultan
                    </p>
                    <h2 className="main-slider-three__title">
                      Best Grow Your <br /> Business
                    </h2>
                    <p className="main-slider-three__text">
                      Our Best Business Technology Consulting
                    </p>
                    <div className="main-slider-three__btn-box">
                      <Link href="contact" className="main-slider-three__btn">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item main-slider-three__slide-1">
                <div className="main-slider-three__img">
                  <img
                    src="assets/images/resources/main-slider-three-img-1.jpg"
                    
                  />
                </div>
                <div className="main-slider-three__overly" />
                <div className="main-slider-three__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-1.png"
                    
                  />
                </div>
                <div className="container">
                  <div className="main-slider-three__content">
                    <p className="main-slider-three__sub-title">
                      Modern I Business I Consultan
                    </p>
                    <h2 className="main-slider-three__title">
                      Best Grow Your <br /> Business
                    </h2>
                    <p className="main-slider-three__text">
                      Our Best Business Technology Consulting
                    </p>
                    <div className="main-slider-three__btn-box">
                      <Link href="contact" className="main-slider-three__btn">
                        Free Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
      {/*Main Sllider Start */}


    </>
  )
}
