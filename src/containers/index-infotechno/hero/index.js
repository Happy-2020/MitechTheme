import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import { HeroWrapper, HeroTextBox, ImageBoxWrap, ImageBoxOne, ImageBoxTwo } from './hero-area.style'

const HeroArea = (props) => {
    const heroDataQuery = useStaticQuery(graphql`
        query heroQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-hero-content"}) {
                title
                subtitle
                shortDesc
                path
                image1 {
                    childImageSharp {
                        fluid(maxWidth: 521, maxHeight: 502, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                image2 {
                    childImageSharp {
                        fluid(maxWidth: 706, maxHeight: 743, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    `);
    const { title, subtitle, shortDesc, path, image1, image2 } = heroDataQuery.indexInfotechnoJson;
    const { subtitleStyle, titleStyle, btnStyle } = props;

    return (
        <HeroWrapper>
            <Container fluid>
                <Row alignitems="center">
                    <Col md={6}>
                        <HeroTextBox>
                            {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                            {title && <Heading {...titleStyle}>{parse(title)}</Heading>}
                            {shortDesc && <Text>{shortDesc}</Text>}
                            {path && <Button {...btnStyle} to={path}>Get Details</Button>}
                        </HeroTextBox>
                    </Col>
                    <Col md={6}>
                        <ImageBoxWrap>
                            {image1 && (
                                <ImageBoxOne>
                                    <Image fluid={image1.childImageSharp.fluid} align="left" alt="Infotechno" />
                                </ImageBoxOne>
                            )}
                            {image2 && (
                                <ImageBoxTwo>
                                    <Image fluid={image2.childImageSharp.fluid} align="left" alt="Infotechno" />
                                </ImageBoxTwo>
                            )}
                        </ImageBoxWrap>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    )
}

HeroArea.propTypes = {
    subtitleStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    btnStyle: PropTypes.object
}

HeroArea.defaultProps = {
    subtitleStyle: {
        as: 'h6',
        color: 'primary',
        fontweight: 500,
        mb: '20px'
    },
    titleStyle: {
        as: 'h1',
        mb: '15px',
        fontweight: 500
    },
    btnStyle: {
        hover: '2',
        mt: '15px'
    }
}

export default HeroArea;