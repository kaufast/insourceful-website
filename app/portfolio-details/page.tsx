'use client'
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Portfolio Details">
      
        {/*Portfolio Details Start */}
        <section className="portfolio-details">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="portfolio-details__left">
                    <div className="portfolio-details__content-box-one">
                    <div className="portfolio-details__content-one-img">
                        <img
                        src="assets/images/project/portfolio-details-content-one-img-1.jpg"
                        
                        />
                    </div>
                    <div className="portfolio-details__content-one">
                        <h3 className="portfolio-details__content-one-title">
                        Financial
                        </h3>
                        <p className="portfolio-details__content-one-text-1">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollanim id est laborum. Sed ut
                        perspiciatis unde omnis iste natus error voluptatem
                        accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <p className="portfolio-details__content-one-text-2">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit
                        </p>
                    </div>
                    </div>
                    <div className="portfolio-details__planing">
                    <div className="row">
                        <div className="col-xl-5">
                        <div className="portfolio-details__planing-left">
                            <div className="portfolio-details__planing-img">
                            <img
                                src="assets/images/project/portfolio-details-planing-img-1.jpg"
                                
                            />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-7">
                        <div className="portfolio-details__planing-right">
                            <h3 className="portfolio-details__planing-title">
                            Financial Planning
                            </h3>
                            <p className="portfolio-details__planing-text">
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <ul className="list-unstyled portfolio-details__planing-points">
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p>Duis aute irure dolor in reprehenderit in vo</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p> voluptate velit esse cillum dolore eu fugiat</p>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                <span className="icon-check" />
                                </div>
                                <div className="text">
                                <p>Kuis nostr exercitation ullamco laboris conse</p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <p className="portfolio-details__text-1">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut consequun magni dolores eos qui ratione volsnesciunt.Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore
                    </p>
                </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                <div className="portfolio-details__sidebar">
                    <div className="portfolio-details__info">
                    <h3 className="portfolio-details__info-title">Project Details</h3>
                    <ul className="portfolio-details__info-list list-unstyled">
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Clients :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Jhon Albert</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Project :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Financial</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Service :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Corporate</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Category :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Marketing</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Date :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>09 Nov 2023</span>
                        </div>
                        </li>
                        <li>
                        <div className="portfolio-details__info-left">
                            <p>Share :</p>
                        </div>
                        <div className="portfolio-details__info-right">
                            <span>Fb Tw In Be</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                    <div className="portfolio-details__sidebar-img">
                    <img
                        src="assets/images/project/portfolio-details-sidebar-img.jpg"
                        
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Portfolio Details End */}
        {/*Gallery One Start */}
        <section className="gallery-one">
            <div className="container">
            <Swiper {...swiperOptions}
                className="gallery-one__carousel thm-owl__carousel owl-theme owl-carousel"
            >
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-one-1-1.jpg"  />
                    <div className="gallery-one__title-box">
                        <h4>Platform Integration</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-one-1-2.jpg"  />
                    <div className="gallery-one__title-box">
                        <h4>Platform Integration</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
                <SwiperSlide>
                {/*Gallery One Single Start */}
                <div className="item">
                <div className="gallery-one__single">
                    <div className="gallery-one__img">
                    <img src="assets/images/gallery/gallery-one-1-3.jpg"  />
                    <div className="gallery-one__title-box">
                        <h4>Platform Integration</h4>
                    </div>
                    </div>
                </div>
                </div>
                {/*Gallery One Single End */}
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
        {/*Gallery One End */}
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