
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import About from "@/components/sections/home2/About"
import Service from "@/components/sections/home2/Service"
import Funfact from "@/components/sections/home2/Funfact"
import Feature from "@/components/sections/home2/Feature"
import Portfolio from "@/components/sections/home2/Portfolio"
import Faq from "@/components/sections/home2/Faq"
import Video from "@/components/sections/home2/Video"
import Newsletter from "@/components/sections/home2/Newsletter"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2} headTitle="Home 2" breadcrumbTitle="" wrapperCls="">
                <Banner />
                <Feature />
                <Brand />
                <About />
                <Service />
                <Funfact />
                <Portfolio />
                <Faq />
                <Team />
                <Video />
                <Testimonial />
                <Blog />
                <Newsletter />   
            </Layout>
        </>
    )
}