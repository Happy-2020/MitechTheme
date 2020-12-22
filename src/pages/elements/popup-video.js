import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import PopupArea from '../../containers/elements/popup-video'
import CTA from '../../containers/global/cta-area/section-one'

const PopupVideoPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Popup Video" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Popup Video"
            />
            <main className="site-wrapper-reveal">
                <PopupArea />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default PopupVideoPage
