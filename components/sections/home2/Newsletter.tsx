export default function Newsletter() {
  return (
    <>
      {/*Newsletter Two Start*/}
      <section className="newsletter-two">
        <div className="newsletter-two__shape-1">
          <img src="assets/images/shapes/newsletter-two-shape-1.jpg"  />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="newsletter-two__left">
                <p className="newsletter-two__sub-title">Subscribe Now</p>
                <h4 className="newsletter-two__title">Best Support Our Team</h4>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="newsletter-two__right">
                <div className="newsletter-two__email-form">
                  <form
                    className="newsletter-two__email-box"
                    data-url="MC_FORM_URL"
                  >
                    <div className="newsletter-two__email-input-box">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                      />
                    </div>
                    <button type="submit" className="newsletter-two__btn">
                      Subscribe
                    </button>
                  </form>
                  <div className="mc-form__response" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Newsletter Two End*/}
    </>
  );
}
