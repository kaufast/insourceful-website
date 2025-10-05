export default function Process() {
  return (
    <>
      {/*Process One Start*/}
      <section className="process-one">
        <div className="process-one__inner">
          <div className="process-one__shape-1 float-bob-y-2">
            <img src="assets/images/shapes/process-one-shape-1.png" alt="Process section decorative shape" />
          </div>
          <div className="container">
            <ul className="process-one__process-list list-unstyled">
              <li data-aos="fade-up" data-aos-delay="100">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-zoom-in" />
                  </div>
                  <p className="process-one__text">Assessment</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-test" />
                  </div>
                  <p className="process-one__text">Implementation</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-self-development" />
                  </div>
                  <p className="process-one__text">Audit</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-growth" />
                  </div>
                  <p className="process-one__text">Certification</p>
                  <div className="process-one__count" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Process One End*/}
    </>
  );
}
