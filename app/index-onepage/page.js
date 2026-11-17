import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/one-page-home/Banner"
// import Features from "@/components/sections/one-page-home/Features"
import Feature from "@/components/sections/home2/Feature"
import About from "@/components/sections/one-page-home/About"
// import Services from "@/components/sections/one-page-home/Services"
import Services from "@/components/sections/home2/Services"
import Calculator from "@/components/sections/one-page-home/Calculator"
import Video from "@/components/sections/one-page-home/Video"
import Funfacts from "@/components/sections/one-page-home/Funfacts"
import App from "@/components/sections/home3/App"
import Testimonial from "@/components/sections/one-page-home/Testimonial"
import News from "@/components/sections/one-page-home/News"
import Subscribe from "@/components/sections/one-page-home/Subscribe"
import Process from "@/components/sections/home2/Process"
import Card from "@/components/sections/home2/Card"
import Exchange from "@/components/sections/home3/Exchange"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <Feature />
                
                <Services />
                {/* <Calculator /> */}
                <Video />
                <Funfacts />
                <Card />
                <Process />
                <Exchange />
                <App />
                <Testimonial />
                <News />
                <Subscribe />
            </Layout>
        </>
    )
}