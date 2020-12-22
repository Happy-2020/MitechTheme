import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import FeatureBox from '../../../components/box-image/layout-five'
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {SectionWrap} from './features-area.style'

const FeaturesArea = ({headingStyle, linkStyle, featureBoxStyle}) => {
    const featureData = useStaticQuery(graphql `
        query ResolutionsFeaturesQuery {
            allItServicesJson(filter: {is_featured: {eq: true}}, limit: 3) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        title
                        excerpt
                        icon {
                            img_two {
                                childImageSharp {
                                    fixed(width: 100, height: 98, quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                            img_hover {
                                childImageSharp {
                                    fixed(width: 100, height: 98, quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    `);
    const features = featureData.allItServicesJson.edges
    return (
        <SectionWrap>
            <Container>
                <Row>
                    {features.map(feature => (
                        <Col lg={4} md={6} key={feature.node.fields.slug}>
                            <FeatureBox
                                {...featureBoxStyle}
                                imageSrc={feature.node.icon.img_two.childImageSharp}
                                hoverImg={feature.node.icon.img_hover.childImageSharp}
                                title={feature.node.title}
                                desc={feature.node.excerpt}
                                path={`/it-service/${feature.node.fields.slug}`}
                            />
                        </Col>
                    ))}
                    
                </Row>
                <Row>
                    <Col lg={12}>
                        <Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

FeaturesArea.defaultProps = {
    featureBoxStyle: {
        boxStyle: {
            mt: '30px'
        }
    },
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '60px',
        textalign: 'center',
        responsive: {
            small: {
                mt: '45px'
            }
        }
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default FeaturesArea
