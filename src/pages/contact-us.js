import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import CTAArea from '../containers/global/cta-area/section-one'
import ContactFormArea from '../containers/contact-us/contact-form-area'
import ContactInfoArea from '../containers/contact-us/contact-info-area'

const ContactUsPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Contact Us"/>
        <Header/>
        <PageHeader 
            pageContext={pageContext} 
            location={location}
            title="Contact Us"
        />
        <main className="site-wrapper-reveal">
            <ContactFormArea/>
            <ContactInfoArea/>
            <CTAArea/>
        </main>
        <Footer/>
    </Layout>
  )
   
  export default ContactUsPage