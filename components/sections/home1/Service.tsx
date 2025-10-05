import Link from "next/link";
export default function Service() {
  return (
    <>
      {/*Services One Start*/}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png" alt="Section title icon" />
              </div>
              <p className="section-title__tagline">
                <Link href="#">What We Offering</Link>
              </p>
            </div>
            <h2 className="section-title__title">Comprehensive Enterprise Solutions</h2>
          </div>
          <div className="services-one__inner">
            <ul className="services-one__services-list list-unstyled">
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-coding" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      ERP
                      <br /> Implementations
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-database" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      Capital Asset
                      <br /> Management
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-ux-design" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      MOS
                      <br /> Deployment
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cyber-security" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      Operational
                      <br /> Advisory
                    </Link>
                  </h3>
                </div>
              </li>
            </ul>
            <ul className="services-one__services-list list-unstyled">
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-event-management" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      System
                      <br /> Integration
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-content-management-1" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      Process
                      <br /> Excellence
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cyber-security" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      Governance &amp;
                      <br /> Compliance
                    </Link>
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-backup" />
                  </div>
                  <h3 className="services-one__title">
                    <Link href="services-details">
                      Training &amp; Knowledge
                      <br /> Transfer
                    </Link>
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Services One End*/}
    </>
  );
}
