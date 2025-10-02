'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>

            <Swiper {...swiperOptions}
                className="testimonial-four__carousel owl-carousel owl-theme thm-owl__carousel"
            >
                <SwiperSlide>
                    {/*Testimonial Four Single Start*/}
                    <div className="item">
                        <div className="testimonial-four__single">
                            <div className="testimonial-four__quote">
                                <span className="icon-left1" />
                            </div>
                            <p className="testimonial-four__text">
                                Lorem ipsum is to create a natura consectetur in a looking
                                block of text that doesn'tdistract from the layout aying out
                                pages with meaningle aute are in reprehenderit nulla pariatur.
                            </p>
                            <div className="testimonial-four__client-box">
                                <div className="testimonial-four__client-img">
                                    <img
                                        src="assets/images/testimonial/testimonial-1-1.jpg"
                                        
                                    />
                                </div>
                                <div className="testimonial-four__client-info">
                                    <h3 className="testimonial-four__client-name">
                                        Lames Jhon
                                    </h3>
                                    <p className="testimonial-four__client-sub-title">
                                        Web Designer
                                    </p>
                                    <div className="testimonial-four__client-ratting">
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
                    {/*Testimonial Four Single End*/}
                </SwiperSlide>
                <SwiperSlide>
                    {/*Testimonial Four Single Start*/}
                    <div className="item">
                        <div className="testimonial-four__single">
                            <div className="testimonial-four__quote">
                                <span className="icon-left1" />
                            </div>
                            <p className="testimonial-four__text">
                                Lorem ipsum is to create a natura consectetur in a looking
                                block of text that doesn'tdistract from the layout aying out
                                pages with meaningle aute are in reprehenderit nulla pariatur.
                            </p>
                            <div className="testimonial-four__client-box">
                                <div className="testimonial-four__client-img">
                                    <img
                                        src="assets/images/testimonial/testimonial-1-2.jpg"
                                        
                                    />
                                </div>
                                <div className="testimonial-four__client-info">
                                    <h3 className="testimonial-four__client-name">
                                        Jessica Smith
                                    </h3>
                                    <p className="testimonial-four__client-sub-title">
                                        Web Designer
                                    </p>
                                    <div className="testimonial-four__client-ratting">
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
                    {/*Testimonial Four Single End*/}
                </SwiperSlide>
                <SwiperSlide>
                    {/*Testimonial Four Single Start*/}
                    <div className="item">
                        <div className="testimonial-four__single">
                            <div className="testimonial-four__quote">
                                <span className="icon-left1" />
                            </div>
                            <p className="testimonial-four__text">
                                Lorem ipsum is to create a natura consectetur in a looking
                                block of text that doesn'tdistract from the layout aying out
                                pages with meaningle aute are in reprehenderit nulla pariatur.
                            </p>
                            <div className="testimonial-four__client-box">
                                <div className="testimonial-four__client-img">
                                    <img
                                        src="assets/images/testimonial/testimonial-1-1.jpg"
                                        
                                    />
                                </div>
                                <div className="testimonial-four__client-info">
                                    <h3 className="testimonial-four__client-name">
                                        Lames Jhon
                                    </h3>
                                    <p className="testimonial-four__client-sub-title">
                                        Web Designer
                                    </p>
                                    <div className="testimonial-four__client-ratting">
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
                    {/*Testimonial Four Single End*/}
                </SwiperSlide>
                <SwiperSlide>
                    {/*Testimonial Four Single Start*/}
                    <div className="item">
                        <div className="testimonial-four__single">
                            <div className="testimonial-four__quote">
                                <span className="icon-left1" />
                            </div>
                            <p className="testimonial-four__text">
                                Lorem ipsum is to create a natura consectetur in a looking
                                block of text that doesn'tdistract from the layout aying out
                                pages with meaningle aute are in reprehenderit nulla pariatur.
                            </p>
                            <div className="testimonial-four__client-box">
                                <div className="testimonial-four__client-img">
                                    <img
                                        src="assets/images/testimonial/testimonial-1-2.jpg"
                                        
                                    />
                                </div>
                                <div className="testimonial-four__client-info">
                                    <h3 className="testimonial-four__client-name">
                                        Jessica Smith
                                    </h3>
                                    <p className="testimonial-four__client-sub-title">
                                        Web Designer
                                    </p>
                                    <div className="testimonial-four__client-ratting">
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
                    {/*Testimonial Four Single End*/}
                </SwiperSlide>

            </Swiper>
        </>
    )
}
