import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Box } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import VideoButton from '../../../components/ui/video-button'
import ModalVideo from '../../../components/ui/modal-video'
import { SectionWrap } from './video-area.style'

const VideoArea = ({ sectionStyle, titleStyle }) => {
    const infoTechVideoDataQuery = useStaticQuery(graphql`
        query infotechnoVideoQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-video-content"}) {
                title
                bgImage{
                    childImageSharp{
                        fluid(maxWidth: 1920, maxHeight: 600, quality: 100){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                video_link
            }
        }
    `);
    const imageData = infoTechVideoDataQuery.indexInfotechnoJson.bgImage.childImageSharp.fluid;
    const { title, video_link } = infoTechVideoDataQuery.indexInfotechnoJson;
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    return (
        <Fragment>
            <SectionWrap fluid={imageData}>
                <Container>
                    <Row>
                        <Col lg={6} md={10} xs={11} ml="auto">
                            <Box>
                                {title && <Heading {...titleStyle}>{parse(title)}</Heading>}
                                {video_link && (
                                    <VideoButton
                                        skin="primary"
                                        textStyle={2}
                                        onClick={modalVideoOpen}
                                        text="Watch Video <br/> Intro"
                                    />
                                )}
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </SectionWrap>
            <ModalVideo
                channel='youtube'
                videoId='L61p2uyiMSo'
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

VideoArea.propTypes = {
    sectionStyle: PropTypes.object,
    titleStyle: PropTypes.object
}

VideoArea.defaultProps = {
    sectionStyle: {

    },
    titleStyle: {
        lineHeight: 1.34,
        fontweight: 600,
        color: '#fff',
        mb: '65px'
    }
}

export default VideoArea;