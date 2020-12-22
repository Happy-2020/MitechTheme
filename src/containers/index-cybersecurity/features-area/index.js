import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import BoxIcon from '../../../components/box-icon/layout-two'
import {ServicesWrapper} from './features-area.style'

const Services = ({sectionTitleStyle}) => {
    const servicesData = useStaticQuery(graphql `
      query CybersecurityFeaturesQuery {
          indexCybersecurityJson(id: {eq: "cybersecurity-feature-content"}) {
              title
              subtitle
          }
          allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}) {
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
 
    const secdata = servicesData.indexCybersecurityJson;
    const services = servicesData.allItServicesJson.edges;

    return(
        <ServicesWrapper>
          <Container>
            <Row>
              <Col lg={12}>
                <SectionTitle
                  {...sectionTitleStyle}
                  subtitle={secdata.subtitle}
                  title={secdata.title}
                />
              </Col>
            </Row>
            <Row>
              {services.map(feature => {
                  return(
                    <Col lg={4} md={6} key={feature.node.id}>
                      <BoxIcon
                        id={feature.node.id}
                        title={feature.node.title}
                        desc={feature.node.excerpt}
                        icon={feature.node.icon}
                        path={`/it-service/${feature.node.fields.slug}`}
                      />
                    </Col>
                  )
              })}
            </Row>
          </Container>
        </ServicesWrapper>
    )
}

Services.propTypes = {
    sectionTitleStyle: PropTypes.object,
    buttonOneStyle: PropTypes.object,
    buttonTwoStyle: PropTypes.object
}

Services.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
          small: {
            mb: '30px'
          }
        }
    }
}

export default Services;