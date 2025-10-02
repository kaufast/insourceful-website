
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Service from "@/components/sections/home3/Service"
import About from "@/components/sections/home3/About"
import Team from "@/components/sections/home3/Team"
import Testimonial from "@/components/sections/home3/Testimonial"
import Portfolio from "@/components/sections/home3/Portfolio"
import Video from "@/components/sections/home3/Video"
import Cta from "@/components/sections/home3/Cta"
import Share from "@/components/sections/home3/Share"
import Providing from "@/components/sections/home3/Providing"
import Faq from "@/components/sections/home3/Faq"
import Funfact from "@/components/sections/home3/Funfact"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={3} headTitle="Home 3" breadcrumbTitle="" wrapperCls="">
            <Banner />  
            <About />              
            <Share />
            <Service />
            <Providing />
            <Faq />
            <Portfolio />
            <Team />
            <Funfact />
            <Video />
            <Testimonial />
            <Cta />
        </Layout>
        </>
    )
}