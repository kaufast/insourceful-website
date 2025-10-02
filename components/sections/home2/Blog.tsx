import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog Two Start*/}
      <section className="blog-two">
        <div className="container">
          <div className="section-title-two text-center">
            <div className="section-title-two__tagline-box">
              <span className="section-title-two__tagline">Our Blog</span>
            </div>
            <h2 className="section-title-two__title">
              Our Latest News &amp; Articles
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="blog-two__single">
                <div className="blog-two__img-one">
                  <img src="assets/images/blog/blog-2-1.jpg"  />
                  <div className="blog-two__content-one">
                    <div className="blog-two__date-and-comments">
                      <div className="blog-two__date">
                        <p>
                          20 <br /> May
                        </p>
                      </div>
                      <div className="blog-two__comments">
                        <Link href="blog-details">
                          <i className="fas fa-comments" /> 2 Comments
                        </Link>
                      </div>
                    </div>
                    <h3 className="blog-two__title">
                      <Link href="blog-details">
                        Technology Support Allows Erie Non <br /> Profit To
                        Serve
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="blog-two__right">
                <ul className="list-unstyled blog-two__list">
                  <li>
                    <div className="blog-two__img-two">
                      <img src="assets/images/blog/blog-2-2.jpg"  />
                    </div>
                    <div className="blog-two__content-two">
                      <ul className="list-unstyled blog-two__meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-comments" /> 2 Comments
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-two__title-two">
                        <Link href="blog-details">
                          Software Makes Your Profit <br /> Double If You Scale
                          Properly
                        </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="blog-two__img-two">
                      <img src="assets/images/blog/blog-2-3.jpg"  />
                    </div>
                    <div className="blog-two__content-two">
                      <ul className="list-unstyled blog-two__meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-comments" /> 2 Comments
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-two__title-two">
                        <Link href="blog-details">
                          Software Makes Your Profit <br /> Double If You Scale
                          Properly
                        </Link>
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="blog-two__img-two">
                      <img src="assets/images/blog/blog-2-4.jpg"  />
                    </div>
                    <div className="blog-two__content-two">
                      <ul className="list-unstyled blog-two__meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-comments" /> 2 Comments
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle" /> by Admin
                          </Link>
                        </li>
                      </ul>
                      <h3 className="blog-two__title-two">
                        <Link href="blog-details">
                          Software Makes Your Profit <br /> Double If You Scale
                          Properly
                        </Link>
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Blog Two End*/}
    </>
  );
}
