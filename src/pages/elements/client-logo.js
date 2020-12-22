import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/client-logo/section-one'
import SectionTwo from '../../containers/elements/client-logo/section-two'
import SectionThree from '../../containers/elements/client-logo/section-three'
import SectionFour from '../../containers/elements/client-logo/section-four'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Client Logo" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Client Logo"
            />
            <main className="site-wrapper-reveal">
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <SectionFour/>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default ButtonPage
 