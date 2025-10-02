import Link from "next/link"
export default function Share() {
   
    return (
        <>

  {/*Share The Joy Start */}
  <section className="share-the-joy">
    <div className="share-the-joy__wrap">
      <div
        className="share-the-joy__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/share-the-joy-bg.jpg)"
        }}
      />
      <div className="container">
        <div className="share-the-joy__inner">
          <h3 className="share-the-joy__title">
            Share the Joy of Achieving
            <br /> Glorious Moments &amp; Climbing
            <br /> Up the Top
          </h3>
          <div className="share-the-joy__btn-box">
            <div className="share-the-joy__shape-1 float-bob-x">
              <img
                src="assets/images/shapes/share-the-joy-shape-1.png"
                
              />
            </div>
            <Link href="about" className="share-the-joy__btn">
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Share The Joy End */}
</>

    )
}
