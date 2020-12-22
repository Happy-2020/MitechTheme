import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Image from '../../../components/image'
import {
    PluginsWrap, 
    ImageWrap, 
    PluginsTextWrap, 
    FeaturesWrap,
    IconBoxWrap,
    IconBoxImage,
    IconBoxContent} from './plugins.style'

const CaseStudy = ({titleStyle, textStyle}) => {
    const pluginsData = useStaticQuery(graphql `
        query PluginQuery {
            landingJson(id: {eq: "plugins"}) {
                id
                image {
                    childImageSharp {
                        fluid(maxWidth: 724, maxHeight: 708, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                        }
                    }
                }
                features {
                    title
                    desc
                    icon {
                        childImageSharp {
                            fixed(width: 86, height: 86) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                }
            }
            file(relativePath: {eq: "images/bg/mitech-landing-header-preview-bg.png"}) {
                childImageSharp {
                    fluid(maxWidth: 656, maxHeight: 595, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }      
    `);
    const data = pluginsData.landingJson;
    const imageFluid = data.image.childImageSharp.fluid;
    const features = data.features;
    const bgImage = pluginsData.file.childImageSharp.fluid;

    return (
        <PluginsWrap fluid={bgImage}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <PluginsTextWrap>
                            {features.map((feature, i) => {
                                return (
                                    <FeaturesWrap key={`features-${i}`}>
                                        <IconBoxWrap>
                                            <IconBoxImage>
                                                <Img fixed={feature.icon.childImageSharp.fixed} alt={feature.title}/>
                                            </IconBoxImage>
                                            <IconBoxContent>
                                                <Heading {...titleStyle}>{feature.title}</Heading>
                                                <Text {...textStyle}>{feature.desc}</Text>
                                            </IconBoxContent>
                                        </IconBoxWrap>
                                    </FeaturesWrap>
                                )
                            })}
                        </PluginsTextWrap>
                    </Col>
                    <Col lg={6}>
                        <ImageWrap>
                            <Image
                                alt={data.id}
                                fluid={imageFluid}
                                align="left"
                            />
                        </ImageWrap>
                    </Col>
                </Row>
            </Container>
        </PluginsWrap>
    )
}

CaseStudy.propTypes = {
    titleStyle: PropTypes.object
}

CaseStudy.defaultProps = {
    titleStyle: {
        as:"h5"
    },
    textStyle: {
        mt: '10px'
    }
}

export default CaseStudy;