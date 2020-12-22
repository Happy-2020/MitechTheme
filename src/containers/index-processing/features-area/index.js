import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Anchor from '../../../components/ui/anchor'
import Text from '../../../components/ui/text'
import ServiceBox from '../../../components/box-image/layout-two'
import { SectionWrap, SectionBottom } from './features-area.style'

const FeaturesArea = ({ featureStyle, anchorStyle, textStyle }) => {
    const featuresData = useStaticQuery(graphql`
        query ProcessingFeatureQuery {
            indexProcessingJson(id: {eq: "processing-features-content"}) {
                title
                subtitle
            }
            allItSolutionsJson(filter: {is_featured: {eq: true}}) {
                edges {
                    node {
                        title
                        fields {
                            slug
                        }
                        icon {
                            img {
                                childImageSharp {
                                    fixed(width: 80, height: 83, quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const { title, subtitle } = featuresData.indexProcessingJson;
    const services = featuresData.allItSolutionsJson.edges;

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
                <Row>
                    {services.map(service => (
                        <Col lg={4} md={6} key={service.node.fields.slug}>
                            <ServiceBox
                                {...featureStyle}
                                imageSrc={service.node.icon.img.childImageSharp}
                                title={service.node.title}
                                path={`/it-solution/${service.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <SectionBottom>
                            <Text {...textStyle}>
                                Challenges are just opportunities in disguise. <Anchor {...anchorStyle} path="/it-solutions">Take the challenge!</Anchor>
                            </Text>
                        </SectionBottom>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

FeaturesArea.propTypes = {
    serviceStyle: PropTypes.object,
    anchorStyle: PropTypes.object
}

FeaturesArea.defaultProps = {
    featureStyle: {
        mt: "60px",
        responsive: {
            small: {
                mt: "47px"
            }
        }
    },
    textStyle: {
        color: 'headingColor',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40
    },
    anchorStyle: {
        color: 'primary',
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default FeaturesArea
