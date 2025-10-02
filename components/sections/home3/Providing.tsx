import Link from "next/link"
export default function Providing() {
    return (
        <>
        

  {/*Providing One Start */}
  <section className="providing-one">
    <div className="providing-one__wrap">
      <div className="providing-one__left">
        <div
          className="providing-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/providing-one-bg.jpg)"
          }}
        />
        <div className="providing-one__content">
          <h3 className="providing-one__title">
            We Make Your Agency Full Bright
          </h3>
          <Link href="about" className="providing-one__read-more">
            Read More
          </Link>
        </div>
      </div>
      <div className="providing-one__right">
        <div className="google-map-two">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
            className="google-map__two"
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
  </section>
  {/*Providing One End */}

 
        
        </>
    )
}
