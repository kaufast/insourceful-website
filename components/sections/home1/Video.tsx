export default function Video() {
  return (
    <>
      {/*Video One Start*/}
      <section className="video-one">
        <div
          className="video-one__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)",
          }}
        />
        <div
          className="video-one__bg-2"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/video-one-bg-2.jpg)",
          }}
        ></div>
        <div
          className="video-one__bg-3"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/video-one-bg-3.png)",
          }}
        ></div>
        <div
          className="video-one__bg-4"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/video-one-bg-4.png)",
          }}
        ></div>
        <div className="container">
          <div className="video-one__inner">
            <div className="video-one__video-link">
              <a className="video-popup" href="#" aria-label="Play promotional video">
                <div className="video-one__video-icon">
                  <span className="fa fa-play" />
                  <i className="ripple" />
                </div>
              </a>
            </div>
            <h3 className="video-one__title">
              Watch This Video Presentation
              <br /> Our Work And Etc
            </h3>
          </div>
        </div>
      </section>
      {/*Video One End*/}
    </>
  );
}
