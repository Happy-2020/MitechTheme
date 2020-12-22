import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import PricingBoxOne from '../../containers/elements/pricing-table/section-one'
import PricingBoxTwo from '../../containers/elements/pricing-table/section-two'
import CTA from '../../containers/global/cta-area/section-one'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Pricing Box" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Pricing Box"
            />
            <main className="site-wrapper-reveal">
                <PricingBoxOne />
                <PricingBoxTwo />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default ButtonPage
