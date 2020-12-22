import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import ButtonSection from '../../containers/elements/button/button-section'

const ButtonPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Buttons" />
            <Header/>
            <PageHeader 
                pageContext={pageContext} 
                location={location}
                title="Buttons"
            />
            <main className="site-wrapper-reveal">
                <ButtonSection/>
                <CTA/>
            </main>
            <Footer/>
        </Layout>
    )
}

export default ButtonPage
 