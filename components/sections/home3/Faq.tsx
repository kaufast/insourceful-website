'use client'
import { useState } from 'react'
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>

      {/*Faq Three Start */}
      <section className="faq-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-three__left">
                <div className="section-title-three text-left">
                  <div className="section-title-three__tagline-box">
                    <p className="section-title-three__tagline">
                      Frequently asked questions
                    </p>
                  </div>
                  <h2 className="section-title-three__title">
                    How can we Solve the Problems
                  </h2>
                </div>
                <p className="faq-three__text">
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry. Have you done google research which <br />
                  works all free text available in the time.
                </p>
                <div className="faq-three__img">
                  <img src="assets/images/resources/faq-three-img-1.jpg"  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-three__right">
                <div className="accrodion-grp faq-three-accrodion" data-grp-name="faq-three-accrodion">
                  <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                    <div className="accrodion-title">
                      <h4>Is my campaign allowed on qrowd?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority have
                          suffered alteration in some fo injected humour, or
                          randomised words believable.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                    <div className="accrodion-title">
                      <h4>How to soft launch your campaign</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority have
                          suffered alteration in some fo injected humour, or
                          randomised words believable.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                    <div className="accrodion-title">
                      <h4>How to turn visitors into contributors</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority have
                          suffered alteration in some fo injected humour, or
                          randomised words believable.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                    <div className="accrodion-title">
                      <h4>How can i find my campaign?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          There are many variations of passages the majority have
                          suffered alteration in some fo injected humour, or
                          randomised words believable.
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
      {/*Faq Three End */}




    </>
  )
}
