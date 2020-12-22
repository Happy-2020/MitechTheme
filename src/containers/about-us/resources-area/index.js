import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import Image from '../../../components/image'
import {ResourcesWrapper, LeftBox, ImageBox} from './resources-area.style'

const Resources = ({sectionTitleStyle}) => {
    const resources = useStaticQuery(graphql `
        query AboutResourcesQuery {
            resource: aboutUsJson(id: {eq: "about-page-resources"}) {
                title
                subtitle
                download_link
                image {
                    childImageSharp {
                        fluid(maxWidth: 436, maxHeight: 369, quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
            bgImage: file(relativePath: {eq: "images/bg/cybersecurity-global-image.png"}) {
                childImageSharp {
                    fluid(maxWidth: 780, maxHeight: 746, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                    }
                }
            }
        }
    `)
    const {title, subtitle, download_link, image} = resources.resource;
    const ImageData = resources.bgImage.childImageSharp.fluid;
    return (
        <ResourcesWrapper fluid={ImageData}>
            <Container fluid>
                <Row alignitems="center">
                    <Col lg={{span: 6, order: 1}} xs={{order: 2, span: 12}}>
                        <LeftBox>
                            {(title || subtitle) && (
                                <SectionTitle
                                    {...sectionTitleStyle}
                                    title={title}
                                    subtitle={subtitle}
                                />
                            )}
                            {download_link && <Button to={download_link} hover="2">Download now (3MB)</Button>}
                        </LeftBox>
                    </Col>
                    <Col lg={{span: 6, order: 2}} xs={{order: 1, span: 12}}>
                        {image.childImageSharp.fluid && (
                            <ImageBox>
                                <Image fluid={image.childImageSharp.fluid} alt={title}/>
                            </ImageBox>
                        )}
                    </Col>
                </Row>
            </Container>
        </ResourcesWrapper>
    )
}

Resources.propTypes = {
    sectionTitleStyle: PropTypes.object
}

Resources.defaultProps = {
    sectionTitleStyle: {
        align: "left",
        mb: "30px",
        responsive: {
            medium: {
                align: "center"
            }
        }
    }
}

export default Resources;