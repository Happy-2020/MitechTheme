import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/it-solutions/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'

const ITServicePage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="IT Solutions" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="IT Solutions"
    />
    <main className="site-wrapper-reveal">
        <ServicesArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default ITServicePage
 