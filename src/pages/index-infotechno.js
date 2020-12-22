import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import Hero from '../containers/index-infotechno/hero'
import ClientsArea from '../containers/global/clients-area'
import FeaturesArea from '../containers/index-infotechno/features-area'
import AboutArea from '../containers/index-infotechno/about-area'
import ServicesArea from '../containers/index-infotechno/services-area'
import AboutServiceWrap from '../containers/index-infotechno/about-service-wrap'
import FunFactArea from '../containers/global/funfact-area/section-two'
import VideoArea from '../containers/index-infotechno/video-area'
import CaseStudyArea from '../containers/index-infotechno/case-study-area'
import TestimonialArea from '../containers/global/testimonial-area/section-two'
import BlogArea from '../containers/index-infotechno/blog-area'
import ContactArea from '../containers/index-infotechno/contact-area'

const IndexInfoTechno = ({ location }) => {
    return (
        <Layout location={location}>
            <SEO title="Infotechno" />
            <Header />
            <main className="site-wrapper-reveal">
                <Hero />
                <ClientsArea />
                <FeaturesArea />
                <AboutServiceWrap>
                    <AboutArea />
                    <ServicesArea />
                </AboutServiceWrap>
                <FunFactArea />
                <VideoArea />
                <CaseStudyArea />
                <TestimonialArea />
                <BlogArea />
                <ContactArea />
            </main>
            <Footer />
        </Layout>
    )
}

export default IndexInfoTechno; 