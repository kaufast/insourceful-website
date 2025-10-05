import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog One Start*/}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png" alt="Section title icon" />
              </div>
              <p className="section-title__tagline">Our Blog</p>
            </div>
            <h2 className="section-title__title">
              Latest ERP &amp; Industry Insights
            </h2>
          </div>
          <div className="row">
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/mining-operations.webp" alt="Mining Operations" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      15
                      <br /> Sep
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Oracle JD Edwards 9.2 Upgrade: Key Benefits for Mining Operations
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Discover how the latest JDE upgrade delivers enhanced asset management capabilities.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details" aria-label="Read more about Oracle JD Edwards 9.2 Upgrade for Mining Operations">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/pharmaceutical-lab.webp" alt="Pharmaceutical Laboratory" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      15
                      <br /> Sep
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      SOX Compliance in Pharmaceutical ERP Systems
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Best practices for maintaining regulatory compliance during ERP implementations.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details" aria-label="Read more about SOX Compliance in Pharmaceutical ERP Systems">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/oil-gas-refinery.webp" alt="Oil & Gas Refinery" />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      15
                      <br /> Sep
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Capital Asset Management for Oil & Gas: Digital Transformation
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    How modern CAM systems optimize asset lifecycle management in energy sector.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details" aria-label="Read more about Capital Asset Management for Oil & Gas Digital Transformation">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </section>
      {/*Blog One End*/}
    </>
  );
}
