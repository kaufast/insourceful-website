import Link from "next/link"
export default function Service() {
   
    return (
        <>
     
  {/*Services Three Start */}
  <section className="services-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="services-three__left">
            <div className="section-title-three text-left">
              <div className="section-title-three__tagline-box">
                <p className="section-title-three__tagline">
                  What Services Provide
                </p>
              </div>
              <h2 className="section-title-three__title">
                We Make Bright Your It Agency
              </h2>
            </div>
            <p className="services-three__text-1">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qofficia serunt mollianim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptateaccusantium Nemo enim ipsam
              voluptatem
            </p>
            <p className="services-three__text-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut futit quia consequuntur magni dolores esequi nesciunt.
            </p>
            <div className="services-three__bottom">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="services-three__bottom-single">
                    <div className="services-three__bottom-icon">
                      <img
                        src="assets/images/icon/services-three-icon-1.png"
                        
                      />
                    </div>
                    <h3 className="services-three__bottom-title">
                      <Link href="services-details">
                        Tax
                        <br /> Strategy
                      </Link>
                    </h3>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="services-three__bottom-single">
                    <div className="services-three__bottom-icon">
                      <img
                        src="assets/images/icon/services-three-icon-2.png"
                        
                      />
                    </div>
                    <h3 className="services-three__bottom-title">
                      <Link href="services-details">
                        System
                        <br /> Developer
                      </Link>
                    </h3>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="services-three__bottom-single">
                    <div className="services-three__bottom-icon">
                      <img
                        src="assets/images/icon/services-three-icon-3.png"
                        
                      />
                    </div>
                    <h3 className="services-three__bottom-title">
                      <Link href="services-details">
                        Media
                        <br /> Marketing
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="services-three__right">
            <div className="row">
              {/*Services Three Right Single Start*/}
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="services-three__right-single services-three__right-single-1">
                  <div className="services-three__right-icon">
                    <img
                      src="assets/images/icon/services-three-right-icon-1.png"
                      
                    />
                  </div>
                  <h3 className="services-three__right-title">
                    <Link href="services-details">Cyber Security</Link>
                  </h3>
                  <p className="services-three__right-text">
                    Lorem is simply text of
                    <br /> the printing.
                  </p>
                </div>
              </div>
              {/*Services Three Right Single End*/}
              {/*Services Three Right Single Start*/}
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-three__right-single services-three__right-single-2">
                  <div className="services-three__right-icon">
                    <img
                      src="assets/images/icon/services-three-right-icon-2.png"
                      
                    />
                  </div>
                  <h3 className="services-three__right-title">
                    <Link href="services-details">Web Development</Link>
                  </h3>
                  <p className="services-three__right-text">
                    Lorem is simply text of
                    <br /> the printing.
                  </p>
                </div>
              </div>
              {/*Services Three Right Single End*/}
              {/*Services Three Right Single Start*/}
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="services-three__right-single services-three__right-single-3">
                  <div className="services-three__right-icon">
                    <img
                      src="assets/images/icon/services-three-right-icon-3.png"
                      
                    />
                  </div>
                  <h3 className="services-three__right-title">
                    <Link href="services-details">Ux/Ui Strategy</Link>
                  </h3>
                  <p className="services-three__right-text">
                    Lorem is simply text of
                    <br /> the printing.
                  </p>
                </div>
              </div>
              {/*Services Three Right Single End*/}
              {/*Services Three Right Single Start*/}
              <div
                className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="services-three__right-single services-three__right-single-4">
                  <div className="services-three__right-icon">
                    <img
                      src="assets/images/icon/services-three-right-icon-4.png"
                      
                    />
                  </div>
                  <h3 className="services-three__right-title">
                    <Link href="services-details">Product Engineering</Link>
                  </h3>
                  <p className="services-three__right-text">
                    Lorem is simply text of
                    <br /> the printing.
                  </p>
                </div>
              </div>
              {/*Services Three Right Single End*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Services Three End */}
</>

   
    )
}
