'use client'
import Link from "next/link"
import { useState } from 'react'
import Layout from "@/components/layout/Layout"
import TestimonialSlider from "@/components/slider/TestimonialSlider"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },
    pagination: {
        el: '.swiper-pagination',
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
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1199: {
            slidesPerView: 6,
        },
        1350: {
            slidesPerView: 6,
        },
    }
};

export default function Home() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} headTitle="Our Services" breadcrumbTitle="Our services" wrapperCls="">
                {/*Brand One Start*/}
                <section className="brand-one">
                    <div className="brand-one__inner">
                        <Swiper {...swiperOptions}
                            className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
                        >
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-1.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-2.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-3.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-4.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-5.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-4.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-one__single">
                                    <div className="brand-one__img">
                                        <img src="assets/images/brand/brand-1-5.png" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/*Brand One End*/}

                {/* Pricing and Testimonial sections commented out as requested */}

                {/*Newsletter One Start*/}
                <section className="newsletter-one">
                    <div className="container">
                        <div className="newsletter-one__inner">
                            <div
                                className="newsletter-one__bg float-bob-y"
                                style={{
                                    backgroundImage: "url(assets/images/backgrounds/newsletter-one-bg.jpg)"
                                }}
                            ></div>
                            <h3 className="newsletter-one__title">Newsletter</h3>
                            <p className="newsletter-one__sub-title">Stay updated</p>
                            <div
                                className="newsletter-one__form mc-form"
                                data-url="MC_FORM_URL"
                            >
                                <input type="email" name="EMAIL" placeholder="Email address" />
                                <button type="submit" className="newsletter-one__btn">
                                    <span>
                                        Subscribe
                                        <i className="icon-arrow" />
                                    </span>
                                </button>
                            </div>
                            <div className="mc-form__response"></div>
                        </div>
                    </div>
                </section>
                {/*Newsletter One End*/}
            </Layout>
        </>
    )
}