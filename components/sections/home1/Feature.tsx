import Link from "next/link";
export default function Feature() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
        <div className="container">
          <div className="row">
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-project-management" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="services-details">Manage It Services</Link>
                  </h3>
                  <p className="feature-one__text">
                    Complete account of system, and expound the actual
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-supply-chain" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="services-details">Digital Experience</Link>
                  </h3>
                  <p className="feature-one__text">
                    Complete account of system, and expound the actual
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-cyber-security" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="services-details">Cyber Security</Link>
                  </h3>
                  <p className="feature-one__text">
                    Complete account of system, and expound the actual
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-content-management-1" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="services-details">Deployment Service</Link>
                  </h3>
                  <p className="feature-one__text">
                    Complete account of system, and expound the actual
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
    </>
  );
}
