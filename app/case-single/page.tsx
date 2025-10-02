import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
   
    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Case Single" breadcrumbTitle="Case Single" wrapperCls="">
        
        {/*Case Single Start*/}
        <section className="case-single">
            <div className="container">
            <div className="case-single__img">
                <img src="assets/images/resources/case-single-img-1.jpg"  />
            </div>
            <div className="case-single__details">
                <div className="case-single__details-inner">
                <div className="case-single__shape-1">
                    <img src="assets/images/shapes/case-single-shape-1.png"  />
                </div>
                <div className="case-single__shape-2">
                    <img src="assets/images/shapes/case-single-shape-2.png"  />
                </div>
                <ul className="list-unstyled case-single__details-list">
                    <li>
                    <div className="case-single__details-content">
                        <p>Clients:</p>
                        <h4>John brown</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__details-content">
                        <p>Category:</p>
                        <h4>Graphic, Illustrations</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__details-content">
                        <p>Date:</p>
                        <h4>20 Nov, 2023</h4>
                    </div>
                    </li>
                    <li>
                    <div className="case-single__social">
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
                    </li>
                </ul>
                </div>
            </div>
            <div className="case-single__content">
                <h3 className="case-single__content-title">Business Analysis</h3>
                <p className="case-single__content-text-1">
                Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet
                ultrices dolores sit ipsum velit purus aliquet massa fringilla leo
                orci. Sapien nunc amet ultrices, dolores sit ipsum velit massa
                fringilla leo orci dolors sit amet elit amet.
                </p>
                <p className="case-single__content-text-2">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by
                accident, humour and the like.
                </p>
            </div>
            <div className="case-details__pagination-box">
                <ul className="case-details__pagination list-unstyled clearfix">
                <li className="next">
                    <Link href="#" aria-label="Previous">
                    <i className="icon-right-arrow" />
                    Previous
                    </Link>
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="count">
                    <Link href="#" />
                </li>
                <li className="previous">
                    <Link href="#" aria-label="Next">
                    Next
                    <i className="icon-right-arrow1" />
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </section>
        {/*Case Single End*/}
        
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