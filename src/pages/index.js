import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-four'
import Footer from '../containers/layout/footer/footer-two'
import Hero from '../containers/landing/hero'
import Feature from '../containers/landing/feature'
import Demos from '../containers/landing/demo-area'
import InnerDemos from '../containers/landing/inner-demo-area'
import CaseStudy from '../containers/landing/case-study'
import HeaderLayout from '../containers/landing/header-layout'
import BlogLayout from '../containers/landing/blog-layout'
import Plugins from '../containers/landing/plugins'
import ExtraFeature from '../containers/landing/extra-features'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <SEO/>
    <Header transparent/>
    <main className="site-wrapper-reveal">
      <Hero/>
      <Feature/>
      <Demos/>
      <InnerDemos/>
      <CaseStudy/>
      <HeaderLayout/>
      <BlogLayout/>
      <Plugins/>
      <ExtraFeature/>
    </main>
    <Footer/>
  </Layout>
)
 
export default IndexPage
