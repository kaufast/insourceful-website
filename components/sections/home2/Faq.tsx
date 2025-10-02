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
      {/*FAQ Two Start*/}
      <section className="faq-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="faq-two__left">
                <div className="section-title-two text-left">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">Faq</span>
                  </div>
                  <h2 className="section-title-two__title">
                    Innovat Solutions Digital Mindset
                  </h2>
                </div>
                <div className="faq-two__img">
                  <img src="assets/images/resources/faq-two-img-1.png"  />
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="faq-two__right">
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
                      <h4>Completely Iterate Covalent Strategic Theme</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                      <h4>Few Resons Why You Should Choose Us</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                      <h4>How To Update Application New Features</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                        How To Connect With The Support To Improve Experience
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
      {/*FAQ Two End*/}
    </>
  );
}
