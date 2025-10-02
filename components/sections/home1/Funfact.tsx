import CounterUp from "@/components/elements/CounterUp";
export default function Funfact() {
  return (
    <>
      {/*Counter One Start*/}
      <section className="counter-one">
        <div
          className="counter-one__bg img-bounce"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/counter-one-bg.png)",
          }}
        ></div>
        <div
          className="counter-one__bg-two"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/counter-one-bg-two.jpg)",
          }}
        />
        <div
          className="counter-one__bg-three"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/counter-one-bg-three.jpg)",
          }}
        />
        <div className="container">
          <div className="counter-one__inner">
            <ul className="counter-one__count-list list-unstyled">
              <li className="wow fadeInUp" data-wow-delay="100ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-award" />
                  </div>
                  <p className="counter-one__text">Complete Project</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      {" "}
                      <CounterUp end={5684} />
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-download" />
                  </div>
                  <p className="counter-one__text">Total Download</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={5593} />
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-feedback" />
                  </div>
                  <p className="counter-one__text">Positive Review</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={5487} />
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-management" />
                  </div>
                  <p className="counter-one__text">Team Members</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={2474} />
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="500ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-award" />
                  </div>
                  <p className="counter-one__text">Cup Of Coffee</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={6497} />
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Counter One End*/}
    </>
  );
}
