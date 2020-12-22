import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Anchor from '../../../components/ui/anchor'
import ServiceBox from '../../../components/box-large-image/layout-two'
import {SectionWrap, SectionBottom} from './services-area.style'

const OurServices = ({bottomLinkStyle}) => {
    const servicesData = useStaticQuery(graphql `
        query CybersecurityServicesQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-service-content"}) {
                bottom_text
                bottom_link_text
                path
            }
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
                        fluid(maxWidth: 480, maxHeight: 298, quality: 100) {
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
    const {bottom_text, bottom_link_text, path} = servicesData.indexCybersecurityJson;
    const services = servicesData.allItServicesJson.edges;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {services.map((service, i) => {
                        return(
                            <Col key={service.node.id} className="box-item" lg={4} md={6}>
                                <ServiceBox
                                    title={service.node.title}
                                    desc={service.node.excerpt}
                                    imageSrc={service.node.image.childImageSharp}
                                    path={`/it-service/${service.node.fields.slug}`}
                                />
                            </Col>
                        )
                    })}
                    
                </Row>
                <Row>
                    <Col lg={12}>
                        {bottom_text && (
                            <SectionBottom> 
                                {bottom_text} 
                                {bottom_link_text && <Anchor {...bottomLinkStyle} path={path}>{bottom_link_text}</Anchor>}
                            </SectionBottom>
                        )}
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

OurServices.propTypes = {
    bottomLinkStyle: PropTypes.object
}

OurServices.defaultProps = {
    bottomLinkStyle: {
        ml: '5px',
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default OurServices;