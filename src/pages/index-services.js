import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-services/hero-area'
import FeaturesArea from '../containers/index-services/features-area'
import AboutArea from '../containers/index-services/about-area'
import ServicesArea from '../containers/index-services/services-area'
import GradationArea from '../containers/index-services/gradation-area'
import CtaArea from '../containers/global/cta-area/section-one'
import CaseStudyArea from '../containers/index-services/case-study-area'
import PricingArea from '../containers/index-services/pricing-area'
import BlogArea from '../containers/index-services/blog-area'
import ContactArea from '../containers/global/contact-area/contact-four'
import ClientsArea from '../containers/global/clients-area'

const IndexServices = ({ location }) => (
  <Layout location={location}>
    <SEO title="Services" />
    <Header />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <AboutArea />
      <ServicesArea />
      <GradationArea />
      <CtaArea />
      <CaseStudyArea />
      <PricingArea />
      <BlogArea />
      <ContactArea />
      <ClientsArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexServices
