import CounterUp from "@/components/elements/CounterUp"
export default function Funfact() {
    return (
        <>
 
  {/*Counter Three Start */}
  <section className="counter-three">
    <div className="container">
      <div className="counter-three__inner">
        <div
          className="counter-three__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/counter-three-bg.jpg)"
          }}
        />
        <div className="row">
          {/*Counter Three Single Start*/}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-three__single counter-three__single-1">
              <div className="counter-three__count count-box">
                <h3>
                  <CounterUp end={4689} />
                </h3>
                <span>+</span>
              </div>
              <p className="counter-three__count-text">Complete Project</p>
            </div>
          </div>
          {/*Counter Three Single End*/}
          {/*Counter Three Single Start*/}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-three__single">
              <div className="counter-three__count count-box">
                <h3>
                  <CounterUp end={6594} />
                </h3>
                <span>+</span>
              </div>
              <p className="counter-three__count-text">Saticfied Clients</p>
            </div>
          </div>
          {/*Counter Three Single End*/}
          {/*Counter Three Single Start*/}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-three__single">
              <div className="counter-three__count count-box">
                <h3 >
                  <CounterUp end={7592} />
                </h3>
                <span>+</span>
              </div>
              <p className="counter-three__count-text">Positive Review</p>
            </div>
          </div>
          {/*Counter Three Single End*/}
          {/*Counter Three Single Start*/}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="counter-three__single">
              <div className="counter-three__count count-box">
                <h3 >
                  <CounterUp end={2542} />
                </h3>
                <span>+</span>
              </div>
              <p className="counter-three__count-text">Cup Of Coffee</p>
            </div>
          </div>
          {/*Counter Three Single End*/}
        </div>
      </div>
    </div>
  </section>
  {/*Counter Three End */}


        </>
    )
}
