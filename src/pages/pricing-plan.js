import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import PricingTab from '../containers/pricing-plan'
import ContactArea from '../containers/global/contact-area/contact-two'

const PricingPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Our Pricing Plan" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Our Pricing Plan"
        />
        <main className="site-wrapper-reveal">
            <PricingTab />
            <ContactArea />
        </main>
        <Footer />
    </Layout>
)

export default PricingPage
