import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-resolutions/hero-area'
import FeaturesArea from '../containers/index-resolutions/features-area'
import FunFactArea from '../containers/index-resolutions/funfact-area'
import ServicesArea from '../containers/index-resolutions/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../containers/index-resolutions/whats-new-area'
import CTAArea from '../containers/global/cta-area/section-one'
import ClientsArea from '../containers/global/clients-area'


const IndexServices = ({ location, pageFromCMS }) => (
  <Layout location={location}>
    <SEO title="Resolutions" />
    <Header transparent />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <FeaturesArea />
      <FunFactArea />
      <ServicesArea />
      <ContactArea />
      <TestimonialArea />
      <WhatsnewArea />
      <CTAArea />
      <ClientsArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexServices
