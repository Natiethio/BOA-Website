import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/one-page-home/Banner"
import Services from "@/components/sections/home2/Services"
import Exchange from "@/components/sections/home3/Exchange"
import Feature from "@/components/sections/home2/Feature"
import Video from "@/components/sections/one-page-home/Video"
import Funfacts from "@/components/sections/one-page-home/Funfacts"
import App from "@/components/sections/home3/App"
import News from "@/components/sections/one-page-home/News"
import Card from "@/components/sections/home2/Card"
import Testimonial from "@/components/sections/one-page-home/Testimonial"
import Subscribe from "@/components/sections/one-page-home/Subscribe"
import Process from "@/components/sections/home2/Process"
import Remittance from "@/components/sections/one-page-home/Remittance"
export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Services />
                <Video />
                <Funfacts />
                <Card />
                <Process />
                <Exchange />
                <App />
                <Testimonial />
                <News />
                <Remittance />
                <Subscribe />
            </Layout>
        </>
    )
}