'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
          status: false,
          key: 1,
      })
  
      const handleToggle = (key: number) => {
          if (isActive.key === key) {
              setIsActive({
                  status: false,
                  key: 0,
              })
          } else {
              setIsActive({
                  status: true,
                  key,
              })
          }
      }
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Service Details" breadcrumbTitle="Service Details" wrapperCls="">

        {/*Services Details Start*/}
        <section className="services-details">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="services-details__left">
                    <div className="services-details__img">
                    <img
                        src="assets/images/services/services-details-img-1.jpg"
                        
                    />
                    </div>
                    <h3 className="services-details__title">Web Development</h3>
                    <p className="services-details__text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollanim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa
                    </p>
                    <p className="services-details__text-2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit
                    </p>
                    <ul className="services-details__points list-unstyled">
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Nostrud exercitation ullamco laboris consequat.reprehenderit
                            in voluptate
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia
                        </p>
                        </div>
                    </li>
                    </ul>
                    <p className="services-details__text-3">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut consequun magni dolores eos qui ratione volsnesciunt.Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore
                    </p>
                    <ul className="services-details__points-2 list-unstyled">
                    <li>
                        <div className="services-details__points-two-shape" />
                        <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt
                        </p>
                    </li>
                    <li>
                        <div className="services-details__points-two-shape" />
                        <p>
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium
                        </p>
                    </li>
                    <li>
                        <div className="services-details__points-two-shape" />
                        <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, consectetur,
                        </p>
                    </li>
                    </ul>
                    <div className="services-details__img-2">
                    <img
                        src="assets/images/services/services-details-img-2.jpg"
                        
                    />
                    </div>
                    <p className="services-details__text-4">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollanim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    </p>
                    <p className="services-details__text-5">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa quisit ,officia deserunt
                    mollit anim id est laborum. Sed ut perspiciatis unde omnis is amet
                    natus error sit voluptatem accusantium doloremque laudantium,
                    totam reaperia eaque ipsa quae ab ilnventore veritatis et quasi
                    architecto beatae vitae dicta sunt
                    </p>
                    <div className="services-details__img-and-points-box">
                    <div className="services-details__points-img">
                        <img
                        src="assets/images/services/services-details-img-3.jpg"
                        
                        />
                    </div>
                    <div className="services-details__points-box">
                        <p className="services-details__points-text">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <ul className="services-details__points-3 list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-check" />
                            </div>
                            <div className="text">
                            <p>Duis aute irure dolor in reprehenderit in</p>
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
                            <p>Kuis nostr exercitation ullamco laboris</p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <p className="services-details__text-6">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollanim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    </p>
                    <div className="services-details__faq">
                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion">
                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                        <div className="accrodion-title">
                            <h4>Few Resons Why You Should Choose Us</h4>
                        </div>
                        <div className="accrodion-content">
                            <div className="inner">
                            <p>
                                Excepteur sint occaecat cupidatat non proide sunt in
                                culpa qui off deserunt mollit anim id est laborum. omnis
                                iste natus error sit voluptate audantium, totam rem
                                aperiam,
                            </p>
                            </div>
                            {/* /.inner */}
                        </div>
                        </div>
                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                        <div className="accrodion-title">
                            <h4>Few Resons Why You Should Choose Us</h4>
                        </div>
                        <div className="accrodion-content">
                            <div className="inner">
                            <p>
                                Excepteur sint occaecat cupidatat non proide sunt in
                                culpa qui off deserunt mollit anim id est laborum. omnis
                                iste natus error sit voluptate audantium, totam rem
                                aperiam,
                            </p>
                            </div>
                            {/* /.inner */}
                        </div>
                        </div>
                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                        <div className="accrodion-title">
                            <h4>How To Update Application New Features</h4>
                        </div>
                        <div className="accrodion-content">
                            <div className="inner">
                            <p>
                                Excepteur sint occaecat cupidatat non proide sunt in
                                culpa qui off deserunt mollit anim id est laborum. omnis
                                iste natus error sit voluptate audantium, totam rem
                                aperiam,
                            </p>
                            </div>
                            {/* /.inner */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                <div className="services-details__right">
                    <div className="sidebar__single sidebar__search">
                    <form action="#" className="sidebar__search-form">
                        <input type="search" placeholder="Search..." />
                        <button type="submit">
                        <i className="icon-search" />
                        </button>
                    </form>
                    </div>
                    <div className="sidebar__single sidebar__category">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Category</h3>
                    </div>
                    <ul className="sidebar__category-list list-unstyled">
                        <li>
                        <Link href="blog-details">
                            New Technologies<span>(12)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="blog-details">
                            Parallax Effect<span>(15)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="blog-details">
                            Digital Marketing<span>(08)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="blog-details">
                            Content Writting<span>(20)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="blog-details">
                            One Page Template<span>(14)</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="blog-details">
                            Relationship Buildup<span>(05)</span>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="services-details__download">
                    <ul className="services-details__download-list list-unstyled">
                        <li>
                        <Link href="#">
                            Download Doc
                            <span className="icon-download-1" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            Download Pdf
                            <span className="icon-pdf" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="sidebar__single sidebar__tag">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Tags Cloud</h3>
                    </div>
                    <div className="sidebar__tag-list">
                        <Link href="blog-details">Carpet</Link>
                        <Link href="blog-details">Office</Link>
                        <Link href="blog-details">Agent</Link>
                        <Link href="blog-details">Business</Link>
                        <Link href="blog-details">Love</Link>
                        <Link href="blog-details">Room</Link>
                        <Link href="blog-details">Project</Link>
                        <Link href="blog-details">Corporate</Link>
                    </div>
                    </div>
                    <div className="services-details__banner">
                    <div
                        className="services-details__banner-bg"
                        style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/services-details-banner-bg.jpg)"
                        }}
                    ></div>
                    <h3 className="services-details__banner-title">
                        Have Any
                        <br /> Query?
                    </h3>
                    <p className="services-details__banner-text">
                        Great fruit grass their are first over spirit good whose very
                        subdue
                    </p>
                    <div className="services-details__banner-btn">
                        <Link href="#">Send Message</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Services Details End*/}
        
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