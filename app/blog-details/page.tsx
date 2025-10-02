
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Blog Details" breadcrumbTitle="Blog Details" wrapperCls="">
        
        {/*BLog Details Start*/}
        <section className="blog-details">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="blog-details__left">
                    <div className="blog-details__img-box">
                    <div className="blog-details__img">
                        <img src="assets/images/blog/blog-details-img-1.jpg"  />
                    </div>
                    <div className="blog-details__date">
                        <p>
                        10 <br /> Nov
                        </p>
                    </div>
                    </div>
                    <ul className="list-unstyled blog-details__meta">
                    <li>
                        <Link href="blog-details">
                        <i className="fas fa-user-circle" /> Jhon Albert
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-details">
                        <i className="fas fa-comments" /> 0 Comment
                        </Link>
                    </li>
                    <li>
                        <Link href="blog-details">
                        <i className="fas fa-heart" /> 0 Like
                        </Link>
                    </li>
                    </ul>
                    <h3 className="blog-details__title-1">
                    Context And Variables In Hugo Site Generator.
                    </h3>
                    <p className="blog-details__text-1">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollanim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus voluptatem accusantium doloremque laudantium,
                    totam rem aperiam,
                    </p>
                    <p className="blog-details__text-2">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit
                    </p>
                    <div className="blog-details__btn-box">
                    <Link href="#" className="blog-details__btn">
                        Read more
                        <i className="icon-right-arrow1" />
                    </Link>
                    </div>
                    <div className="blog-details__img-2">
                    <img src="assets/images/blog/blog-details-img-2.jpg"  />
                    </div>
                    <p className="blog-details__text-3">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam,
                    </p>
                    <div className="blog-details__quote-and-text">
                    <div className="blog-details__quote">
                        <span className="icon-left" />
                    </div>
                    <div className="blog-details__quote-text">
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusan doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab ilnventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                        </p>
                    </div>
                    </div>
                    <p className="blog-details__text-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam,
                    </p>
                    <ul className="blog-details__points list-unstyled">
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt molla
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium consequat.
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                        amet, consectetur,volupta
                        </p>
                    </li>
                    <li>
                        <div className="blog-details__points-shape" />
                        <p className="blog-details__points-text">
                        Excepteur sint occaecat cupidatat non proident, sunt culpa qui
                        officia deserunt accusantium
                        </p>
                    </li>
                    </ul>
                    <p className="blog-details__text-5">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollanim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam,
                    </p>
                    <p className="blog-details__text-6">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                    error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam
                    </p>
                    <div className="blog-details__bottom">
                    <p className="blog-details__tags">
                        <Link href="#">Office</Link>
                        <Link href="#">Design</Link>
                        <Link href="#">Clean</Link>
                    </p>
                    <div className="blog-details__social-list">
                        <Link href="#">
                        <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                        <i className="fab fa-pinterest-p" />
                        </Link>
                    </div>
                    </div>
                    <div className="author">
                    <div className="author__img">
                        <img src="assets/images/blog/author-img.jpg"  />
                    </div>
                    <div className="author__content">
                        <h4>Moho Smith</h4>
                        <p>
                        Them cattle had their you're female, living seed firmament
                        earth saying mud you dark make heaven face carribian surface
                        saying without.
                        </p>
                        <div className="author__social">
                        <Link href="#">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link href="#">
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="blog-details__comment-and-form">
                    <div className="comment-one">
                        <h3 className="comment-one__title">Comments ( 2)</h3>
                        <div className="comment-one__single">
                        <div className="comment-one__image">
                            <img src="assets/images/blog/comment-1-1.jpg"  />
                        </div>
                        <div className="comment-one__content">
                            <h3>Strone Smith</h3>
                            <p>
                            Blessed heaven in seasons man were image void seasons
                            given bearing greats fly multiply every deed you can surem
                            dolor mesurement good.
                            </p>
                            <span>February 03. 2021</span>
                            <Link href="blog-details" className="comment-one__btn">
                            Reply
                            </Link>
                        </div>
                        </div>
                        <div className="comment-one__single">
                        <div className="comment-one__image">
                            <img src="assets/images/blog/comment-1-2.jpg"  />
                        </div>
                        <div className="comment-one__content">
                            <h3>Jhon Smith</h3>
                            <p>
                            Blessed heaven in seasons man were image void seasons
                            given bearing greats fly hrtter louytww hhry
                            </p>
                            <span>February 03. 2021</span>
                            <Link href="blog-details" className="comment-one__btn">
                            Reply
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="comment-form">
                        <h3 className="comment-form__title">Leave A Reply</h3>
                        <form
                        action="assets/inc/sendemail.php"
                        className="comment-one__form contact-form-validated"
                        noValidate
                        >
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="comment-form__input-box">
                                <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                />
                            </div>
                            </div>
                            <div className="col-xl-12">
                            <div className="comment-form__input-box">
                                <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                            <div className="comment-form__input-box text-message-box">
                                <textarea
                                name="message"
                                placeholder="Write Comment"
                                defaultValue={""}
                                />
                            </div>
                            <div className="comment-form__btn-box">
                                <button type="submit" className="comment-form__btn">
                                Post Comment
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
                <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
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
                    <div className="sidebar__single sidebar__post">
                    <div className="sidebar__title-box">
                        <h3 className="sidebar__title">Recent Post</h3>
                    </div>
                    <ul className="sidebar__post-list list-unstyled">
                        <li>
                        <div className="sidebar__post-image">
                            <img src="assets/images/blog/blog-lp-1.jpg"  />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="blog-details">
                            Face eite mowl dirst dominon likeness meat a mornin.
                            </Link>
                        </h3>
                        </li>
                        <li>
                        <div className="sidebar__post-image">
                            <img src="assets/images/blog/blog-lp-2.jpg"  />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="blog-details">
                            Said dill under bielding over made spirit sea.
                            </Link>
                        </h3>
                        </li>
                        <li>
                        <div className="sidebar__post-image">
                            <img src="assets/images/blog/blog-lp-3.jpg"  />
                        </div>
                        <h3 className="sidebar__post-title">
                            <Link href="blog-details">
                            Maybe you should talk to someone
                            </Link>
                        </h3>
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
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*BLog Details End*/}
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

        </Layout>
        </>
    )
}