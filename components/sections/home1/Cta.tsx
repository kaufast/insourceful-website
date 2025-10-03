import Link from "next/link";
export default function Cta() {
  return (
    <>
      {/*CTA One Start*/}
      <section className="cta-one">
        <div className="container">
          <div className="cta-one__inner" data-aos="fade-up" data-aos-delay="300">
            <h3 className="cta-one__title">Have Any Question?</h3>
            <div className="cta-one__icon">
              <span className="icon-phone" />
            </div>
            <div className="cta-one__content">
              <p className="cta-one__text">Lorem ipsum dolor sit am cons sid</p>
              <p className="cta-one__number">
                <Link href="tel:+17208788654">+1 (720) 878-8654</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*CTA One End*/}
    </>
  );
}
