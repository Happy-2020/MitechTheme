import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import TypedText from '../../containers/elements/typed-text'

const TypedTextPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Typed Text" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Typed Text"
            />
            <main className="site-wrapper-reveal">
                <TypedText />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default TypedTextPage
