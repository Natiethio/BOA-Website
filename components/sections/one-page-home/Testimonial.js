import TestimonialSlider01 from '@/components/slider/TestimonialSlider01'
import TestimonialSlider03 from "@/components/slider/TestimonialSlider03"



export default function Testimonial() {
    return (
        <>

                    <section className="exchange-section service-page-one pt_120 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                                <div className="sec-title mr_70">
                                <h6>Testimonials</h6>
                                <h2>What our customers says</h2>
                                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore. </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    {/*Theme Carousel*/}
                                    <TestimonialSlider03 />                        
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
        </>
    )
}


