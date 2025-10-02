import Link from "next/link"
export default function Cta() {
    return (
        <>
       <>
  {/*CTA Two Start*/}
  <section className="cta-two">
    <div className="container">
      <div className="cta-two__inner">
        <div className="cta-two__left">
          <p className="cta-two__sub-title">make a call form</p>
          <h3 className="cta-two__title">Lets Build Your Application</h3>
        </div>
        <div className="cta-two__btn-box">
          <Link href="#" className="cta-two__btn">
            Make an Appointment
            <span className="icon-back" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  {/*CTA Two End*/}
</>

       
        </>
    )
}
