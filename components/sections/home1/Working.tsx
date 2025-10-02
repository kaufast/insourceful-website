export default function Benefit() {
  return (
    <>
      {/*Benefits One Start*/}
      <section className="benefits-one">
        <div className="benefits-one__shape-1">
          <div
            className="benefits-one__shape-bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/benefits-one-shape-bg.png)",
            }}
          />
        </div>
        <div
          className="benefits-one__bg-one"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/benefits-one-bg-one.jpg)",
          }}
        />
        <div className="benefits-one__overly" />
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="benefits-one__left">
                <div
                  className="benefits-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/resources/benefits-one-img-1.jpg"
                    
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="benefits-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                      <img
                        src="assets/images/icon/section-title-icon.png"
                        
                      />
                    </div>
                    <p className="section-title__tagline">Our Benefits</p>
                  </div>
                  <h2 className="section-title__title">
                    Delivering Measurable Business Value
                  </h2>
                </div>
                <p className="benefits-one__text">
                  Our implementations consistently deliver 30%+ improvements in operational 
                  efficiency, significant cost reductions, and enhanced compliance across 
                  asset-intensive operations globally.
                </p>
                <div className="benefits-one__points-and-mission">
                  <ul className="benefits-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Enterprise Transformation</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Implementation Excellence</p>
                      </div>
                    </li>
                  </ul>
                  <div className="benefits-one__mission">
                    <h3 className="benefits-one__mission-title">Our Mission</h3>
                    <p className="benefits-one__mission-text">
                      Knowledge transfer is at the core of every engagement. <br /> We build capabilities that last.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Benefits One End*/}
    </>
  );
}
