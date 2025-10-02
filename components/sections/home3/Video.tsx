export default function Video() {
    return (
        <>
       

            {/*Video Three Start*/}
            <section className="video-three">
                <div
                className="video-three__bg"
                style={{
                    backgroundImage: "url(assets/images/backgrounds/video-three-bg.jpg)"
                }}
                ></div>
                <div
                className="video-three__bg-2"
                style={{
                    backgroundImage: "url(assets/images/backgrounds/video-three-bg-2.jpg)"
                }}
                ></div>
                <div className="container">
                <div className="video-three__inner">
                    <div className="video-three__video-link">
                    <a
                        className="video-popup"
                    >
                        <div className="video-three__video-icon">
                        <span className="fa fa-play" />
                        <i className="ripple" />
                        </div>
                    </a>
                    </div>
                    <h3 className="video-three__title">
                    Watch This Video Presentation
                    <br /> Our Work And Etc
                    </h3>
                </div>
                </div>
            </section>
            {/*Video Three End*/}


       
        </>
    )
}
