import Link from "next/link";
export default function Service() {
  return (
    <>
      {/*Services Two Start*/}
      <section className="services-two">
        <div className="container">
          <div className="section-title-two text-center">
            <div className="section-title-two__tagline-box">
              <span className="section-title-two__tagline">What We Do</span>
            </div>
            <h2 className="section-title-two__title">Our Best Services</h2>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="services-two__left">
                <div className="services-two__img">
                  <img
                    src="assets/images/services/services-two-img-1.jpg"
                    
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="services-two__right">
                <div className="row">
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-self-development" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">
                              Product Development
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-content-management-1" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">
                              Content Management
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-wealth" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">
                              Wealth Management
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-money" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">
                              Finance Consulting
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-brainstorming" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">Data Analysis</Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                  {/*Services Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 wow fadeInUp"
                    data-wow-delay="600ms"
                  >
                    <div className="services-two__single-box">
                      <div className="services-two__single">
                        <div className="services-two__icon">
                          <span className="icon-firewall" />
                        </div>
                        <div className="services-two__content">
                          <h3 className="services-two__title">
                            <Link href="services-details">
                              Firewall Advance
                            </Link>
                          </h3>
                          <p className="services-two__text">
                            Lorem ipsum is simply sit <br /> of free text dolor.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Services Two Single End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services Two End*/}
    </>
  );
}
