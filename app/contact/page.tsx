
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Contact" breadcrumbTitle="Contact" wrapperCls="">
     
            {/*Google Map Start*/}
            <section className="google-map-one">
                <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.2!2d-106.4291!3d31.7587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6558+Tuscany+Ridge+Dr%2C+El+Paso%2C+TX+79912%2C+USA!5e0!3m2!1sen!2sus!4v1697000000000!5m2!1sen!2sus"
                    className="google-map__one"
                    allowFullScreen
                />
                </div>
            </section>
            {/*Google Map End*/}

            {/*Contact Page Start*/}
            <section className="contact-page">
                <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                    <div className="contact-page__left">
                        <h3 className="contact-page__title">Get In Touch</h3>
                        <ul className="contact-page__points list-unstyled">
                        <li>
                            <div className="icon">
                            <span className="icon-location" />
                            </div>
                            <div className="content">
                            <h3>Address</h3>
                            <p>
                                6558 Tuscany Ridge Dr
                                <br /> El Paso TX, USA
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <span className="icon-telephone" />
                            </div>
                            <div className="content">
                            <h3>Phone</h3>
                            <p>
                                <Link href="tel:+17208788654">+1.720.878.8654</Link>
                            </p>
                            <p>
                                <Link href="tel:+34671445275">+34.671.445.275</Link>
                            </p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                            <span className="icon-open-mail" />
                            </div>
                            <div className="content">
                            <h3>Email</h3>
                            <p>
                                <Link href="mailto:info@insourceful.ai">
                                info@insourceful.ai
                                </Link>
                            </p>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                    <div className="contact-page__right">
                        <div className="contact-page__form-box">
                        <form
                            action="assets/inc/sendemail.php"
                            className="contact-page__form contact-form-validated"
                            noValidate
                        >
                            <div className="row">
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Full name" name="name" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Phone" name="phone" />
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-page__input-box">
                                <input type="text" placeholder="Subject" name="Subject" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-xl-12">
                                <div className="contact-page__input-box text-message-box">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                />
                                </div>
                                <div className="contact-page__btn-box">
                                <button type="submit" className="contact-page__btn">
                                    Send Message<span>+</span>
                                </button>
                                </div>
                            </div>
                            </div>
                        </form>
                        <div className="result" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/*Contact Page End*/}
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