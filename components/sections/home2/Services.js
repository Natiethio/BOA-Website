'use client'
import Link from "next/link"
import { useState } from "react"

export default function Service() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <section className="service-style-two pb_120">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg-2.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title centred mb_70">
                    <h6>Our Services</h6>
                    <h2>Online Banking at Fingertips</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative mb_100">
                            <ul className="tab-btns tab-buttons" role="tablist">
                                <li className={`tab-btn-item ${activeIndex == 1 ? "active-btn" : ""}`} onClick={() => handleOnClick(1)} style={{ cursor: 'pointer' }}>
                                    <a className={activeIndex == 1 ? "nav-link active" : "nav-link"} onClick={(e) => { e.preventDefault(); handleOnClick(1); }} style={{ cursor: 'pointer', display: 'block' }}>
                                        <span>Digital Banking</span>
                                    </a>
                                </li>
                                <li className={`tab-btn-item ${activeIndex == 2 ? "active-btn" : ""}`} onClick={() => handleOnClick(2)} style={{ cursor: 'pointer' }}>
                                    <a className={activeIndex == 2 ? "nav-link active" : "nav-link"} onClick={(e) => { e.preventDefault(); handleOnClick(2); }} style={{ cursor: 'pointer', display: 'block' }}>
                                        <span>Virtual Banking</span>
                                    </a>
                                </li>
                                <li className={`tab-btn-item ${activeIndex == 3 ? "active-btn" : ""}`} onClick={() => handleOnClick(3)} style={{ cursor: 'pointer' }}>
                                    <a className={activeIndex == 3 ? "nav-link active" : "nav-link"} onClick={(e) => { e.preventDefault(); handleOnClick(3); }} style={{ cursor: 'pointer', display: 'block' }}>
                                        <span>Foreign Currency Account</span>
                                    </a>
                                </li>
                                <li className={`tab-btn-item ${activeIndex == 4 ? "active-btn" : ""}`} onClick={() => handleOnClick(4)} style={{ cursor: 'pointer' }}>
                                    <a className={activeIndex == 4 ? "nav-link active" : "nav-link"} onClick={(e) => { e.preventDefault(); handleOnClick(4); }} style={{ cursor: 'pointer', display: 'block' }}>
                                        <span>Instant Loan</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                            <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"} style={{ display: activeIndex == 1 ? 'block' : 'none' }}>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content_block_four">
                                    <div className="content-box mr_110">
                                        <h2>Digital Banking</h2>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                        </p>
                                        <ul className="list-item mb_40 clearfix">
                                        <li>Background Check</li>
                                        <li>Quick Response</li>
                                        <li>Free Consultation</li>
                                        <li>Over 20 Years Experience</li>
                                        <li>Expert Agents</li>
                                        </ul>
                                        <Link href="/service-details" className="theme-btn btn-one">
                                        Discover More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image">
                                        <img src="assets/images/service/digital_1.png" alt="" />
                                    </figure>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"} style={{ display: activeIndex == 2 ? 'block' : 'none' }}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                        <div className="content-box mr_110">
                                            <h2>Virtaul Banking</h2>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                            </p>
                                            <ul className="list-item mb_40 clearfix">
                                            <li>Background Check</li>
                                            <li>Quick Response</li>
                                            <li>Free Consultation</li>
                                            <li>Over 20 Years Experience</li>
                                            <li>Expert Agents</li>
                                            </ul>
                                            <Link href="/service-details-3" className="theme-btn btn-one">
                                            Discover More
                                            </Link>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image">
                                            <img src="assets/images/service/virtual.png" alt="" />
                                        </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"} style={{ display: activeIndex == 3 ? 'block' : 'none' }}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                            <div className="content-box mr_110">
                                                <h2>FCY Account and Virtual Card</h2>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                                </p>
                                                <ul className="list-item mb_40 clearfix">
                                                    <li>Background Check</li>
                                                    <li>Quick Response</li>
                                                    <li>Free Consultation</li>
                                                    <li>Over 20 Years Experience</li>
                                                    <li>Expert Agents</li>
                                                </ul>
                                                <Link href="/service-details-7" className="theme-btn btn-one">
                                                Discover More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box ml_40">
                                    <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                    <figure className="image">
                                        <img src="assets/images/service/FCYandvirtualcard.png" alt="" />
                                    </figure>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"} style={{ display: activeIndex == 4 ? 'block' : 'none' }}>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_four">
                                            <div className="content-box mr_110">
                                                <h2>Instant Loan</h2>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.
                                                </p>
                                                <ul className="list-item mb_40 clearfix">
                                                    <li>Background Check</li>
                                                    <li>Quick Response</li>
                                                    <li>Free Consultation</li>
                                                    <li>Over 20 Years Experience</li>
                                                    <li>Expert Agents</li>
                                                </ul>
                                                <Link href="/service-details-5" className="theme-btn btn-one"> Discover More </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div className="image-box ml_40">
                                        <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                                        <figure className="image">
                                            <img src="assets/images/service/loan.png" alt="" />
                                        </figure>
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

















            
