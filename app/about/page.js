'use client'
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Funfacts from "@/components/sections/one-page-home/Funfacts"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"

export default function AboutPage() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">

                {/* About Section */}
                <About />

                {/* Funfacts / Stats Section */}
                <Funfacts />

                {/* video-section */}
                {/* <section className="video-section alternat-2 centred">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="inner-box">
                            <h2>The 3rd Generation Private Commercial Bank</h2>
                            <div className="video-btn">
                                <VideoPopup />
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* video-section end */}

                {/* feature-style-three */}
                <section className="feature-style-three pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                            <h6>Why US</h6>
                            <h2>Why Choose Us</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-5"></i></div>
                                        <h4><Link href="/service">Secure International Transaction</Link></h4>
                                        <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-6"></i></div>
                                        <h4><Link href="/service">24/7 Support from the Expert Team</Link></h4>
                                        <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-7"></i></div>
                                        <h4><Link href="/service">Lowest Processing Fee than Other Banks</Link></h4>
                                        <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                                <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-8"></i></div>
                                        <h4><Link href="/service">Less Time in any Loans Approval</Link></h4>
                                        <p>Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                {/* testimonial-style-two */}
                <section className="testimonial-style-two pt_120 pb_120">
                    <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/testimonial-bg-2.jpg)' }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title mr_70">
                                    <h6>Testimonials</h6>
                                    <h2>Love from Happy Clients</h2>
                                    <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <TestimonialSlider02 />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* testimonial-style-two end */}

                {/* subscribe-section */}
                <section className="subscribe-section">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
                    <div className="auto-container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                                <div className="text-box">
                                    <h2>Subscribe us to Receive Latest Updates</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner ml_40">
                                    <form method="post" action="contact">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Your email" required />
                                            <button type="submit" className="theme-btn btn-two">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* subscribe-section end */}

                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="APArkQt1Ty8" onClose={() => setOpen(false)} />
            </Layout>
        </>
    )
}
