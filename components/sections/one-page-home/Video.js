import VideoPopup from "@/components/elements/VideoPopup"
export default function About() {
    return (
        <>            
            
            <section className="video-section centred" id="video">
                <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-box">
                    <h2>The Leading Private Bank In Ethiopia</h2>
                    <div className="video-btn">
                        <VideoPopup />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
