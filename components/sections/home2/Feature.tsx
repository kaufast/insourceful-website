import Link from "next/link";

export default function Feature() {
  return (
    <>
      {/*Feature Two Start */}
      <section className="feature-two">
        <div className="container">
          <div className="row">
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-management" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="team">Consultancy</Link>
                </h3>
                <p className="feature-two__text">We’ve been using tech</p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-briefing" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="contact">Computing</Link>
                </h3>
                <p className="feature-two__text">We’ve been using tech</p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-cyber-security" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="services">Security</Link>
                </h3>
                <p className="feature-two__text">We’ve been using tech</p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-backup" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="services">Backup</Link>
                </h3>
                <p className="feature-two__text">We’ve been using tech</p>
              </div>
            </div>
            {/*Feature Two Single End */}
          </div>
        </div>
      </section>
      {/*Feature Two Start */}
    </>
  );
}
