import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import ServiceBox from '../../../components/box-icon/layout-one'
import {SectionWrap} from './services-area.style'

const ServicesArea = ({sectionTitleStyle, servicBoxStyle}) => {
    const servicesData = useStaticQuery(graphql `
        query ResolutionsServicesQuery {
            indexResolutionsJson(id: {eq: "resolutions-services-content"}) {
                title
                subtitle
            }
            allItServicesJson(sort: {order: DESC, fields: id}, limit: 8) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        id
                        title
                        excerpt
                        icon {
                            svg {
                                publicURL
                            }
                        }
                    }
                }
            }
        }   
    `);
    const {title, subtitle} = servicesData.indexResolutionsJson;
    const services = servicesData.allItServicesJson.edges;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={subtitle}
                        />
                    </Col>
                </Row>
                <Row>
                    {services.map(service => (
                        <Col xl={3} lg={4} md={6} key={service.node.fields.slug}>
                            <ServiceBox
                                {...servicBoxStyle}
                                id={service.node.id}
                                icon={service.node.icon}
                                title={service.node.title}
                                desc={service.node.excerpt}
                                path={`/it-service/${service.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.defaultProps = {
    sectionTitleStyle: {
        mb: '30px',
        responsive: {
            small: {
                mb: '20px'
            }
        }
    },
    servicBoxStyle: {
        boxStyles: {
            mt: '30px'
        }
    }
}

export default ServicesArea
