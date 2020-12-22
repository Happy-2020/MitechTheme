import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import AboutArea from '../containers/index-processing/about-area'
import FeaturesArea from '../containers/index-processing/features-area'
import FunFactArea from '../containers/global/funfact-area/section-three'
import CTAArea from '../containers/index-processing/cta-area'
import ServicesArea from '../containers/index-processing/services-area'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import ContactArea from '../containers/global/contact-area/contact-three'

const IndexProcessing = ({ location }) => (
  <Layout location={location}>
    <SEO title="Processing" />
    <Header />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <AboutArea />
      <FeaturesArea />
      <FunFactArea />
      <CTAArea />
      <ServicesArea />
      <TestimonialArea />
      <ClientsArea />
      <ContactArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexProcessing
