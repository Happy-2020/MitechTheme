import React, { Fragment, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Image from '../../../components/image'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import VideoButton from '../../../components/ui/video-button'
import ModalVideo from '../../../components/ui/modal-video'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import GridLine from '../../../components/grid-line'
import {
    AboutAreaWrap,
    AboutTextBox,
    AboutImageBox,
    ImageBox1,
    ImageBox2,
    ImageBox3,
    ImageBox4,
    MainImageBox,
    VideoBtnWrap
} from './about-area.style'

const AboutArea = ({ sectionTitleStyle, btnStyle }) => {
    const AboutData = useStaticQuery(graphql`
        query ServicesAboutQuery {
            indexServicesJson(id: {eq: "services-about-contnet"}) {
                title
                subtitle
                desc
                path
                video_link
                image1 {
                    childImageSharp {
                        fluid(maxWidth: 310, maxHeight: 190, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                image2 {
                    childImageSharp {
                        fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                image3 {
                    childImageSharp {
                        fluid(maxWidth: 188, maxHeight: 115, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                image4 {
                    childImageSharp {
                        fluid(maxWidth: 190, maxHeight: 190, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
                main_image {
                    childImageSharp {
                        fluid(maxWidth: 570, maxHeight: 350, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const { title, subtitle, desc, path, video_link, image1, image2, image3, image4, main_image } = AboutData.indexServicesJson;

    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const [videoOpen, setVideoOpen] = useState(false);
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return (
        <Fragment>
            <AboutAreaWrap>
                <Container fluid>
                    <GridLine />
                    <Row alignitems="center">
                        <Col lg={6}>
                            <AboutTextBox>
                                <SectionTitle
                                    {...sectionTitleStyle}
                                    title={title}
                                    subtitle={subtitle}
                                />
                                {desc && <Text>{desc}</Text>}
                                {path && <Button {...btnStyle} to={path}>Find Out More</Button>}
                            </AboutTextBox>
                        </Col>
                        <Col lg={6}>
                            <AboutImageBox>
                                {image1 && (
                                    <ImageBox1 className="animation_image one">
                                        <Image fluid={image1.childImageSharp.fluid} isAbsolute alt="About Banner" />
                                    </ImageBox1>
                                )}
                                {image2 && (
                                    <ImageBox2 className="animation_image two">
                                        <Image fluid={image2.childImageSharp.fluid} isAbsolute alt="About Banner" />
                                    </ImageBox2>
                                )}
                                {main_image && (
                                    <MainImageBox>
                                        <Image fluid={main_image.childImageSharp.fluid} alt="About Banner" />
                                        {video_link && (
                                            <VideoBtnWrap>
                                                <VideoButton
                                                    skin="primary"
                                                    onClick={modalVideoOpen}
                                                />
                                            </VideoBtnWrap>
                                        )}
                                    </MainImageBox>
                                )}
                                {image3 && (
                                    <ImageBox3 className="animation_image three">
                                        <Image fluid={image3.childImageSharp.fluid} isAbsolute alt="About Banner" />
                                    </ImageBox3>
                                )}
                                {image4 && (
                                    <ImageBox4 className="animation_image four">
                                        <Image fluid={image4.childImageSharp.fluid} isAbsolute alt="About Banner" />
                                    </ImageBox4>
                                )}
                            </AboutImageBox>
                        </Col>
                    </Row>
                </Container>
            </AboutAreaWrap>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

AboutArea.propTypes = {
    sectionTitleStyle: PropTypes.object,
    btnStyle: PropTypes.object
}

AboutArea.defaultProps = {
    sectionTitleStyle: {
        mb: '30px',
        align: 'left'
    },
    btnStyle: {
        hover: "2",
        mt: "41px",
        responsive: {
            medium: {
                mt: '35px'
            }
        }
    }
}

export default AboutArea;