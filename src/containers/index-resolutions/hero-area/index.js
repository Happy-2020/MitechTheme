import React, {Fragment, useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { MdPlayArrow } from "react-icons/md";
import {Container, Row, Col} from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import ModalVideo from '../../../components/ui/modal-video'
import {HeroWrapper, HeroContent, HeroBtnGroup, HeroSeparator} from './hero-area.style'

const HeroArea = (props) => {
    const heroData = useStaticQuery(graphql `
        query ResolutionsHeroQuery {
            indexResolutionsJson(id: {eq: "resolutions-hero-content"}) {
                title
                subtitle
                text
                link
                video_link
                bg_image {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 890, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const {title, subtitle, text, bg_image, link, video_link} = heroData.indexResolutionsJson;
    const {subtitleStyle, titleStyle, textStyle, btnStyle, consult_btn, work_btn} = props;
    let video_arr, video_id, video_channel;
    if(video_link){
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
            <HeroWrapper fluid={bg_image.childImageSharp.fluid}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <HeroContent>
                                {subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
                                {title && <Heading {...titleStyle}>{title}</Heading>}
                                {text && <Text {...textStyle}>{text}</Text>}
                                <HeroBtnGroup>
                                    {link && <Button {...btnStyle} {...consult_btn}>Free Consultation</Button>}
                                    {video_link && <Button onClick={modalVideoOpen} icon={<MdPlayArrow/>} {...btnStyle} {...work_btn}>How We Work</Button>}
                                </HeroBtnGroup>
                            </HeroContent>
                        </Col>
                    </Row>
                </Container>
                <HeroSeparator>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                    </svg>
                </HeroSeparator>
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

HeroArea.defaultProps = {
    subtitleStyle: {
        as: 'h3',
        color: '#fff',
        mb: '20px',        
        responsive: {
            large: {
                fontSize: '30px'
            },
            small: {
                fontSize: '22px'
            }
        }
    },
    titleStyle: {
        as: 'h1',
        fontSize: '120px',
        color: '#fff',
        lineHeight: 1.09,
        mb: '30px',
        responsive: {
            xlarge: {
                fontSize: '100px'
            },
            large: {
                fontSize: '80px'
            },
            medium: {
                fontSize: '60px'
            },
            small: {
                fontSize: '50px'
            },
            xsmall: {
                fontSize: '40px',
                mb: '20px'
            }
        }
    },
    textStyle: {
        color: '#fff',
        fontWeight: 500
    },
    btnStyle: {
        m: '10px',
        fontSize: '14px'
    },
    consult_btn: {
        hover: "2"
    },
    work_btn: {
        skin: "light",
        color: "primary",
        iconposition: "left",
        display: "inline-flex",
        alignitems: "center",
        icondistance: "4px"
    }
}

export default HeroArea
