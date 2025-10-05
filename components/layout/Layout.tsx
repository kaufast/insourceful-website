
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import GoogleTagManager from '../analytics/GoogleTagManager'
import CookieConsent from '../elements/CookieConsent'
import { initAOS } from '@/lib/aos'

interface LayoutProps {
    headerStyle?: number;
    footerStyle?: number;
    headTitle?: string;
    breadcrumbTitle?: string;
    children: React.ReactNode;
    wrapperCls?: string;
}

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
        const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);

        if (!isMobileMenu) {
            document.body.classList.add("locked");
            document.querySelector(".mobile-nav__wrapper")?.classList.add("expanded");
        } else {
            document.body.classList.remove("locked");
            document.querySelector(".mobile-nav__wrapper")?.classList.remove("expanded");
        }
    };

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        // Initialize AOS (Animate On Scroll) animations
        // Temporarily disabled to fix originalFactory.call error
        // initAOS()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }
        
        window.addEventListener("scroll", handleScroll)
        
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [scroll])
    return (
        <>
            {/* Google Tag Manager */}
            {process.env.NEXT_PUBLIC_GTM_ID && (
              <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
            )}
            
            
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {!headerStyle && <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} handlePopup={handlePopup} handleMobileMenu={handleMobileMenu} /> : null}
                {headerStyle == 3 ? <Header3 scroll={scroll} handlePopup={handlePopup} handleMobileMenu={handleMobileMenu} /> : null}


                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}
                {footerStyle == 3 ? < Footer3 /> : null}
            </div>
            <BackToTop scroll={scroll} />
            <CookieConsent />
        </>
    )
}
