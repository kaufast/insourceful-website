
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

interface Header2Props {
    scroll: boolean;
    handlePopup: () => void;
    handleMobileMenu: () => void;
}

export default function Header2({ scroll, handlePopup, handleMobileMenu }: Header2Props) {
    return (
        <>

        <>
        <header className="main-header-two">
            <div className="main-header__top">
            <div className="main-header__top-inner">
                <ul className="list-unstyled main-header__contact-list">
                <li>
                    <div className="icon">
                    <i className="fas fa-map-marker" />
                    </div>
                    <div className="text">
                    <p>6558 Tuscany Ridge Dr, El Paso TX, USA</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                    <i className="fas fa-envelope" />
                    </div>
                    <div className="text">
                    <p>
                        <Link href="mailto:info@insourceful.ai">info@insourceful.ai</Link>
                    </p>
                    </div>
                </li>
                </ul>
                <div className="main-header__top-text-and-social">
                <div className="list-unstyled main-header__top-text">
                    <p>
                    <span>Now Hiring:</span> Are you a driven and motivated 1st Line
                    IT Support Engineer?
                    </p>
                </div>
                <div className="main-header__top-social">
                    <Link href="#">
                    <i className="fab fa-twitter" />
                    </Link>
                    <Link href="#">
                    <i className="fab fa-facebook" />
                    </Link>
                    <Link href="#">
                    <i className="fab fa-pinterest-p" />
                    </Link>
                    <Link href="#">
                    <i className="fab fa-instagram" />
                    </Link>
                </div>
                </div>
            </div>
            </div>
            <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
                <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                    <Link href="/">
                        <img src="assets/images/resources/insourceful-consulting-white.webp" alt="InSourceful Logo" style={{height: '400px', width: 'auto'}}/>
                    </Link>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                    <Link onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                        <i className="fa fa-bars" />
                    </Link>
                    <Menu/>
                    </div>
                    <div className="main-menu-two__search-cart-box">
                    <div className="main-menu-two__search-box">
                        <Link onClick={handlePopup}
                        href="#"
                        className="main-menu-two__search search-toggler icon-search"
                        />
                    </div>
                    <div className="main-menu-two__cart-box">
                        <Link
                        href="tel:+17208788654"
                        className="main-menu-two__cart fas fa-phone"
                        />
                    </div>
                    </div>
                </div>
                <div className="main-menu-two__right">
                    <div className="main-menu__btn-box">
                    <Link href="contact" className="main-menu__btn">
                        Schedule Consultation <i className="fas fa-plus" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
        </header>
        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-two">
            <div className="main-menu-two__wrapper">
                <div className="main-menu-two__wrapper-inner">
                <div className="main-menu-two__left">
                    <div className="main-menu-two__logo">
                    <Link href="/">
                        <img src="assets/images/resources/insourceful-consulting-white.webp" alt="InSourceful Logo" style={{height: '400px', width: 'auto'}}  />
                    </Link>
                    </div>
                    <div className="main-menu-two__main-menu-box">
                    <Link onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                        <i className="fa fa-bars" />
                    </Link>
                    <Menu/>
                    </div>
                    <div className="main-menu-two__search-cart-box">
                    <div className="main-menu-two__search-box">
                        <Link onClick={handlePopup}
                        href="#"
                        className="main-menu-two__search search-toggler icon-search"
                        />
                    </div>
                    <div className="main-menu-two__cart-box">
                        <Link
                        href="tel:+17208788654"
                        className="main-menu-two__cart fas fa-phone"
                        />
                    </div>
                    </div>
                </div>
                <div className="main-menu-two__right">
                    <div className="main-menu__btn-box">
                    <Link href="contact" className="main-menu__btn">
                        Schedule Consultation <i className="fas fa-plus" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            </div>
        </div>
        {/* /.stricky-header */}
        </>


        <MobileMenu handleMobileMenu={handleMobileMenu} />
        

        </>
    )
}
