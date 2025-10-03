"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

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
  },
};
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: 1,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} headTitle="About Us" breadcrumbTitle="About Us" wrapperCls="">
        {/*Brand One Start*/}
        {/* <section className="brand-one">
          <div className="brand-one__inner">
            <Swiper
              {...swiperOptions}
              className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
            >
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-1.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-2.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-3.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-4.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-5.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-4.png"  />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-one__single">
                  <div className="brand-one__img">
                    <img src="assets/images/brand/brand-1-5.png"  />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section> */}
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
        {/* <section className="services-four">
          <div
            className="services-four__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/services-four-bg.png)",
            }}
          />
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img
                    src="assets/images/icon/section-title-icon-2.png"
                    
                  />
                </div>
                <p className="section-title__tagline">What We Offering</p>
              </div>
              <h2 className="section-title__title">We Make Bright Agency</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
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
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
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
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
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
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
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
            </div>
          </div>
        </section> */}
        {/*Services Four End*/}

        {/*FAQ One Start*/}
        <section className="faq-one about-page-faq">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="faq-one__left">
                  <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                      <div className="section-title__tagline-icon">
                        <img
                          src="assets/images/icon/section-title-icon.png"
                          
                        />
                      </div>
                      <p className="section-title__tagline">
                        About Insourceful
                      </p>
                    </div>
                    <h2 className="section-title__title">
                      Transforming Business
                      <br /> Through Technology
                    </h2>
                  </div>
                  <p className="faq-one__text">
                    At Insourceful, we're dedicated to helping businesses transform through strategic technology solutions. We specialize in Oracle Cloud Infrastructure (OCI), enterprise software development, and comprehensive business process automation. Our expert team brings decades of experience in delivering scalable, secure, and innovative solutions that drive real business value.
                  </p>
                  <div className="faq-one__img-and-system">
                    <div className="faq-one__img">
                      <img
                        src="assets/images/resources/oracle-rect-logo.webp"
                        
                      />
                    </div>
                    <div className="faq-one__system">
                      <h3 className="faq-one__system-title">
                        Oracle Cloud Expertise
                      </h3>
                      <p className="faq-one__system-text">
                        Certified Oracle partners with deep expertise in cloud migration, optimization, and enterprise applications
                      </p>
                      <div className="faq-one__system-points">
                        <div className="icon">
                          <span className="icon-check" />
                        </div>
                        <div className="text">
                          <p>Trusted Enterprise Solutions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="faq-one__right">
                  <div
                    className="accrodion-grp faq-one-accrodion"
                    data-grp-name="faq-one-accrodion"
                  >
                    <div
                      className={
                        isActive.key == 1 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(1)}
                    >
                      <div className="accrodion-title">
                        <h4>What Makes Insourceful Different?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Our deep Oracle expertise combined with proven enterprise experience sets us apart. We don't just implement technology - we transform businesses through strategic solutions that deliver measurable results and long-term value.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div
                      className={
                        isActive.key == 2 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(2)}
                    >
                      <div className="accrodion-title">
                        <h4>Why Choose Insourceful?</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Certified Oracle partners with 20+ years of enterprise experience. We offer end-to-end solutions from cloud migration to custom application development, backed by 24/7 support and proven success across multiple industries.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div
                      className={
                        isActive.key == 3 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(3)}
                    >
                      <div className="accrodion-title">
                        <h4>Our Oracle Cloud Services</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            We provide comprehensive Oracle Cloud Infrastructure services including migration planning, implementation, optimization, and ongoing management. Our certified team ensures smooth transitions and maximum ROI from your cloud investment.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                    <div
                      className={
                        isActive.key == 4 ? "accrodion active" : "accrodion"
                      }
                      onClick={() => handleToggle(4)}
                    >
                      <div className="accrodion-title">
                        <h4>Enterprise Software Development</h4>
                      </div>
                      <div className="accrodion-content">
                        <div className="inner">
                          <p>
                            Our development team specializes in building scalable enterprise applications using modern technologies. From custom Oracle APEX solutions to full-stack enterprise platforms, we deliver software that grows with your business.
                          </p>
                        </div>
                        {/* /.inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*FAQ One End*/}

        {/*Team One Start*/}
        {/* <section className="team-one">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">Meet Our Team</p>
              </div>
              <h2 className="section-title__title">Meet Our Expart Mambers</h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-1.jpg"  />
                      <div className="team-one__name-box">
                        <h3 className="team-one__name">
                          <Link href="team-details">Jecika Brown</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                      </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-2.jpg"  />
                      <div className="team-one__name-box">
                        <h3 className="team-one__name">
                          <Link href="team-details">Jhon Smith</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                      </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-3.jpg"  />
                      <div className="team-one__name-box">
                        <h3 className="team-one__name">
                          <Link href="team-details">Alisha Martin</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                      </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-4.jpg"  />
                      <div className="team-one__name-box">
                        <h3 className="team-one__name">
                          <Link href="team-details">David Kapor</Link>
                        </h3>
                        <p className="team-one__sub-title">Web Designer</p>
                      </div>
                    </div>
                    <ul className="list-unstyled team-one__social">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*Team One End*/}

        {/*Video One Start*/}
        <section className="video-one">
          <div
            className="video-one__bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/video-one-bg.jpg)",
            }}
          />
          <div
            className="video-one__bg-2"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/video-one-bg-2.jpg)",
            }}
          ></div>
          <div
            className="video-one__bg-3"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/video-one-bg-3.png)",
            }}
          ></div>
          <div
            className="video-one__bg-4"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/video-one-bg-4.png)",
            }}
          ></div>
          <div className="container">
            <div className="video-one__inner">
              <div className="video-one__video-link">
                <a className="video-popup">
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
        {/* <section className="testimonial-four">
          <div className="testimonial-four__wrap">
            <div className="container">
              <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <div className="section-title__tagline-icon">
                    <img
                      src="assets/images/icon/section-title-icon.png"
                      
                    />
                  </div>
                  <p className="section-title__tagline">Our Testimonial</p>
                </div>
                <h2 className="section-title__title">
                  Our Sweet Client Feedback
                </h2>
              </div>
              <div className="testimonial-four__inner">
                <TestimonialSlider />
              </div>
            </div>
          </div>
        </section> */}
        {/*Testimonial Four End*/}

        {/*Blog One Start*/}
        {/* <section className="blog-one">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img src="assets/images/icon/section-title-icon.png"  />
                </div>
                <p className="section-title__tagline">Our Blog</p>
              </div>
              <h2 className="section-title__title">
                Latest Articles &amp; Blogs
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 "
                data-aos="fade-up" data-aos-delay="100"
              >
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
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
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
              <div
                className="col-xl-4 col-lg-4 "
                data-aos="fade-up" data-aos-delay="100"
              >
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
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
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
              <div
                className="col-xl-4 col-lg-4 "
                data-aos="fade-up" data-aos-delay="100"
              >
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
                      Lorem ipsum is simply is text used by copytyping
                      refreshing.
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
            </div>
          </div>
        </section> */}
        {/*Blog One End*/}

        {/*Newsletter One Start*/}
        <section className="newsletter-one">
          <div className="container">
            <div className="newsletter-one__inner">
              <div
                className="newsletter-one__bg float-bob-y"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/newsletter-one-bg.jpg)",
                }}
              />
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
              {/* /.subscribe-one__form */}
              <div className="mc-form__response" />
              {/* /.mc-form__response */}
            </div>
          </div>
        </section>
        {/*Newsletter One End*/}
      </Layout>
    </>
  );
}
