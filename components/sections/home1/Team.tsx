import Link from "next/link";
export default function Team() {
  return (
    <>
      {/*Team One Start*/}
      <section className="team-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png" alt="Section title icon" />
              </div>
              <p className="section-title__tagline">Meet Our Team</p>
            </div>
            <h2 className="section-title__title">Meet Our Expart Mambers</h2>
          </div>
          <div className="row">
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-1.jpg" alt="Team member photo" />
                    <div className="team-one__name-box">
                      <h3 className="team-one__name">
                        <Link href="team-details">Jecika Brown</Link>
                      </h3>
                      <p className="team-one__sub-title">Web Designer</p>
                    </div>
                  </div>
                  <ul className="list-unstyled team-one__social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-2.jpg" alt="Team member photo" />
                    <div className="team-one__name-box">
                      <h3 className="team-one__name">
                        <Link href="team-details">Jhon Smith</Link>
                      </h3>
                      <p className="team-one__sub-title">Web Designer</p>
                    </div>
                  </div>
                  <ul className="list-unstyled team-one__social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-3.jpg" alt="Team member photo" />
                    <div className="team-one__name-box">
                      <h3 className="team-one__name">
                        <Link href="team-details">Alisha Martin</Link>
                      </h3>
                      <p className="team-one__sub-title">Web Designer</p>
                    </div>
                  </div>
                  <ul className="list-unstyled team-one__social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
            {/*Team One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="team-one__single">
                <div className="team-one__img-box">
                  <div className="team-one__img">
                    <img src="assets/images/team/team-1-4.jpg" alt="Team member photo" />
                    <div className="team-one__name-box">
                      <h3 className="team-one__name">
                        <Link href="team-details">David Kapor</Link>
                      </h3>
                      <p className="team-one__sub-title">Web Designer</p>
                    </div>
                  </div>
                  <ul className="list-unstyled team-one__social">
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Team One Single End*/}
          </div>
        </div>
      </section>
      {/*Team One End*/}
    </>
  );
}
