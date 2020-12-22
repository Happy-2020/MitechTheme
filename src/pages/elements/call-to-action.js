import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import SectionOne from '../../containers/global/cta-area/section-one'
import SectionTwo from '../../containers/global/cta-area/section-two'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Call To Action" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Call To Action"
            />
            <main className="site-wrapper-reveal">
                <SectionOne/>
                <SectionTwo/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default ButtonPage
 