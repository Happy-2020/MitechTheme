import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/box-large-image/section-one'
import SectionTwo from '../../containers/elements/box-large-image/section-two'
import SectionThree from '../../containers/elements/box-large-image/section-three'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Box large Image" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Box large Image"
            />
            <main className="site-wrapper-reveal">
                <SectionOne/>
                <SectionTwo/>
                <SectionThree/>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default ButtonPage
 