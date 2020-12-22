import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import TeamArea from '../containers/leadership/team-area'
import TeamListArea from '../containers/leadership/team-list-area'
import ContactArea from '../containers/global/contact-area/contact-one'

const LeadershipPage = ({ pageContext, location }) => (
    <Layout location={location}>
        <SEO title="Leadership"/>
        <Header/>
        <PageHeader 
            pageContext={pageContext} 
            location={location}
            title="Leadership"
        />
        <main className="site-wrapper-reveal">
            <TeamArea/>
            <TeamListArea/>
            <ContactArea/>
        </main>
        <Footer/>
    </Layout>
  )
   
  export default LeadershipPage