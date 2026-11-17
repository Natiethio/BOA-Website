import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            
            <section className="funfact-section">
                <div className="auto-container">
                    <div className="inner-container clearfix scroll-reveal">
                        <div className="funfact-block-one scroll-reveal delay-100" data-delay="100">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-21"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={50} /><span>k+</span>
                                </div>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="funfact-block-one scroll-reveal delay-200" data-delay="200">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-22"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={90} /><span>Bn</span>
                                </div>
                                <p>Total Transactions</p>
                            </div>
                        </div>
                        <div className="funfact-block-one scroll-reveal delay-300" data-delay="300">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-23"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={40} /><span>+</span>
                                </div>
                                <p>Branches in USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
