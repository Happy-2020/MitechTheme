import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import { Container, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Sidebar from '../../containers/blog/sidebar'
import CTA from '../../containers/global/cta-area/section-one'
import Blog from '../../components/blog/layout-two'
import { AuthorWrapper, BlogBoxWrapper, BlogBox } from './author-template.style'

const AuthorTemplate = ({ data, pageContext, location, ...restProps }) => {
    const { headingStyle } = restProps;
    const blogs = data.allMarkdownRemark.edges;
    const author = data.authorsJson.name;
    return (
        <Layout location={location}>
            <SEO title={`Author: ${author}`} />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title={`Author: ${author}`}
            />
            <main className="site-wrapper-reveal">
                <AuthorWrapper>
                    <Container>
                        <Row>
                            <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                                <Sidebar />
                            </Col>
                            <Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
                                <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading>
                                <BlogBoxWrapper>
                                    {blogs.map(blog => (
                                        <BlogBox key={blog.node.fields.slug}>
                                            <Blog content={blog.node} />
                                        </BlogBox>
                                    ))}
                                </BlogBoxWrapper>
                            </Col>
                        </Row>
                    </Container>
                </AuthorWrapper>
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query BlogByAuthorQuery($author: String!){
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            filter: {fields: {authorId: {eq: $author}}}
        ) {
            edges {
                node {
                    frontmatter {
                        categories
                        title
                        author {
                            name
                            image {
                                childImageSharp {
                                    fixed(width: 32, height: 32, quality: 100) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                        format
                        quote_text
                        quote_author
                        video_link
                        date(formatString: "LL")
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 770, maxHeight: 420, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                    }
                    fields {
                        slug
                        dateSlug
                        authorId
                    }
                    excerpt
                }
            }
        }
        authorsJson(fields: {authorId: {eq: $author}}){
            name
        } 
    }
`;


AuthorTemplate.propTypes = {
    headingStyle: PropTypes.object
}

AuthorTemplate.defaultProps = {
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

export default AuthorTemplate;