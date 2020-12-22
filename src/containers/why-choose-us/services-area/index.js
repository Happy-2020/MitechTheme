import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Anchor from '../../../components/ui/anchor'
import ServiceBox from '../../../components/box-large-image/layout-one'
import { SectionWrap, SectionBottom } from './style'

const ServicesArea = (props) => {
    const featuredDataQuery = useStaticQuery(graphql`
        query WhyChooseServicesQueryData {
            allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: false}}) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    id
                    title
                    excerpt
                    image {
                      childImageSharp {
                        fluid(maxWidth: 370, maxHeight: 370, quality: 100, webpQuality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                      }
                    }
                  }
                }
            }
        }
    `);

    const servicesData = featuredDataQuery.allItServicesJson.edges;
    const { anchorStyle } = props
    return (
        <SectionWrap>
            <Container>
                <Row gutters={{ lg: 70 }}>
                    {servicesData.map(service => (
                        <Col lg={4} md={6} className="box-item" key={service.node.id}>
                            <ServiceBox
                                title={service.node.title}
                                desc={service.node.excerpt}
                                imageSrc={service.node.image.childImageSharp}
                                path={`/it-service/${service.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <SectionBottom>
                            <Anchor {...anchorStyle} path="/it-services">Learn more about how we work</Anchor>
                        </SectionBottom>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.propTypes = {
    anchorStyle: PropTypes.object
}

ServicesArea.defaultProps = {
    anchorStyle: {
        color: 'primary',
        layout: 'underline',
        fontSize: '18px',
        fontWeight: 500,
        lineheight: 1.40,
        hover: {
            layout: 2
        }
    }
}

export default ServicesArea;