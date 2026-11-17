import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>        
            
            <section className="funfact-section">
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-21"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={13} /><span>k+</span>
                                </div>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-22"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={984} />
                                </div>
                                <p>Total Branches</p>
                            </div>
                        </div>
                        <div className="funfact-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-23"></i></div>
                                <div className="count-outer count-box">
                                    <CounterUp end={1761} /><span>+</span>
                                </div>
                                <p>ATMs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
