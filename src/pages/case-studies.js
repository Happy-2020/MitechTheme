import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import CaseStudyArea from '../containers/global/case-study-area'
import CTAArea from '../containers/global/cta-area/section-one'

const CaseStudiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Case Studies"/>
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Case Studies"
    />
    <main className="site-wrapper-reveal">
        <CaseStudyArea/>
        <CTAArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default CaseStudiesPage
 