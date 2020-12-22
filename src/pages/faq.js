import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import FaqSectionOne from '../containers/faq/section-one'
import FaqSectionTwo from '../containers/faq/section-two'
import ContactArea from '../containers/global/contact-area/contact-one'

const FAQPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Faq" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Faq"
        />
        <main className="site-wrapper-reveal">
            <FaqSectionOne />
            <FaqSectionTwo />
            <ContactArea />
        </main>
        <Footer />
    </Layout>
)

export default FAQPage