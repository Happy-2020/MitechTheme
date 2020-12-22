import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import { HeroWrapper, HeroTextBox } from './hero-area.stc'

const HeroArea = (props) => {
    const HeroData = useStaticQuery(graphql`
        query ServicesHeroQuery {
            indexServicesJson(id: {eq: "services-hero-contnet"}) {
                title
                subtitle
                path
                desc
                bg_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 768, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    `)
    const { title, subtitle, path, desc, bg_image } = HeroData.indexServicesJson;
    const { titleStyle, subtitleStyle, descStyle, btnStyle } = props
    return (
        <HeroWrapper fluid={bg_image.childImageSharp.fluid}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <HeroTextBox>
                            {title && <Heading {...titleStyle}>{title}</Heading>}
                            {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                            {path && <Button {...btnStyle} to={path}>IT Services</Button>}
                            {desc && <Text {...descStyle}>{desc}</Text>}
                        </HeroTextBox>
                    </Col>
                </Row>
            </Container>
        </HeroWrapper>
    )
}

HeroArea.propTypes = {
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object,
    descStyle: PropTypes.object,
    btnStyle: PropTypes.object
}

HeroArea.defaultProps = {
    titleStyle: {
        as: "h3",
        lineHeight: '36px',
        mb: '20px',
        color: '#fff'
    },
    subtitleStyle: {
        as: "h1",
        color: '#ffffff',
        fontSize: '120px',
        lineHeight: 1.09,
        mb: "30px",
        responsive: {
            large: {
                fontSize: '100px'
            },
            medium: {
                fontSize: '80px'
            },
            small: {
                fontSize: '70px'
            },
            xsmall: {
                fontSize: '40px'
            }
        }
    },
    btnStyle: {
        hover: "false",
        size: 'large'
    },
    descStyle: {
        mt: '30px',
        fontSize: '15px',
        fontWeight: 500,
        color: '#fff'
    }
}

export default HeroArea
