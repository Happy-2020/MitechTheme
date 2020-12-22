import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import SkillArea from '../containers/why-choose-us/our-skills'
import ServicesArea from '../containers/why-choose-us/services-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const WhyChooseUsPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Why Choose Us" />
    <Header />
    <PageHeader
      pageContext={pageContext}
      location={location}
      title="Why Choose Us"
    />
    <main className="site-wrapper-reveal">
      <SkillArea />
      <ServicesArea />
      <ContactArea />
    </main>
    <Footer />
  </Layout>
)

export default WhyChooseUsPage
