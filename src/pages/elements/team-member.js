import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import CTA from '../../containers/global/cta-area/section-one'
import SectionOne from '../../containers/elements/team-member/section-one'
import SectionTwo from '../../containers/elements/team-member/section-two'

const TeamPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Team Member" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Team Member"
            />
            <main className="site-wrapper-reveal">
                <SectionOne />
                <SectionTwo />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default TeamPage
