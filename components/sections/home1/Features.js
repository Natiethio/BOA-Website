import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="feature-section">
                <div className="auto-container">
                    <div className="inner-container clearfix scroll-reveal">
                        <div className="feature-block-one scroll-reveal delay-100" data-delay="100">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-5"></i></div>
                                <h4><Link href="/service">Secure International Transaction</Link></h4>
                                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                            </div>
                        </div>
                        <div className="feature-block-one scroll-reveal delay-200" data-delay="200">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-6"></i></div>
                                <h4><Link href="/service">24/7 Support from the Expert Team</Link></h4>
                                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                            </div>
                        </div>
                        <div className="feature-block-one scroll-reveal delay-300" data-delay="300">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h4><Link href="/service">Lowest Processing Fee than Other Banks</Link></h4>
                                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                            </div>
                        </div>
                        <div className="feature-block-one scroll-reveal delay-400" data-delay="400">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link href="/service">Less Time in any Loans Approval</Link></h4>
                                <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
