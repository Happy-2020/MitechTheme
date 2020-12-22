import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import IntroArea from '../containers/our-history/intro-area'
import HistoryArea from '../containers/our-history/history-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const HistoryPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Our History" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Our History"
        />
        <main className="site-wrapper-reveal">
            <IntroArea />
            <HistoryArea />
            <ContactArea />
        </main>
        <Footer />
    </Layout>
)

export default HistoryPage
