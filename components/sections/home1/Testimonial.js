import TestimonialSlider01 from '@/components/slider/TestimonialSlider01'

export default function Testimonial() {
    return (
        <>

            <section className="testimonial-section centred pt_120 pb_120">
                <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/testimonial-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="sec-title mb_70 scroll-reveal">
                    <h6>Testimonials</h6>
                    <h2>Love from Our Clients</h2>
                    </div>
                    <div className="content-box scroll-reveal delay-200">
                        {/*Theme Carousel*/}
                        <TestimonialSlider01 />                        
                    </div>
                </div>
            </section>
        </>
    )
}
