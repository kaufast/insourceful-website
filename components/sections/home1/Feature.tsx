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
                    <Link href="services-details">Managed IT Services</Link>
                  </h3>
                  <p className="feature-one__text">
                    End-to-end ERP support to maintain, monitor, and optimize enterprise applications worldwide.
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
                    <Link href="services-details">Digital Innovation</Link>
                  </h3>
                  <p className="feature-one__text">
                    Enhance business agility with IoT, automation, analytics, and user experience improvements.
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
                    Safeguard ERP systems with compliance frameworks, access controls, and proactive threat monitoring.
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
                    <Link href="services-details">Deployment Services</Link>
                  </h3>
                  <p className="feature-one__text">
                    Seamless ERP rollouts, cloud migrations, and upgrades aligned to industry best practices.
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
