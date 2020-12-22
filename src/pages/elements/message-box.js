import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import MessageBoxSection from '../../containers/elements/message-box'
import CTA from '../../containers/global/cta-area/section-one'

const MessageBoxPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="List Item" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="List Item"
            />
            <main className="site-wrapper-reveal">
                <MessageBoxSection />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default MessageBoxPage
