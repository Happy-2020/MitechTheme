import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import {Container, Row, Col} from 'react-bootstrap'
import Heading from '../../../components/ui/heading'
import Button from '../../../components/ui/button'
import {HeroWrapper, HeroWrapperText, PreviewInnerImg} from './hero.style'

const Hero = ({headingSecondary, headingPrimary, buttonStyle}) => {
    const heroData = useStaticQuery(graphql `
        query LandingHeroQuery {
            landingJson(id: {eq: "landing-hero-content"}) {
                title
                subtitle
                bgImage {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 1080, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                image1 {
                    childImageSharp {
                        fluid(maxWidth: 939, maxHeight: 696, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image2 {
                    childImageSharp {
                        fluid(maxWidth: 337, maxHeight: 383, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image3 {
                    childImageSharp {
                        fluid(maxWidth: 119, maxHeight: 184, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image4 {
                    childImageSharp {
                        fluid(maxWidth: 435, maxHeight: 360, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
                image5 {
                    childImageSharp {
                        fluid(maxWidth: 356, maxHeight: 68, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        }    
    `);
    const {title, subtitle, bgImage, image1, image2, image3, image4, image5} = heroData.landingJson;
    return(
        <HeroWrapper fluid={bgImage.childImageSharp.fluid}>
            <Container fluid className="xp-150">
                <Row className="align-items-center h-100">
                    <Col lg={6}>
                        <HeroWrapperText>
                            {subtitle && <Heading {...headingSecondary}>{subtitle}</Heading>}
                            {title && <Heading {...headingPrimary}>{title}</Heading>}
                            <Button {...buttonStyle}>Browse demos</Button>
                        </HeroWrapperText>
                    </Col>
                    <Col lg={6}>
                        <PreviewInnerImg>
                            <Img fluid={image1.childImageSharp.fluid} className="img-fluid min-img animation_images one wow fadeInDown" alt="Preview Hero"/>
                        </PreviewInnerImg>
                    </Col>
                </Row>
                <Img fluid={image2.childImageSharp.fluid} className="img-fluid pr-img-01 animation_images two wow fadeInDown" alt="Preview Hero"/>
                <Img fluid={image3.childImageSharp.fluid} className="img-fluid pr-img-02 animation_images two wow fadeInDown" alt="Preview Hero"/>
                <Img fluid={image4.childImageSharp.fluid} className="img-fluid pr-img-03 animation_images two wow fadeInDown" alt="Preview Hero"/>
                <Img fluid={image5.childImageSharp.fluid} className="img-fluid pr-img-04 animation_images two wow fadeInDown" alt="Preview Hero"/>
            </Container>
        </HeroWrapper>
    )
}
 
Hero.propTypes = {
    headingSecondary: PropTypes.object,
    headingPrimary: PropTypes.object
}

Hero.defaultProps = {
    headingSecondary: {
        as: 'h6',
        color: 'secondary',
        letterspacing: '2px',
        fontweight: 700,
        fontSize: '16px',
        texttransform: 'uppercase',
        mb: '30px'
    },
    headingPrimary: {
        as: 'h2',
        color: '#fff',
        fontweight: 500,
        mb: '30px'
    },
    buttonStyle: {
        to: '#section-demos',
        skin: 'light',
        mt: '40px',
        responsive: {
            xlarge: {
                mt: '10px'
            }
        }
    }
}

export default Hero;