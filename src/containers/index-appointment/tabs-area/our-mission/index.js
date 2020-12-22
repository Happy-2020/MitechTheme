import React, { useState } from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser';
import { MdDone, MdChevronRight } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from '../../../../components/ui/wrapper'
import VideoButton from '../../../../components/ui/video-button'
import ModalVideo from '../../../../components/ui/modal-video'
import Text from '../../../../components/ui/text'
import Button from '../../../../components/ui/button'
import List, { ListItem } from '../../../../components/ui/list'
import Image from '../../../../components/image'
import { OurMissionWrap, OurMissionImageWrap, MissionContentWrap, VideoBtnWrap, ButtonWrap } from './our-mission.style'

const OurMission = ({ textStyle, buttonStyle }) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDataQuery {
            indexAppointmentJson(id: {eq: "appointment-about-us"}) {
                about_content {
                    link
                    list
                    text
                    video_link
                    video_preview {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 570, maxHeight: 350) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                                aspectRatio
                            }
                        }
                    }
                }
            }
        }
    `)
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    const { about_content } = aboutQueryData.indexAppointmentJson;
    const { video_link } = about_content;
    const video_arr = video_link.split('=', -1);
    const video_id = video_arr[1];

    return (
        <OurMissionWrap>
            <Row>
                <Col lg={6}>
                    <OurMissionImageWrap>
                        <Image fluid={about_content.video_preview.childImageSharp.fluid} alt="Our Mission" align="left" />
                        <VideoBtnWrap>
                            <VideoButton skin="primary" onClick={modalVideoOpen} />
                        </VideoBtnWrap>
                    </OurMissionImageWrap>
                </Col>
                <Col lg={{ span: 5, offset: 1 }}>
                    <MissionContentWrap>
                        {about_content.text && <Text {...textStyle}>{parse(about_content.text)}</Text>}
                        {about_content.list && (
                            <List layout="check">
                                {about_content.list.map((item, i) => (
                                    <ListItem key={`list-item-${i}`}>
                                        <span className="icon"><MdDone /></span>
                                        <span>{item}</span>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                        {about_content.link && (
                            <ButtonWrap>
                                <Button {...buttonStyle} icon={<MdChevronRight />}>Let's get started </Button>
                            </ButtonWrap>
                        )}
                    </MissionContentWrap>
                </Col>
            </Row>
            <ModalVideo
                channel='youtube'
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </OurMissionWrap>
    )
}

OurMission.propTypes = {
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object
}

OurMission.defaultProps = {
    textStyle: {
        fontSize: '18px',
        mb: '30px'
    },
    buttonStyle: {
        varient: 'texted',
        fontWeight: 400,
        hover: "false"
    }
}

export default OurMission;