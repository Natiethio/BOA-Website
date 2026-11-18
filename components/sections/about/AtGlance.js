'use client'

export default function AtGlance() {
    return (
        <>
            <section className="at-glance-section pt_120 pb_90">
                <div className="auto-container">
                    <div className="row align-items-center clearfix">
                        {/* Left Column: Image with Smooth Floating Badge */}
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="glance-image-wrapper wow fadeInLeft animated" data-wow-delay="100ms" data-wow-duration="1200ms">
                                <div className="glance-image-box">
                                    <img
                                        src="assets/images/resource/boa-first-bank.jpg"
                                        alt="The Bank of Abyssinia's first premises, established 1905"
                                    />
                                    <div className="image-caption-overlay">
                                        {/* <span>First premises, established 1905</span> */}
                                    </div>
                                </div>

                                {/* Floating Box with Smooth Left-to-Right Swinging Animation */}
                                <div className="glance-floating-badge">
                                    <div className="badge-icon">
                                        <i className="icon-5"></i>
                                    </div>
                                    <div className="badge-text">
                                        <span className="badge-tag"></span>
                                        <span className="badge-title">First Bank</span>
                                        <span className="badge-subtitle">in Ethiopia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="glance-content-box wow fadeInRight animated" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className="sec-title mb_20">
                                    <h6>About Us</h6>
                                    <h2>Bank of Abyssinia at Glance</h2>
                                    <div className="glance-accent-line"></div>
                                </div>

                                <div className="text-box mb_30">
                                    <p className="glance-paragraph">
                                        Founded in 1996, Bank of Abyssinia began with a vision to provide comprehensive commercial banking services and support Ethiopia’s economic growth. Its founders’ determination laid the foundation for a bank committed to helping customers achieve lasting success.
                                    </p>
                                    <p className="glance-paragraph">
                                        The name Abyssinia reflects bravery and character, while its Adey Abeba logo symbolizes hope, optimism, and new beginnings. These values guide the bank’s commitment to creating opportunities and building enduring customer relationships.
                                    </p>
                                </div>

                                <ul className="glance-features-list">
                                    <li>
                                        <div className="list-icon">
                                            <i className="icon-23"></i>
                                        </div>
                                        <span>First Bank in Ethiopia</span>
                                    </li>
                                    <li>
                                        <div className="list-icon">
                                            <i className="icon-23"></i>
                                        </div>
                                        <span>Symbol of Determination, Hope &amp; Bravery</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
