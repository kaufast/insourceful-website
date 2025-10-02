import Link from "next/link"
export default function About() {
    return (
        <>

  {/*About Two Start*/}
  <section className="about-two">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="about-two__left">
            <div
              className="about-two__img-box wow slideInLeft"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="about-two__img">
                <img src="assets/images/resources/about-two-img-1.jpg"  />
              </div>
              <div className="about-two__experience-box">
                <div className="about-two__experience">
                  <h3>10</h3>
                  <p>
                    Years of <br /> Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="about-two__right">
            <div className="section-title-two text-left">
              <div className="section-title-two__tagline-box">
                <span className="section-title-two__tagline">
                  Get To Know Us
                </span>
              </div>
              <h2 className="section-title-two__title">
                Take Your Business To The Next Level
              </h2>
            </div>
            <p className="about-two__text">
              There are many variations of passages of Lorem Ipsum availa ble,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
            <ul className="list-unstyled about-two__solution-box">
              <li>
                <div className="about-two__solution-icon">
                  <span className="icon-check" />
                </div>
                <div className="about-two__solution-text">
                  <p>
                    Solution for small &amp; <br /> large businesses
                  </p>
                </div>
              </li>
              <li>
                <div className="about-two__solution-icon">
                  <span className="icon-check" />
                </div>
                <div className="about-two__solution-text">
                  <p>
                    Solution for small &amp; <br /> large businesses
                  </p>
                </div>
              </li>
            </ul>
            <ul className="list-unstyled about-two__points">
              <li>
                <div className="icon">
                  <span className="icon-check" />
                </div>
                <div className="text">
                  <p>It has survived not only five centuries</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-check" />
                </div>
                <div className="text">
                  <p>Lorem Ipsum has been the ndustry standard dummy text</p>
                </div>
              </li>
            </ul>
            <div className="about-two__btn-and-call">
              <div className="about-two__btn">
                <Link href="about">Discover More</Link>
              </div>
              <div className="about-two__call">
                <div className="about-two__call-icon">
                  <span className="icon-phone" />
                </div>
                <div className="about-two__call-content">
                  <p>Call Anytime</p>
                  <h4>
                    <Link href="tel:+17208788654">+1 (720) 878-8654</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*About Two End*/}


        
        </>
    )
}
