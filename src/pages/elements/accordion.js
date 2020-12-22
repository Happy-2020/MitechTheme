import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/accordion/section-one'
import SectionTwo from '../../containers/elements/accordion/section-two'

const AccordionsPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Accordions" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Accordions"
            />
            <main className="site-wrapper-reveal">
                <SectionOne/>
                <SectionTwo/>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default AccordionsPage
