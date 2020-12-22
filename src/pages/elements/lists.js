import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/lists/section-one'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="List Item" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="List Item"
            />
            <main className="site-wrapper-reveal">
                <SectionOne/>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default ButtonPage
 