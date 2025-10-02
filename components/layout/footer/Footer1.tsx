import Link from "next/link"
export default function Footer1() {
    return (
        <>
           
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div className="site-footer__bg-2" />
            <div
            className="site-footer__bg-3 float-bob-y"
            style={{
                backgroundImage: "url(assets/images/backgrounds/site-footer-bg-3.png)"
            }}
            />
            <div
            className="site-footer__bg"
            style={{
                backgroundImage: "url(assets/images/backgrounds/site-footer-bg.jpg)"
            }}
            ></div>
            <div className="site-footer__top">
            <div className="container">
                <div className="row">
                <div
                    className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                >
                    <div className="footer-widget__column footer-widget__about">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">About</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Causes</Link>
                        </li>
                        <li>
                        <Link href="about">About Us</Link>
                        </li>
                        <li>
                        <Link href="about">New Campaign</Link>
                        </li>
                        <li>
                        <Link href="about">Site Map</Link>
                        </li>
                        <li>
                        <Link href="about">New Events</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                >
                    <div className="footer-widget__column footer-widget__explore">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Explore</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Press Release</Link>
                        </li>
                        <li>
                        <Link href="contact">Contact</Link>
                        </li>
                        <li>
                        <Link href="blog">Blog Posts</Link>
                        </li>
                        <li>
                        <Link href="about">Social Connect</Link>
                        </li>
                        <li>
                        <Link href="about">Help Topics</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-2 col-lg-2 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                >
                    <div className="footer-widget__column footer-widget__links">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Links</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Company</Link>
                        </li>
                        <li>
                        <Link href="blog">Latest News</Link>
                        </li>
                        <li>
                        <Link href="services">Popular Services</Link>
                        </li>
                        <li>
                        <Link href="about">Financial</Link>
                        </li>
                        <li>
                        <Link href="about">Consulting</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                >
                    <div className="footer-widget__column footer-widget__blog">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Blog</h3>
                    </div>
                    <ul className="footer-widget__list list-unstyled">
                        <li>
                        <Link href="about">Financial Planning</Link>
                        </li>
                        <li>
                        <Link href="about">Care for All People</Link>
                        </li>
                        <li>
                        <Link href="about">Build Business</Link>
                        </li>
                        <li>
                        <Link href="about">Being Volunteer</Link>
                        </li>
                        <li>
                        <Link href="about">Raise fund to help</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="500ms"
                >
                    <div className="footer-widget__column footer-widget__contact">
                    <div className="footer-widget__title-box">
                        <h3 className="footer-widget__title">Contact</h3>
                    </div>
                    <ul className="footer-widget__contact-list list-unstyled">
                        <li>
                        <p>6558 Tuscany Ridge Dr<br />El Paso Texas</p>
                        </li>
                        <li>
                        <Link href="mailto:info@insourceful.ai">info@insourceful.ai</Link>
                        </li>
                        <li>
                        <Link href="tel:+17208788654">+1 (720) 878-8654</Link>
                        </li>
                    </ul>
                    <div className="footer-widget__social">
                        <Link href="#">
                        <span className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                        <span className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                        <span className="fab fa-linkedin-in" />
                        </Link>
                        <Link href="#">
                        <span className="fab fa-youtube" />
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="site-footer__bottom">
            <div className="container">
                <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                    Copyright © 2025 All Rights Reserved.
                </p>
                <ul className="list-unstyled site-footer__bottom-links">
                    <li>
                    <Link href="about">Terms &amp; Condition</Link>
                    </li>
                    <li>
                    <Link href="about">Privacy</Link>
                    </li>
                    <li>
                    <Link href="about">Support</Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </footer>
        {/*Site Footer End*/}
        
        </>
    )
}
