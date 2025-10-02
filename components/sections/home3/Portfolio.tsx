import Link from "next/link"
export default function Portfolio() {
    return (
        <>
  
  {/*POrtfolio Three Start */}
  <section className="portfolio-three">
    <div className="container">
      <div className="section-title-three text-center">
        <div className="section-title-three__tagline-box">
          <p className="section-title-three__tagline">Our Project</p>
        </div>
        <h2 className="section-title-three__title">Latest Case Studies</h2>
      </div>
      <div className="row">
        {/*Portfolio Three Single Start*/}
        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-1.jpg"  />
              </div>
            </div>
            <div className="portfolio-three__content">
              <div className="portfolio-three__title-box">
                <h3 className="portfolio-three__title">
                  <Link href="portfolio-details">Occaecat Cupidatat</Link>
                </h3>
                <p className="portfolio-three__text">
                  Excepteur sint a occaecat <br /> cupidatat non proident sunt
                  in
                </p>
              </div>
              <div className="portfolio-three__arrow">
                <Link
                  href="assets/images/project/portfolio-3-1.jpg"
                  className="img-popup"
                >
                  <span className="icon-back" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Portfolio Three Single End*/}
        {/*Portfolio Three Single Start*/}
        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-2.jpg"  />
              </div>
            </div>
            <div className="portfolio-three__content">
              <div className="portfolio-three__title-box">
                <h3 className="portfolio-three__title">
                  <Link href="portfolio-details">Research Strategy</Link>
                </h3>
                <p className="portfolio-three__text">
                  Excepteur sint a occaecat <br /> cupidatat non proident sunt
                  in
                </p>
              </div>
              <div className="portfolio-three__arrow">
                <Link
                  href="assets/images/project/portfolio-3-2.jpg"
                  className="img-popup"
                >
                  <span className="icon-back" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Portfolio Three Single End*/}
        {/*Portfolio Three Single Start*/}
        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
          <div className="portfolio-three__single">
            <div className="portfolio-three__img-box">
              <div className="portfolio-three__img">
                <img src="assets/images/project/portfolio-3-3.jpg"  />
              </div>
            </div>
            <div className="portfolio-three__content">
              <div className="portfolio-three__title-box">
                <h3 className="portfolio-three__title">
                  <Link href="portfolio-details">Voluptate Audantium</Link>
                </h3>
                <p className="portfolio-three__text">
                  Excepteur sint a occaecat <br /> cupidatat non proident sunt
                  in
                </p>
              </div>
              <div className="portfolio-three__arrow">
                <Link
                  href="assets/images/project/portfolio-3-3.jpg"
                  className="img-popup"
                >
                  <span className="icon-back" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*Portfolio Three Single End*/}
      </div>
    </div>
  </section>
  {/*POrtfolio Three End */}


    
        </>
    )
}
