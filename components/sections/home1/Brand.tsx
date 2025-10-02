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
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Pfizer</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Kinross Gold</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>ExxonMobil</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Mallinckrodt</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Newmont</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Mallinckrodt</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', fontSize: '18px', fontWeight: 'bold', color: '#666'}}>Newmont</div>
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
