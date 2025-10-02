export default function Newsletter() {
  return (
    <>
      {/*Newsletter One Start*/}
      <section className="newsletter-one">
        <div className="container">
          <div className="newsletter-one__inner">
            <div
              className="newsletter-one__bg float-bob-y"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/newsletter-one-bg.jpg)",
              }}
            />
            <h3 className="newsletter-one__title">Newsletter</h3>
            <p className="newsletter-one__sub-title">Stay updated</p>
            <div
              className="newsletter-one__form mc-form"
              data-url="MC_FORM_URL"
            >
              <input type="email" name="EMAIL" placeholder="Email address" />
              <button type="submit" className="newsletter-one__btn">
                <span>
                  Subscribe
                  <i className="icon-arrow" />
                </span>
              </button>
            </div>
            {/* /.subscribe-one__form */}
            <div className="mc-form__response" />
            {/* /.mc-form__response */}
          </div>
        </div>
      </section>
      {/*Newsletter One End*/}
    </>
  );
}
