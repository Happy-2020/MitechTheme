import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import parse from 'html-react-parser';
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {CaseStudyWrap, ImageWrap, CaseStudyTextWrap, ButtonWrap} from './case-study.style'
 
const CaseStudy = ({titleStyle, textStyle}) => {
    const caseData = useStaticQuery(graphql `
    query CaseQuery {
        landingJson(id: {eq: "caseStudy"}) {
          title
          path
          desc
          image {
            childImageSharp {
              fluid(maxWidth: 922, maxHeight: 760, quality: 100){
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
    }      
    `);
    const data = caseData.landingJson;
    const imageFluid = data.image.childImageSharp.fluid;
    
    return (
        <CaseStudyWrap>
            <Container fluid>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <ImageWrap>
                            <Image
                                alt={data.title}
                                fluid={imageFluid}
                                align="right"
                            />
                        </ImageWrap>
                    </Col>
                    <Col lg={6}>
                        <CaseStudyTextWrap>
                            <Heading {...titleStyle}>{parse(data.title)}</Heading>
                            <Text {...textStyle}>{parse(data.desc)}</Text>
                            <ButtonWrap>
                                <Button as={Link} to={data.path}>Find out more</Button>
                            </ButtonWrap>
                        </CaseStudyTextWrap>
                    </Col>
                </Row>
            </Container>
        </CaseStudyWrap>
    )
}

CaseStudy.propTypes = {
    titleStyle: PropTypes.object
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