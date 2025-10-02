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



}
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
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-1.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-2.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-3.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-4.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-5.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-4.png"  />
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                {/*Brand One Single*/}
                <div className="brand-one__single">
                <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-5.png"  />
                </div>
                </div>
                </SwiperSlide>
            </Swiper>
            {/* If we need navigation buttons */}
            </div>
        </section>
        {/*Brand One End*/}

        {/*Feature One Start*/}
        <section className="feature-one">
            <div className="container">
            <div className="row">
                {/*Feature One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="feature-one__single">
                    <div className="feature-one__icon">
                    <span className="icon-project-management" />
                    </div>
                    <div className="feature-one__content">
                    <h3 className="feature-one__title">
                        <Link href="services-details">Manage It Services</Link>
                    </h3>
                    <p className="feature-one__text">
                        Complete account of system, and expound the actual
                    </p>
                    </div>
                </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="feature-one__single">
                    <div className="feature-one__icon">
                    <span className="icon-supply-chain" />
                    </div>
                    <div className="feature-one__content">
                    <h3 className="feature-one__title">
                        <Link href="services-details">Digital Experience</Link>
                    </h3>
                    <p className="feature-one__text">
                        Complete account of system, and expound the actual
                    </p>
                    </div>
                </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="feature-one__single">
                    <div className="feature-one__icon">
                    <span className="icon-cyber-security" />
                    </div>
                    <div className="feature-one__content">
                    <h3 className="feature-one__title">
                        <Link href="services-details">Cyber Security</Link>
                    </h3>
                    <p className="feature-one__text">
                        Complete account of system, and expound the actual
                    </p>
                    </div>
                </div>
                </div>
                {/*Feature One Single End*/}
                {/*Feature One Single Start*/}
                <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="feature-one__single">
                    <div className="feature-one__icon">
                    <span className="icon-content-management-1" />
                    </div>
                    <div className="feature-one__content">
                    <h3 className="feature-one__title">
                        <Link href="services-details">Deployment Service</Link>
                    </h3>
                    <p className="feature-one__text">
                        Complete account of system, and expound the actual
                    </p>
                    </div>
                </div>
                </div>
                {/*Feature One Single End*/}
            </div>
            </div>
        </section>
        {/*Feature One End*/}

        {/*Services Four Start*/}
        <section className="services-four services-five">
            <div
            className="services-four__bg"
            style={{
                backgroundImage: "url(assets/images/backgrounds/services-four-bg.png)"
            }}
            />
            <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                    <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">What We Offering</p>
                </div>
                <h2 className="section-title__title">We Make Bright Agency</h2>
            </div>
            <div className="row">
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-web-page" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="services-details">
                        Speed <br /> Optimization
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
                    </p>
                    <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-money" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="services-details">
                        Digital <br /> Marketing
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
                    </p>
                    <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-content-management-1" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="services-details">
                        Content <br /> Management
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
                    </p>
                    <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
                {/*Services Four Single Start*/}
                <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
                >
                <div className="services-four__single">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-four__icon">
                    <span className="icon-project-management" />
                    </div>
                    <h3 className="services-four__title">
                    <Link href="services-details">
                        Content <br /> Marketing
                    </Link>
                    </h3>
                    <p className="services-four__text">
                    Lorem ipsum is are many variations of pass of majority.
                    </p>
                    <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                    </Link>
                </div>
                </div>
                {/*Services Four Single End*/}
            </div>
            </div>
        </section>
        {/*Services Four End*/}

        {/*Process One Start*/}
        <section className="process-one">
            <div className="process-one__inner">
            <div className="process-one__shape-1 float-bob-y-2">
                <img src="assets/images/shapes/process-one-shape-1.png"  />
            </div>
            <div className="container">
                <ul className="process-one__process-list list-unstyled">
                <li className="wow fadeInUp" data-wow-delay="100ms">
                    <div className="process-one__single">
                    <div className="process-one__icon">
                        <span className="icon-zoom-in" />
                    </div>
                    <p className="process-one__text">Research</p>
                    <div className="process-one__count" />
                    </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="200ms">
                    <div className="process-one__single">
                    <div className="process-one__icon">
                        <span className="icon-test" />
                    </div>
                    <p className="process-one__text">Concept</p>
                    <div className="process-one__count" />
                    </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="300ms">
                    <div className="process-one__single">
                    <div className="process-one__icon">
                        <span className="icon-self-development" />
                    </div>
                    <p className="process-one__text">Develop</p>
                    <div className="process-one__count" />
                    </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="400ms">
                    <div className="process-one__single">
                    <div className="process-one__icon">
                        <span className="icon-growth" />
                    </div>
                    <p className="process-one__text">Test</p>
                    <div className="process-one__count" />
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section>
        {/*Process One End*/}

        {/*Services One Start*/}
        <section className="services-one">
            <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                    <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">What We Offering</p>
                </div>
                <h2 className="section-title__title">We Make Bright Agency</h2>
            </div>
            <div className="services-one__inner">
                <ul className="services-one__services-list list-unstyled">
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-coding" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Product
                        <br /> Development
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-cloud-database" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Cloud
                        <br /> Computing
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-ux-design" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        UI/UX
                        <br /> Designing
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-cyber-security" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Cyber
                        <br /> Security
                        </Link>
                    </h3>
                    </div>
                </li>
                </ul>
                <ul className="services-one__services-list list-unstyled">
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-event-management" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Event
                        <br /> Processing
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-content-management-1" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Content
                        <br /> Management
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-cyber-security" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Cyber
                        <br /> Security
                        </Link>
                    </h3>
                    </div>
                </li>
                <li>
                    <div className="services-one__single">
                    <div className="services-one__icon">
                        <span className="icon-backup" />
                    </div>
                    <h3 className="services-one__title">
                        <Link href="services-details">
                        Backup
                        <br /> &amp; Recovery
                        </Link>
                    </h3>
                    </div>
                </li>
                </ul>
            </div>
            </div>
        </section>
        {/*Services One End*/}

        {/*Pricing One Start*/}
        <section className="pricing-one">
            <div
            className="pricing-one__bg"
            style={{
                backgroundImage: "url(assets/images/backgrounds/pricing-one-bg.jpg)"
            }}
            ></div>
            <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                    <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">Our Pricing</p>
                </div>
                <h2 className="section-title__title">Select Your Choice Plan</h2>
            </div>
            <div className="row">
                {/*Pricing One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                    <div className="pricing-one__shape-1">
                        <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        
                        />
                    </div>
                    <div className="pricing-one__shape-2">
                        <img
                        src="assets/images/shapes/pricing-one-shape-2.png"
                        
                        />
                    </div>
                    <div className="pricing-one__price-box">
                        <h3 className="pricing-one__title">Enterprise</h3>
                        <p className="pricing-one__price">
                        <span>$</span>35.00
                        </p>
                        <span className="pricing-one__sub-title">Per Month</span>
                    </div>
                    <ul className="pricing-one__points list-unstyled">
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>Financial Solutions</p>
                        </div>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>12 Hours Support</p>
                        </div>
                        </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                        <Link href="contact" className="pricing-one__btn">
                        Get Started Now
                        <span className="icon-back" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Pricing One Single End*/}
                {/*Pricing One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                    <div className="pricing-one__shape-1">
                        <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        
                        />
                    </div>
                    <div className="pricing-one__shape-2">
                        <img
                        src="assets/images/shapes/pricing-one-shape-2.png"
                        
                        />
                    </div>
                    <div className="pricing-one__price-box">
                        <h3 className="pricing-one__title">Regular</h3>
                        <p className="pricing-one__price">
                        <span>$</span>55.00
                        </p>
                        <span className="pricing-one__sub-title">Per Month</span>
                    </div>
                    <ul className="pricing-one__points list-unstyled">
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>Financial Solutions</p>
                        </div>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>12 Hours Support</p>
                        </div>
                        </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                        <Link href="contact" className="pricing-one__btn">
                        Get Started Now
                        <span className="icon-back" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Pricing One Single End*/}
                {/*Pricing One Single Start*/}
                <div className="col-xl-4 col-lg-4">
                <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                    <div className="pricing-one__shape-1">
                        <img
                        src="assets/images/shapes/pricing-one-shape-1.png"
                        
                        />
                    </div>
                    <div className="pricing-one__shape-2">
                        <img
                        src="assets/images/shapes/pricing-one-shape-2.png"
                        
                        />
                    </div>
                    <div className="pricing-one__price-box">
                        <h3 className="pricing-one__title">Professional</h3>
                        <p className="pricing-one__price">
                        <span>$</span>85.00
                        </p>
                        <span className="pricing-one__sub-title">Per Month</span>
                    </div>
                    <ul className="pricing-one__points list-unstyled">
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>Financial Solutions</p>
                        </div>
                        </li>
                        <li>
                        <div className="icon">
                            <span className="icon-check" />
                        </div>
                        <div className="text">
                            <p>12 Hours Support</p>
                        </div>
                        </li>
                    </ul>
                    <div className="pricing-one__btn-box">
                        <Link href="contact" className="pricing-one__btn">
                        Get Started Now
                        <span className="icon-back" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Pricing One Single End*/}
            </div>
            </div>
        </section>
        {/*Pricing One End*/}

        {/*Video One Start*/}
        <section className="video-one">
            <div
            className="video-one__bg"
            style={{
                backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)"
            }}
            />
            <div
            className="video-one__bg-2"
            style={{
                backgroundImage: "url(assets/images/backgrounds/video-one-bg-2.jpg)"
            }}
            ></div>
            <div
            className="video-one__bg-3"
            style={{
                backgroundImage: "url(assets/images/backgrounds/video-one-bg-3.png)"
            }}
            ></div>
            <div
            className="video-one__bg-4"
            style={{
                backgroundImage: "url(assets/images/backgrounds/video-one-bg-4.png)"
            }}
            ></div>
            <div className="container">
            <div className="video-one__inner">
                <div className="video-one__video-link">
                <a
                    className="video-popup"
                >
                    <div className="video-one__video-icon">
                    <span className="fa fa-play" />
                    <i className="ripple" />
                    </div>
                </a>
                </div>
                <h3 className="video-one__title">
                Watch This Video Presentation
                <br /> Our Work And Etc
                </h3>
            </div>
            </div>
        </section>
        {/*Video One End*/}

        {/*Testimonial Four Start*/}
        <section className="testimonial-four">
            <div className="testimonial-four__wrap">
            <div className="container">
                <div className="section-title text-center">
                <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                    <img src="assets/images/icon/section-title-icon.png"  />
                    </div>
                    <p className="section-title__tagline">Our Testimonial</p>
                </div>
                <h2 className="section-title__title">Our Sweet Client Feedback</h2>
                </div>
                <div className="testimonial-four__inner">
                <TestimonialSlider/>
                </div>
            </div>
            </div>
        </section>
        {/*Testimonial Four End*/}

        {/*Blog One Start*/}
        <section className="blog-one">
            <div className="container">
            <div className="section-title text-center">
                <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                    <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">Our Blog</p>
                </div>
                <h2 className="section-title__title">Latest Articles &amp; Blogs</h2>
            </div>
            <div className="row">
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                <div className="blog-one__single">
                    <div className="blog-one__img-box">
                    <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-1.jpg"  />
                    </div>
                    <div className="blog-one__date">
                        <p>
                        20
                        <br /> May
                        </p>
                    </div>
                    </div>
                    <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                        <li>
                        <p>
                            <span className="fa fa-user" />
                            Admin
                        </p>
                        </li>
                        <li>
                        <p>
                            <span className="fa fa-comments" />
                            02 Comment
                        </p>
                        </li>
                    </ul>
                    <h3 className="blog-one__title">
                        <Link href="blog-details">
                        Easy Yo Use our Software New Innovation
                        </Link>
                    </h3>
                    <p className="blog-one__text">
                        Lorem ipsum is simply is text used by copytyping refreshing.
                    </p>
                    <div className="blog-one__btn">
                        <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                <div className="blog-one__single">
                    <div className="blog-one__img-box">
                    <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-2.jpg"  />
                    </div>
                    <div className="blog-one__date">
                        <p>
                        20
                        <br /> May
                        </p>
                    </div>
                    </div>
                    <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                        <li>
                        <p>
                            <span className="fa fa-user" />
                            Admin
                        </p>
                        </li>
                        <li>
                        <p>
                            <span className="fa fa-comments" />
                            02 Comment
                        </p>
                        </li>
                    </ul>
                    <h3 className="blog-one__title">
                        <Link href="blog-details">
                        Ipsum is simply is text used by copytyping
                        </Link>
                    </h3>
                    <p className="blog-one__text">
                        Lorem ipsum is simply is text used by copytyping refreshing.
                    </p>
                    <div className="blog-one__btn">
                        <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Blog One Single End*/}
                {/*Blog One Single Start*/}
                <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                <div className="blog-one__single">
                    <div className="blog-one__img-box">
                    <div className="blog-one__img">
                        <img src="assets/images/blog/blog-1-3.jpg"  />
                    </div>
                    <div className="blog-one__date">
                        <p>
                        20
                        <br /> May
                        </p>
                    </div>
                    </div>
                    <div className="blog-one__content">
                    <ul className="blog-one__meta list-unstyled">
                        <li>
                        <p>
                            <span className="fa fa-user" />
                            Admin
                        </p>
                        </li>
                        <li>
                        <p>
                            <span className="fa fa-comments" />
                            02 Comment
                        </p>
                        </li>
                    </ul>
                    <h3 className="blog-one__title">
                        <Link href="blog-details">
                        Simply is text used by copytyping refreshing.
                        </Link>
                    </h3>
                    <p className="blog-one__text">
                        Lorem ipsum is simply is text used by copytyping refreshing.
                    </p>
                    <div className="blog-one__btn">
                        <Link href="blog-details">
                        Read more
                        <span className="icon-right-arrow1" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
                {/*Blog One Single End*/}
            </div>
            </div>
        </section>
        {/*Blog One End*/}

        {/*Newsletter One Start*/}
        <section className="newsletter-one">
            <div className="container">
            <div className="newsletter-one__inner">
                <div
                className="newsletter-one__bg float-bob-y"
                style={{
                    backgroundImage:
                    "url(assets/images/backgrounds/newsletter-one-bg.jpg)"
                }}
                />
                <h3 className="newsletter-one__title">Newsletter</h3>
                <p className="newsletter-one__sub-title">Stay updated</p>
                <div className="newsletter-one__form mc-form" data-url="MC_FORM_URL">
                <input type="email" name="EMAIL" placeholder="Email address" />
                <button type="submit" className="newsletter-one__btn">
                    <span>
                    Subscribe
                    <i className="icon-arrow" />
                    </span>
                </button>
                </div>
                {/* /.subscribe-one__form */}
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
            </div>
            </div>
        </section>
        {/*Newsletter One End*/}

        </Layout>
        </>
    )
}