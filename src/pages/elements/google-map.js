import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import SectionOne from '../../containers/elements/google-map/section-one'
import SectionTwo from '../../containers/elements/google-map/section-two'
import CTA from '../../containers/global/cta-area/section-one'

const GoogleMapPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Google Map" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Google Map"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default GoogleMapPage
