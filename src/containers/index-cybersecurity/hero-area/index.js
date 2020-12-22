import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import parse from 'html-react-parser'
import Heading from '../../../components/ui/heading'
import Button from '../../../components/ui/button'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Image from '../../../components/image'
import {HeroWrapper, HeroContent, HeroImagesWrap, HeroImageOne, HeroImageTwo} from './hero-area.style'

const HeroArea = (props) => {
    const heroData = useStaticQuery(graphql `
        query CybersecurityHeroQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-hero-content"}) {
                title
                subtitle
                path
                imageOne {
                    childImageSharp {
                        fluid(maxWidth: 779, maxHeight: 746, srcSetBreakpoints: 6, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                imageTwo {
                    childImageSharp {
                        fluid(maxWidth: 513, maxHeight: 583, srcSetBreakpoints: 6, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    `)
    const {title, subtitle, path, imageOne, imageTwo} = heroData.indexCybersecurityJson;
    const {subtitleStyle, titleStyle} = props;
    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignitems="center">
                    <Col lg={6} md={7}>
                        <HeroContent>
                            {subtitle && <Heading {...subtitleStyle}>{parse(subtitle)}</Heading>}
                            {title && <Heading {...titleStyle}>{parse(title)}</Heading>}
                            {path && <Button hover="2" to={path}>Dig deeper now</Button>}
                        </HeroContent>
                    </Col>
                    <Col lg={6} md={5}>
                        <HeroImagesWrap>
                            <HeroImageOne>
                                <Image className="worldRotate" fluid={imageOne.childImageSharp.fluid} alt="Hero Pattern"/>
                            </HeroImageOne>
                            <HeroImageTwo>
                                <Image fluid={imageTwo.childImageSharp.fluid} alt="Hero"/>
                            </HeroImageTwo>
                        </HeroImagesWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    )
}

HeroArea.defaultProps = {
    subtitleStyle: {
        as: 'h6',
        texttransform: 'uppercase',
        letterspacing: '3px',
        fontWeight: 700,
        fontSize: '14px',
        mb: '20px'
    },
    titleStyle: {
        as: 'h3',
        mb: '30px',
        child: {
            color: 'primary'
        }
    }
}

export default HeroArea
