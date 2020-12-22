import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import JobsArea from '../containers/careers/jobs-area'
import GalleryArea from '../containers/careers/gallery-area'
import ContactArea from '../containers/global/contact-area/contact-one'

const CareersPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Careers" />
        <Header />
        <PageHeader
            pageContext={pageContext}
            location={location}
            title="Careers"
        />
        <main className="site-wrapper-reveal">
            <JobsArea />
            <GalleryArea />
            <ContactArea />
        </main>
        <Footer />
    </Layout>
)

export default CareersPage