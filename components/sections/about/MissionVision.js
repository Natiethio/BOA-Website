export default function MissionVision() {
    return (
        <>
            <section className="mv-section pt_120 pb_60">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Mission */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="mv-card wow fadeInLeft animated" data-wow-delay="0ms" data-wow-duration="1200ms">
                                <div className="mv-card__inner">
                                    <div className="icon-box"><i className="icon-10"></i></div>
                                    <h3>Our Mission</h3>
                                    <p>To create sustainable value for our shareholders by providing competitive, innovative, and diversified financial products and services — building lasting relationships with our customers, employees, and the communities we serve.</p>
                                </div>
                            </div>
                        </div>
                        {/* Vision */}
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="mv-card wow fadeInRight animated" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className="mv-card__inner">
                                    <div className="icon-box"><i className="icon-11"></i></div>
                                    <h3>Our Vision</h3>
                                    <p>To be the most trusted and preferred financial institution in Ethiopia — delivering excellence in banking services while actively contributing to the economic growth and social development of our nation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
