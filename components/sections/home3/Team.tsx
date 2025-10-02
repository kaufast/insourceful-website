import Link from "next/link"
export default function Team() {
    return (
        <>
        

  <>
  {/*Team Three Start */}
  <section className="team-three">
    <div className="container">
      <div className="section-title-three text-center">
        <div className="section-title-three__tagline-box">
          <p className="section-title-three__tagline">Our Team</p>
        </div>
        <h2 className="section-title-three__title">Amazing Team Members</h2>
      </div>
      <div className="row">
        {/*Team Three Single Start*/}
        <div
          className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay="100ms"
        >
          <div className="team-three__single">
            <div className="team-three__img-box">
              <div className="team-three__img">
                <img src="assets/images/team/team-3-1.jpg"  />
                <div className="team-three__name-box">
                  <h3 className="team-three__name">
                    <Link href="team-details">Jecika Brown</Link>
                  </h3>
                  <p className="team-three__sub-title">Web Designer</p>
                </div>
              </div>
              <ul className="list-unstyled team-three__social">
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Team Three Single End*/}
        {/*Team Three Single Start*/}
        <div
          className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay="200ms"
        >
          <div className="team-three__single">
            <div className="team-three__img-box">
              <div className="team-three__img">
                <img src="assets/images/team/team-3-2.jpg"  />
                <div className="team-three__name-box">
                  <h3 className="team-three__name">
                    <Link href="team-details">Jhon Smith</Link>
                  </h3>
                  <p className="team-three__sub-title">Web Designer</p>
                </div>
              </div>
              <ul className="list-unstyled team-three__social">
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Team Three Single End*/}
        {/*Team Three Single Start*/}
        <div
          className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="team-three__single">
            <div className="team-three__img-box">
              <div className="team-three__img">
                <img src="assets/images/team/team-3-3.jpg"  />
                <div className="team-three__name-box">
                  <h3 className="team-three__name">
                    <Link href="team-details">Harbert Kapor</Link>
                  </h3>
                  <p className="team-three__sub-title">Web Designer</p>
                </div>
              </div>
              <ul className="list-unstyled team-three__social">
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Team Three Single End*/}
        {/*Team Three Single Start*/}
        <div
          className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay="400ms"
        >
          <div className="team-three__single">
            <div className="team-three__img-box">
              <div className="team-three__img">
                <img src="assets/images/team/team-3-4.jpg"  />
                <div className="team-three__name-box">
                  <h3 className="team-three__name">
                    <Link href="team-details">David Kapor</Link>
                  </h3>
                  <p className="team-three__sub-title">Web Designer</p>
                </div>
              </div>
              <ul className="list-unstyled team-three__social">
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*Team Three Single End*/}
      </div>
    </div>
  </section>
  {/*Team Three End */}
</>



        
        </>
    )
}
