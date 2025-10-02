import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

interface Header3Props {
    scroll: boolean;
    handlePopup: () => void;
    handleMobileMenu: () => void;
}

export default function Header3({ scroll, handlePopup, handleMobileMenu }: Header3Props) {
  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__logo">
                <a href="/">
                  <img src="assets/images/resources/insourceful-consulting-white.avif" alt="InSourceful Logo" style={{height: '400px', width: 'auto'}} />
                </a>
              </div>
              <div className="main-menu-three__top">
                <div className="main-menu-three__top-inner">
                  <p className="main-menu-three__top-text">
                    Wellcome Our Business Company
                  </p>
                  <ul className="list-unstyled main-menu-three__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:info@insourceful.ai">
                            info@insourceful.ai
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>6558 Tuscany Ridge Dr, El Paso TX, USA</p>
                      </div>
                    </li>
                  </ul>
                  <div className="main-menu-three__top-social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__bottom">
                <div className="main-menu-three__main-menu-box">
                  <a onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <Menu />
                </div>
                <div className="main-menu-three__search-cart-btn-box">
                  <div className="main-menu-three__search-box">
                    <a
                      onClick={handlePopup}
                      href="#"
                      className="main-menu-three__search search-toggler icon-search"
                    />
                  </div>
                  <div className="main-menu-three__cart-box">
                    <a
                      href="tel:+17208788654"
                      className="main-menu-three__cart fas fa-phone"
                    />
                  </div>
                  <div className="main-menu-three__btn-box">
                    <a href="contact">
                      Get Free Quote <span className="icon-back" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__top-call">
                <div className="main-menu-three__top-call-box">
                  <div className="main-menu-three__top-call-number-box float-bob-y">
                    <a href="tel:17208788654">+1.720.878.8654</a>
                  </div>
                  <div className="main-menu-three__top-call-box-two">
                    <div className="main-menu-three__top-call-icon">
                      <i className="fas fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu main-menu-three ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
            <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__logo">
                <a href="/">
                  <img src="assets/images/resources/insourceful-consulting-white.avif" alt="InSourceful Logo" style={{height: '400px', width: 'auto'}} />
                </a>
              </div>
              <div className="main-menu-three__top">
                <div className="main-menu-three__top-inner">
                  <p className="main-menu-three__top-text">
                    Wellcome Our Business Company
                  </p>
                  <ul className="list-unstyled main-menu-three__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:info@insourceful.ai">
                            info@insourceful.ai
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>6558 Tuscany Ridge Dr, El Paso TX, USA</p>
                      </div>
                    </li>
                  </ul>
                  <div className="main-menu-three__top-social">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__bottom">
                <div className="main-menu-three__main-menu-box">
                  <a onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <Menu />
                </div>
                <div className="main-menu-three__search-cart-btn-box">
                  <div className="main-menu-three__search-box">
                    <a
                      onClick={handlePopup}
                      href="#"
                      className="main-menu-three__search search-toggler icon-search"
                    />
                  </div>
                  <div className="main-menu-three__cart-box">
                    <a
                      href="tel:+17208788654"
                      className="main-menu-three__cart fas fa-phone"
                    />
                  </div>
                  <div className="main-menu-three__btn-box">
                    <a href="contact">
                      Get Free Quote <span className="icon-back" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__top-call">
                <div className="main-menu-three__top-call-box">
                  <div className="main-menu-three__top-call-number-box float-bob-y">
                    <a href="tel:17208788654">+1.720.878.8654</a>
                  </div>
                  <div className="main-menu-three__top-call-box-two">
                    <div className="main-menu-three__top-call-icon">
                      <i className="fas fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>
        {/* /.sticky-header__content */}
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
