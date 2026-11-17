import Link from "next/link"


export default function Card() {
    return (
        <>
           
           <section className="card-section centred pt_120 pb_90">
                <div className="pattern-layer">
                    <div className="pattern-1 rotate-me"></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title mb_70">
                    <h6>Our Cards</h6>
                    <h2>Visa Debit Cards We Provide</h2>
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                        <div className="card-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/index-2"><img src="assets/images/resource/Infinite card.png" alt="" /></Link></figure>
                            <div className="lower-content">
                            <h3><Link href="/index-2">Infinite Card</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt</p>
                            <div className="btn-box">
                                <Link href="/index-2" className="theme-btn btn-two">Apply for Card</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                        <div className="card-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/index-2"><img src="assets/images/resource/Signature Card.png" alt="" /></Link></figure>
                            <div className="lower-content">
                            <h3><Link href="/index-2">Signature Card</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt</p>
                            <div className="btn-box">
                                <Link href="/index-2" className="theme-btn btn-two">Apply for Card</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 card-block">
                        <div className="card-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><Link href="/index-2"><img src="assets/images/resource/classiccard.png" alt="" /></Link></figure>
                            <div className="lower-content">
                            <h3><Link href="/index-2">Classic Card</Link></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt</p>
                            <div className="btn-box">
                                <Link href="/index-2" className="theme-btn btn-two">Apply for Card</Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

        </>
    )
}
