import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../containers/about-us/page-header'
import AboutArea from '../containers/about-us/about-area'
import ServicesArea from '../containers/about-us/services-area'
import ResourcesArea from '../containers/about-us/resources-area'
import SolutionsArea from '../containers/about-us/solutions-area'
import FunFactArea from '../containers/global/funfact-area/section-one'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import ClientsArea from '../containers/global/clients-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About Us" />
    <Header />
    <main className="site-wrapper-reveal">
      <PageHeader />
      <AboutArea />
      <ServicesArea />
      <ResourcesArea />
      <SolutionsArea />
      <FunFactArea />
      <TestimonialArea />
      <ClientsArea />
      <ContactArea />
    </main>
    <Footer />
  </Layout>
)

export default AboutPage
