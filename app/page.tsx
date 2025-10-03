import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Cta from "@/components/sections/home1/Cta"
import Blog from "@/components/sections/home1/Blog"
import Working from "@/components/sections/home1/Working"
import Faq from "@/components/sections/home1/Faq"
import Brand from "@/components/sections/home1/Brand"
import Feature from "@/components/sections/home1/Feature"
import Process from "@/components/sections/home1/Process"
import Portfolio from "@/components/sections/home1/Portfolio"
import Funfact from "@/components/sections/home1/Funfact"
import Newsletter from "@/components/sections/home1/Newsletter"

export default function Home() {

    return (
        <>
        <div className="dark-version">
            <Layout headerStyle={1} footerStyle={1} headTitle="Home" breadcrumbTitle="" wrapperCls="">
                <Banner />
                <Brand />
                <Feature />
                <About />
                <Process />
                <Service />
                <Working />
                <Portfolio />
                <Faq />
                <Cta />
                <Funfact />
                <Blog />
                <Newsletter />
            </Layout>
        </div>

        </>
    )
}