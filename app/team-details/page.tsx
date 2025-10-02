import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Team Details" breadcrumbTitle="Team Details" wrapperCls="">
      
        {/*Team Details Start */}
        <section className="team-details">
            <div className="team-details__shape-1 float-bob-y">
            <img src="assets/images/shapes/team-details-shape-1.png"  />
            </div>
            <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5">
                <div className="team-details__left">
                    <div className="team-details__img">
                    <img src="assets/images/team/team-details-img-1.jpg"  />
                    <div className="team-details__content">
                        <h3>Robbie B Minick</h3>
                        <p>Senior Designer</p>
                    </div>
                    <div className="team-details__social-box">
                        <ul className="list-unstyled team-details__social">
                        <li>
                            <Link href="#">
                            <i className="fab fa-facebook-f" />
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
                            <i className="fab fa-linkedin-in" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                            <i className="fas fa-share-alt" />
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                <div className="team-details__right">
                    <h3 className="team-details__title">Mamber Information</h3>
                    <p className="team-details__text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                    </p>
                    <ul className="team-details__points list-unstyled">
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ut
                            aliquip
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-check" />
                        </div>
                        <div className="text">
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate eu
                            fugiat nulla
                        </p>
                        </div>
                    </li>
                    </ul>
                    <div className="team-details__points-box">
                    <ul className="team-details__points-2 list-unstyled">
                        <li>
                        <h4>Phone : </h4>
                        <p>
                            <Link href="tel:01879658725">01879658725</Link>
                        </p>
                        </li>
                        <li>
                        <h4>Email : </h4>
                        <p>
                            <Link href="mailto:Example@gmail.com">Example@gmail.com</Link>
                        </p>
                        </li>
                        <li>
                        <h4>Gender : </h4>
                        <p>Male</p>
                        </li>
                    </ul>
                    <ul className="team-details__points-2 team-details__points-3 list-unstyled">
                        <li>
                        <h4>Website : </h4>
                        <p>
                            <Link href="mailto:Webexample.com">Webexample.com</Link>
                        </p>
                        </li>
                        <li>
                        <h4>Nationality :</h4>
                        <p>American</p>
                        </li>
                        <li>
                        <h4>Address :</h4>
                        <p>Raselina, New York</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*Team Details End */}
        
        {/*Qualification Start */}
        <section className="qualification">
            <div className="container">
            <div className="qualification__inner">
                <div className="qualification__left">
                <h3 className="qualification__left-title">Qualifications:</h3>
                <p className="qualification__left-text">Education/Certification:</p>
                <p className="qualification__left-text-2">
                    Bachelor’s Degree required in Business Administration, HR or related
                    field
                </p>
                <p className="qualification__left-text-3">Experience Required:</p>
                <p className="qualification__left-text-4">
                    Minimum 5 years of progressively responsible and related experience
                    in Human Resources, with a focus on talent development
                </p>
                </div>
                <div className="qualification__right">
                <h3 className="qualification__right-title">Skills/Abilities:</h3>
                <ul className="qualification__points list-unstyled">
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Effective presentation skills</p>
                    </div>
                    </li>
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Advanced critical thinking skills</p>
                    </div>
                    </li>
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Ability to influence at a senior level</p>
                    </div>
                    </li>
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Must be able to meet deadlines</p>
                    </div>
                    </li>
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Must possess strong knowledge</p>
                    </div>
                    </li>
                    <li>
                    <div className="icon">
                        <span className="fa fa-check" />
                    </div>
                    <div className="text">
                        <p>Advanced computer literacy</p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        {/*Qualification End */}

        {/*why Choose One Start */}
        <section className="why-choose-one">
            <div className="container">
            <div className="row">
                <div className="col-xl-6">
                <div className="why-choose-one__left">
                    <h3 className="why-choose-one__title">How Can Help You</h3>
                    <p className="why-choose-one__text">
                    Penatibus pulvinar hac lacinia interdum fermentum tortor leo a
                    montes ridlus nisi mauris quis potenti habitant cum consequat
                    varius est maecenas pretiun dignissim facilisi top level vehicula.
                    </p>
                    <ul className="why-choose-one__points list-unstyled">
                    <li>
                        <div className="icon">
                        <span className="icon-user" />
                        </div>
                        <div className="content">
                        <h3>Creative Solution</h3>
                        <p>
                            Congue lacinia aenean venenatis arcu rutrum vitae <br /> sus
                            pena tibus lectus dapibus integer habitasses
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-solution-1" />
                        </div>
                        <div className="content">
                        <h3>Customer Support</h3>
                        <p>
                            Congue lacinia aenean venenatis arcu rutrum vitae <br /> sus
                            pena tibus lectus dapibus integer habitasses
                        </p>
                        </div>
                    </li>
                    <li>
                        <div className="icon">
                        <span className="icon-group" />
                        </div>
                        <div className="content">
                        <h3>Execultive Member</h3>
                        <p>
                            Congue lacinia aenean venenatis arcu rutrum vitae <br /> sus
                            pena tibus lectus dapibus integer habitasses
                        </p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-xl-6">
                <div className="why-choose-one__right">
                    <div className="why-choose-one__img">
                    <img
                        src="assets/images/resources/why-choose-one-img.jpg"
                        
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*why Choose One End */}

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