import NewsletterForm from "@/components/forms/NewsletterForm"

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
            <NewsletterForm />
          </div>
        </div>
      </section>
      {/*Newsletter One End*/}
    </>
  );
}
