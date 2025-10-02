import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      {/*Portfolio One STart*/}
      <section className="portfolio-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png"  />
              </div>
              <p className="section-title__tagline">Our Recent Work</p>
            </div>
            <h2 className="section-title__title">Success Stories Across Industries</h2>
          </div>
          <ul className="list-unstyled portfolio-one__list">
            <li>
              <div className="portfolio-one__single">
                <div
                  className="portfolio-one__img"
                  style={{
                    backgroundImage:
                      "url(assets/images/project/portfolio-1-1.jpg)",
                  }}
                >
                  <div className="portfolio-one__title-box">
                    <h4 className="portfolio-one__title">
                      <Link href="portfolio-details">
                        Mining: SAP to JDE Migration
                      </Link>
                    </h4>
                    <div className="portfolio-one__arrow">
                      <Link
                        href="assets/images/project/portfolio-1-1.jpg"
                        className="img-popup"
                      >
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="portfolio-one__single">
                <div
                  className="portfolio-one__img"
                  style={{
                    backgroundImage:
                      "url(assets/images/project/portfolio-1-2.jpg)",
                  }}
                >
                  <div className="portfolio-one__title-box">
                    <h4 className="portfolio-one__title">
                      <Link href="portfolio-details">Pharmaceutical: 24-Country Rollout</Link>
                    </h4>
                    <div className="portfolio-one__arrow">
                      <Link
                        href="assets/images/project/portfolio-1-2.jpg"
                        className="img-popup"
                      >
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="portfolio-one__single">
                <div
                  className="portfolio-one__img"
                  style={{
                    backgroundImage:
                      "url(assets/images/project/portfolio-1-3.jpg)",
                  }}
                >
                  <div className="portfolio-one__title-box">
                    <h4 className="portfolio-one__title">
                      <Link href="portfolio-details">
                        Utilities: ERP Consolidation
                      </Link>
                    </h4>
                    <div className="portfolio-one__arrow">
                      <Link
                        href="assets/images/project/portfolio-1-3.jpg"
                        className="img-popup"
                      >
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="portfolio-one__single">
                <div
                  className="portfolio-one__img"
                  style={{
                    backgroundImage:
                      "url(assets/images/project/portfolio-1-4.jpg)",
                  }}
                >
                  <div className="portfolio-one__title-box">
                    <h4 className="portfolio-one__title">
                      <Link href="portfolio-details">Oil & Gas: Asset Management</Link>
                    </h4>
                    <div className="portfolio-one__arrow">
                      <Link
                        href="assets/images/project/portfolio-1-4.jpg"
                        className="img-popup"
                      >
                        <span className="icon-right-arrow1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/*Portfolio One End*/}
    </>
  );
}
