import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import parse from 'html-react-parser';
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {HeaderLayoutWrap, ImageWrap, HeaderLayoutTextWrap, ButtonWrap} from './header-layout.style'

const CaseStudy = ({titleStyle, textStyle}) => {
    const headerData = useStaticQuery(graphql `
        query HeaderQuery {
            landingJson(id: {eq: "headerLayout"}) {
                title
                path
                desc
                id
                image {
                    childImageSharp {
                        fluid(maxWidth: 726, maxHeight: 435, quality: 100) {
                            presentationWidth
                            presentationHeight
                            ...GatsbyImageSharpFluid_tracedSVG
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
    const data = headerData.landingJson;
    const imageFluid = data.image.childImageSharp.fluid;
    const bgImage = headerData.file.childImageSharp.fluid

    return (
        <HeaderLayoutWrap fluid={bgImage}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <HeaderLayoutTextWrap>
                            <Heading {...titleStyle}>{parse(data.title)}</Heading>
                            <Text {...textStyle}>{parse(data.desc)}</Text>
                            <ButtonWrap>
                                <Button as={Link} to={data.path}>Find out more</Button>
                            </ButtonWrap>
                        </HeaderLayoutTextWrap>
                    </Col>
                    <Col lg={6}>
                        <ImageWrap>
                            <Image
                                alt={data.title}
                                fluid={imageFluid}
                            />
                        </ImageWrap>
                    </Col>
                </Row>
            </Container>
        </HeaderLayoutWrap>
    )
}

CaseStudy.propTypes = {
    titleStyle: PropTypes.object,
    textStyle: PropTypes.object
}

CaseStudy.defaultProps = {
    titleStyle: {
        as:"h3",
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        mt: '30px'
    }
}

export default CaseStudy;