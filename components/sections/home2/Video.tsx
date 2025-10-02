export default function Video() {
  return (
    <>
      {/*Video Two Start*/}
      <section className="video-two">
        <div
          className="video-two__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/video-two-bg.jpg)",
          }}
        />
        <div className="video-two__inner">
          <div className="video-two__video-link">
            <a className="video-popup">
              <div className="video-two__video-icon">
                <span className="fa fa-play" />
                <i className="ripple" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
