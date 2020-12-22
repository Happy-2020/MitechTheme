import React from "react"
import Layout from '../containers/layout/layout'
import SEO from "../components/seo"
import ErrorArea from '../containers/error-area'

const NotFoundPage = ({location}) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <ErrorArea/>
  </Layout>
)

export default NotFoundPage
