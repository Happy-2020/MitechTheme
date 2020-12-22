import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import ServiceBox from '../../../components/box-large-image/layout-one'
import { SectionWrap, SectionBottom } from './services-area.style'

const ServicesArea = ({ btnStyle, btnTwoStyle }) => {
    const serviceData = useStaticQuery(graphql`
        query ProcessingServiceQuery {
            indexProcessingJson(id: {eq: "processing-service-content"}) {
                title
                subtitle
                service_link
                contact_link
            }
            allItSolutionsJson(limit: 3) {
                edges {
                    node {
                        title
                        excerpt
                        fields {
                            slug
                        }
                        image {
                            childImageSharp {
                                fluid(maxWidth: 370, maxHeight: 370, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                    }
                }
            }
        }      
    `)
    const { title, subtitle, service_link, contact_link } = serviceData.indexProcessingJson;
    const services = serviceData.allItSolutionsJson.edges;

    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            title={title}
                            subtitle={subtitle}
                        />
                    </Col>
                </Row>
                <Row gutters={{ xl: 70 }}>
                    {services.map(service => (
                        <Col lg={4} md={6} className="box-item" key={service.node.fields.slug}>
                            <ServiceBox
                                title={service.node.title}
                                desc={service.node.excerpt}
                                imageSrc={service.node.image.childImageSharp}
                                path={`/it-solution/${service.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <SectionBottom>
                            {service_link && <Button {...btnStyle} to={service_link}>Learn More</Button>}
                            {contact_link && <Button {...btnStyle} {...btnTwoStyle} to={contact_link}>Contact Us</Button>}
                        </SectionBottom>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.propTypes = {
    btnStyle: PropTypes.object,
    btnTwoStyle: PropTypes.object
}

ServicesArea.defaultProps = {
    btnStyle: {
        m: '10px'
    },
    btnTwoStyle: {
        varient: 'outlined'
    }
}

export default ServicesArea
