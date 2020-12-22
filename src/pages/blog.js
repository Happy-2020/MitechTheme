import React from 'react'
import PropTypes from 'prop-types'
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-one'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import Section, { Row, Col } from '../components/ui/wrapper'
import Heading from '../components/ui/heading'
import Sidebar from '../containers/blog/sidebar'
import BlogArea from '../containers/blog/blog-area'
import CTA from '../containers/global/cta-area/section-one'

const BlogListLargeImage = ({ pageContext, location, ...restProps }) => {
    const { sectionStyle, headingStyle } = restProps;
    return (
        <Layout location={location}>
            <SEO title="Blogs" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Blog Update"
            />
            <main className="site-wrapper-reveal">
                <Section {...sectionStyle}>
                    <Row>
                        <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                            <Sidebar />
                        </Col>
                        <Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
                            <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading>
                            <BlogArea />
                        </Col>
                    </Row>
                </Section>
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}


BlogListLargeImage.propTypes = {
    sectionStyle: PropTypes.object
}

BlogListLargeImage.defaultProps = {
    sectionStyle: {
        pt: '89px',
        pb: '100px',
        responsive: {
            medium: {
                pt: '72px',
                pb: '80px'
            },
            small: {
                pt: '53px',
                pb: '60px'
            }
        }
    },
    headingStyle: {
        as: 'h3',
        mb: '70px',
        textalign: 'center',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default BlogListLargeImage;