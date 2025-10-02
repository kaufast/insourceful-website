export default function Process() {
  return (
    <>
      {/*Process One Start*/}
      <section className="process-one">
        <div className="process-one__inner">
          <div className="process-one__shape-1 float-bob-y-2">
            <img src="assets/images/shapes/process-one-shape-1.png"  />
          </div>
          <div className="container">
            <ul className="process-one__process-list list-unstyled">
              <li className="wow fadeInUp" data-wow-delay="100ms">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-zoom-in" />
                  </div>
                  <p className="process-one__text">Research</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="200ms">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-test" />
                  </div>
                  <p className="process-one__text">Concept</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="300ms">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-self-development" />
                  </div>
                  <p className="process-one__text">Develop</p>
                  <div className="process-one__count" />
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="400ms">
                <div className="process-one__single">
                  <div className="process-one__icon">
                    <span className="icon-growth" />
                  </div>
                  <p className="process-one__text">Test</p>
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
