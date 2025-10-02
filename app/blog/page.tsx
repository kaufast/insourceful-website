
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} headTitle="Blog" breadcrumbTitle="Blog" wrapperCls="">
     
        {/*Blog Page Start */}
        <section className="blog-page">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                <div className="blog-page__left">
                    <div className="blog-page__content-box">
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img src="assets/images/blog/blog-page-1-1.jpg"  />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            20 <br /> June
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-user-circle" />
                                Paul Smith
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="blog-details">
                            Over Ride The Digital Divide With Additional
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollanim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus voluptatem accusantium
                            doloremque laudantium, totam rem aperiam,
                        </p>
                        <p className="blog-page__text-2">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit
                        </p>
                        <Link href="blog-details" className="blog-page__read-more">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img src="assets/images/blog/blog-page-1-2.jpg"  />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            20 <br /> June
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-user-circle" />
                                Paul Smith
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="blog-details">
                            Leverage Frameworks To Provide A Robust
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollanim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus voluptatem accusantium
                            doloremque laudantium, totam rem aperiam,
                        </p>
                        <p className="blog-page__text-2">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit
                        </p>
                        <Link href="blog-details" className="blog-page__read-more">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img src="assets/images/blog/blog-page-1-3.jpg"  />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            20 <br /> June
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-user-circle" />
                                Paul Smith
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="blog-details">
                            Basic Rule Of Running Web Business
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollanim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus voluptatem accusantium
                            doloremque laudantium, totam rem aperiam,
                        </p>
                        <p className="blog-page__text-2">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit
                        </p>
                        <Link href="blog-details" className="blog-page__read-more">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    {/*Blog Page Single Start */}
                    <div className="blog-page__single">
                        <div className="blog-page__img-box">
                        <div className="blog-page__img">
                            <img src="assets/images/blog/blog-page-1-4.jpg"  />
                        </div>
                        <div className="blog-page__date">
                            <p>
                            20 <br /> June
                            </p>
                        </div>
                        </div>
                        <div className="blog-page__content">
                        <ul className="list-unstyled blog-page__meta">
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-user-circle" />
                                Paul Smith
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-comments" />0 Comment
                            </Link>
                            </li>
                            <li>
                            <Link href="blog-details">
                                <i className="far fa-heart" />0 Like
                            </Link>
                            </li>
                        </ul>
                        <h3 className="blog-page__title">
                            <Link href="blog-details">
                            Over Ride The Digital Divide With Additional
                            </Link>
                        </h3>
                        <p className="blog-page__text-1">
                            Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollanim id est laborum. Sed ut
                            perspiciatis unde omnis iste natus voluptatem accusantium
                            doloremque laudantium, totam rem aperiam,
                        </p>
                        <p className="blog-page__text-2">
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit
                        </p>
                        <Link href="blog-details" className="blog-page__read-more">
                            Read more <span className="icon-right-arrow1" />
                        </Link>
                        </div>
                    </div>
                    {/*Blog Page Single End */}
                    </div>
                    <div className="blog-page__pagination">
                    <ul className="pg-pagination list-unstyled">
                        <li className="Prev">
                        <Link href="#" aria-label="Next">
                            <i className="icon-back1" />
                        </Link>
                        </li>
                        <li className="count">
                        <Link href="#">01</Link>
                        </li>
                        <li className="count">
                        <Link href="#">02</Link>
                        </li>
                        <li className="count">
                        <Link href="#">3</Link>
                        </li>
                        <li className="next">
                        <Link href="#" aria-label="Next">
                            <i className="icon-back" />
                        </Link>
                        </li>
                    </ul>
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
        {/*Blog Page End */}
        
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