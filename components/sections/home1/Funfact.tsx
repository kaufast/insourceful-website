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
                  <p className="counter-one__text">Years of Oracle JDE Expertise</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      {" "}
                      <CounterUp end={30} />+
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="200ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-project-management" />
                  </div>
                  <p className="counter-one__text">JD Edwards Implementations</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={80} />+
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="300ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-location" />
                  </div>
                  <p className="counter-one__text">Countries with Global Rollouts</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={24} />+
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="400ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-management" />
                  </div>
                  <p className="counter-one__text">Asset-Intensive Enterprises</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={88} />
                    </h3>
                  </div>
                </div>
              </li>
              <li className="wow fadeInUp" data-wow-delay="500ms">
                <div className="counter-one__single">
                  <div className="counter-one__icon">
                    <span className="icon-check" />
                  </div>
                  <p className="counter-one__text">SOX & IFRS Compliance</p>
                  <div className="counter-one__count count-box">
                    <h3>
                      <CounterUp end={100} />%
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
