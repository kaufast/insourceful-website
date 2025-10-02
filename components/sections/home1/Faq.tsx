"use client";
import { useState } from "react";
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                      <img
                        src="assets/images/icon/section-title-icon.png"
                        
                      />
                    </div>
                    <p className="section-title__tagline">
                      Technology Solution
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Industry Expertise
                    <br /> & Certifications
                  </h2>
                </div>
                <p className="faq-one__text">
                  Our consultants have led some of the most complex ERP transformations in 
                  asset-intensive industries, working with Fortune 500 companies and mid-market 
                  leaders alike. We bring global best practices with local implementation excellence.
                </p>
                <div className="faq-one__img-and-system">
                  <div className="faq-one__img">
                    <img src="assets/images/resources/oracle-jd-edwards.webp"  />
                  </div>
                  <div className="faq-one__system">
                    <h3 className="faq-one__system-title">
                      Oracle JD Edwards Excellence
                    </h3>
                    <p className="faq-one__system-text">
                      25+ years of Oracle JD Edwards expertise across 88 countries
                    </p>
                    <div className="faq-one__system-points">
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>Global Delivery, Local Expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion"
                >
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>Industries We Serve</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Mining & Metals | Oil, Gas & Energy | Pharmaceutical Manufacturing | 
                          Utilities & Infrastructure | Transportation & Logistics with deep 
                          expertise in asset-intensive operations.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>Our Certifications</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Oracle JDE Certified (Finance, CAM, Distribution) | SAP Certified Consultants | 
                          SOX Compliance Experts | CIPP/CIPM Data Privacy (In Progress)
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>Why Choose InSourceful?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          25+ years experience | 100+ global implementations | 88 countries served | 
                          Deep industry expertise in asset-intensive sectors with proven ROI results.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>
                        Implementation Methodology
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Assess current state | Design solution architecture | Implement with phased rollout | 
                          Optimize with post-go-live support and continuous improvement.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ One End*/}
    </>
  );
}
