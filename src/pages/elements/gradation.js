import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import Gradation from '../../containers/elements/gradation'
import CTA from '../../containers/global/cta-area/section-one'

const GoogleMapPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Gradation" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Gradation"
            />
            <main className="site-wrapper-reveal">
                <Gradation />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default GoogleMapPage
