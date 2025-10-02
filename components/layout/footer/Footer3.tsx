import Link from "next/link"
export default function Footer3() {
    return (
        <>
  {/*Site Footer Three Start*/}
  <footer className="site-footer-three">
    <div className="container">
      <div className="site-footer-three__top">
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="100ms"
          >
            <div className="footer-widget-three__column footer-widget-three__about">
              <p className="footer-widget-three__about-text">
                
                Ut enim ad minim veniam, quis nostruexercitation ullamco laboris
                nisi ut aliquip ex ea consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </p>
              <form
                className="footer-widget-three__email-box"
                data-url="MC_FORM_URL"
              >
                <div className="footer-widget-three__email-input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                </div>
                <button type="submit" className="footer-widget-three__btn">
                  <i className="icon-back" />
                </button>
              </form>
              <div className="mc-form__response" />
            </div>
          </div>
          <div
            className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="footer-widget-three__column footer-widget-three__explore">
              <div className="footer-widget-three__title-box">
                <h3 className="footer-widget-three__title">Explore</h3>
              </div>
              <ul className="footer-widget-three__list list-unstyled">
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="team">Our Team</Link>
                </li>
                <li>
                  <Link href="services">Services</Link>
                </li>
                <li>
                  <Link href="portfolio">Gallery</Link>
                </li>
                <li>
                  <Link href="blog">News &amp; Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="footer-widget-three__column footer-widget-three__company">
              <div className="footer-widget-three__title-box">
                <h3 className="footer-widget-three__title">Company</h3>
              </div>
              <ul className="footer-widget-three__list list-unstyled">
                <li>
                  <Link href="about">About Us</Link>
                </li>
                <li>
                  <Link href="services">Need A Career</Link>
                </li>
                <li>
                  <Link href="portfolio">Working Process</Link>
                </li>
                <li>
                  <Link href="blog">Blog Post</Link>
                </li>
                <li>
                  <Link href="about">Company History</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="footer-widget-three__column footer-widget-three__contact">
              <div className="footer-widget-three__title-box">
                <h3 className="footer-widget-three__title">You’ve question?</h3>
              </div>
              <ul className="footer-widget-three__contact-list list-unstyled">
                <li>
                  <p>Get a Quote</p>
                  <Link href="tel:+12987458741">+12-987458741</Link>
                </li>
                <li>
                  <p>Send Email</p>
                  <Link href="mailto:info@insourceful.com">info@insourceful.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer-three__bottom">
        <div className="site-footer-three__bottom-inner">
          <p className="site-footer-three__bottom-text">
            Copyright © 2025 Rights Reserved.
          </p>
          <ul className="list-unstyled site-footer-three__bottom-links">
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
  {/*Site Footer Three End*/}



        </>
    )
}
