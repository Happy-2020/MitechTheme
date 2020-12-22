import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import VideoButton from '../../../components/ui/video-button'
import Image from '../../../components/image'
import ModalVideo from '../../../components/ui/modal-video'
import { HeroWrapper, HeroBtnGroup, HeroTextBox, ImageBox } from './hero-area.style'

const HeroArea = (props) => {
    const HeroData = useStaticQuery(graphql`
        query ProcessingHeroQuery {
            indexProcessingJson(id: {eq: "processing-hero-content"}) {
                title
                subtitle
                text
                link
                video_link
                bg_image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 768, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
                image {
                    childImageSharp {
                      fluid(maxWidth: 601, maxHeight: 715, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
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

    const { title, subtitle, text, link, video_link, bg_image, image } = HeroData.indexProcessingJson;
    const { subtitleStyle, titleStyle, textStyle, btnStyle, videoBtnStyle } = props;
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    return (
        <Fragment>
            <HeroWrapper fluid={bg_image.childImageSharp.fluid}>
                <Container>
                    <Row alignitems="center">
                        <Col lg={8} md={7}>
                            <HeroTextBox>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{parse(title)}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button to={link} {...btnStyle}>Free Sample</Button>}
                                    {video_link && <VideoButton onClick={modalVideoOpen} {...videoBtnStyle} text="How we work" />}
                                </HeroBtnGroup>
                            </HeroTextBox>
                        </Col>
                        <Col lg={4} md={5}>
                            <ImageBox>
                                <Image fluid={image.childImageSharp.fluid} />
                            </ImageBox>
                        </Col>
                    </Row>
                </Container>
            </HeroWrapper>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

HeroArea.propTypes = {
    subtitleStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    textStyle: PropTypes.object,
    btnStyle: PropTypes.object,
    videoBtnStyle: PropTypes.object
}

HeroArea.defaultProps = {
    subtitleStyle: {
        as: "h6",
        lineHeight: '36px',
        letterspacing: '3px',
        fontWeight: 700,
        color: '#ffffff',
        texttransform: 'uppercase',
        mb: '20px',
        responsive: {
            xsmall: {
                fontSize: '16px',
                letterspacing: '1px',
            }
        }
    },
    titleStyle: {
        as: "h1",
        color: '#ffffff',
        fontweight: 500,
        fontSize: '68px',
        letterspacing: 0,
        lineHeight: 1.2,
        mb: '15px',
        child: {
            color: 'secondary'
        },
        responsive: {
            xlarge: {
                fontSize: '60px'
            },
            large: {
                fontSize: '46px'
            },
            medium: {
                fontSize: '40px'
            },
            small: {
                fontSize: '34px'
            },
            xsmall: {
                fontSize: '28px'
            }
        }
    },
    textStyle: {
        color: '#ffffff',
        lineHeight: '32px',
        fontweight: 500,
        fontSize: '18px',
        responsive: {
            xsmall: {
                fontSize: '16px',
                lineHeight: '26px'
            }
        }
    },
    btnStyle: {
        skin: 'secondary',
        hover: "2",
        mr: "20px",
        responsive: {
            xsmall: {
                m: '10px'
            }
        }
    },
    videoBtnStyle: {
        wave: "false",
        size: "small",
        skin: "light",
        varient: "outlined",
        icon: {
            color: '#fff'
        }
    }
}

export default HeroArea;