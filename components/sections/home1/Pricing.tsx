import Link from "next/link";
export default function Pricng() {
  return (
    <>
      {/*Pricing One Start*/}
      <section className="pricing-one">
        <div
          className="pricing-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/pricing-one-bg.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png" alt="Section title icon" />
              </div>
              <p className="section-title__tagline">Our Pricing</p>
            </div>
            <h2 className="section-title__title">Select Your Choice Plan</h2>
          </div>
          <div className="row">
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <div className="pricing-one__shape-1">
                    <img
                      src="assets/images/shapes/pricing-one-shape-1.png"
                      
                    />
                  </div>
                  <div className="pricing-one__shape-2">
                    <img
                      src="assets/images/shapes/pricing-one-shape-2.png"
                      
                    />
                  </div>
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__title">Enterprise</h3>
                    <p className="pricing-one__price">
                      <span>$</span>35.00
                    </p>
                    <span className="pricing-one__sub-title">Per Month</span>
                  </div>
                  <ul className="pricing-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>Financial Solutions</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>12 Hours Support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-one__btn-box">
                    <Link href="contact" className="pricing-one__btn">
                      Get Started Now
                      <span className="icon-back" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <div className="pricing-one__shape-1">
                    <img
                      src="assets/images/shapes/pricing-one-shape-1.png"
                      
                    />
                  </div>
                  <div className="pricing-one__shape-2">
                    <img
                      src="assets/images/shapes/pricing-one-shape-2.png"
                      
                    />
                  </div>
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__title">Regular</h3>
                    <p className="pricing-one__price">
                      <span>$</span>55.00
                    </p>
                    <span className="pricing-one__sub-title">Per Month</span>
                  </div>
                  <ul className="pricing-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>Financial Solutions</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>12 Hours Support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-one__btn-box">
                    <Link href="contact" className="pricing-one__btn">
                      Get Started Now
                      <span className="icon-back" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
            {/*Pricing One Single Start*/}
            <div className="col-xl-4 col-lg-4">
              <div className="pricing-one__single">
                <div className="pricing-one__inner">
                  <div className="pricing-one__shape-1">
                    <img
                      src="assets/images/shapes/pricing-one-shape-1.png"
                      
                    />
                  </div>
                  <div className="pricing-one__shape-2">
                    <img
                      src="assets/images/shapes/pricing-one-shape-2.png"
                      
                    />
                  </div>
                  <div className="pricing-one__price-box">
                    <h3 className="pricing-one__title">Professional</h3>
                    <p className="pricing-one__price">
                      <span>$</span>85.00
                    </p>
                    <span className="pricing-one__sub-title">Per Month</span>
                  </div>
                  <ul className="pricing-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>Financial Solutions</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>12 Hours Support</p>
                      </div>
                    </li>
                  </ul>
                  <div className="pricing-one__btn-box">
                    <Link href="contact" className="pricing-one__btn">
                      Get Started Now
                      <span className="icon-back" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Pricing One Single End*/}
          </div>
        </div>
      </section>
      {/*Pricing One End*/}
    </>
  );
}
