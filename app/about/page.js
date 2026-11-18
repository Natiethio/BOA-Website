import Layout from "@/components/layout/Layout"
import AtGlance from "@/components/sections/about/AtGlance"
import MissionVision from "@/components/sections/about/MissionVision"
import CoreValues from "@/components/sections/about/CoreValues"
import Journey from "@/components/sections/about/Journey"

export default function AboutPage() {
    return (
        <>
            <Layout
                headerStyle={1}
                footerStyle={1}
                breadcrumbTitle="About Us"
                breadcrumbBg="assets/images/background/aboutus.png"
                breadcrumbCls="about-page-hero"
            >
                {/* Bank of Abyssinia at Glance (Above Mission & Vision) */}
                <AtGlance />

                {/* Mission & Vision */}
                <MissionVision />

                {/* Core Values */}
                <CoreValues />

                {/* The Journey — Timeline */}
                <Journey />

            </Layout>
        </>
    )
}
