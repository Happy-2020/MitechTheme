import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import { Container, Box, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Image from '../../components/image'
import VideoButton from '../../components/ui/video-button'
import ModalVideo from '../../components/ui/modal-video'
import BoxIcon from '../../components/box-icon/layout-three'
import CTA from '../../containers/global/cta-area/section-one'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionWrap from '../../components/ui/accordion'
import {
    BannerArea,
    BannerTextWrap,
    IntroArea,
    FaqArea,
    VideoBoxWrap,
    VideoBtnWrap,
    FeatureArea
} from './it-solution-template.style'

const ServiceTemplate = ({ data, location, ...restProps }) => {
    const pageData = data.itSolutionsJson;
    let bannerImg;
    if (pageData.banner_image) {
        bannerImg = pageData.banner_image.childImageSharp.fluid;
    }
    const {
        titleStyle,
        taglineStyle,
        introTextStyles: { leftHeading, rightHeading, rightText },
        featureStyels: { featureTitle } } = restProps;

    const [videoOpen, setVideoOpen] = useState(false);

    if (pageData.video) {
        var { video_link } = pageData.video;
        var video_arr = video_link.split('=', -1);
        var video_id = video_arr[1];
    }
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return (
        <Layout location={location}>
            <SEO title={pageData.title} />
            <Header />
            <main className="site-wrapper-reveal">
                {(pageData.title || pageData.tagline) && (
                    <BannerArea fluid={bannerImg}>
                        <Container>
                            <Row justify="center">
                                <Col lg={8}>
                                    <BannerTextWrap>
                                        {pageData.title && <Heading {...titleStyle}>{pageData.title}</Heading>}
                                        {pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
                                    </BannerTextWrap>
                                </Col>
                            </Row>
                        </Container>
                    </BannerArea>
                )}
                {pageData.introText && (
                    <IntroArea>
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    <Heading {...leftHeading}>Learn More About Our <span> Success <br /> Stories</span></Heading>
                                </Col>
                                {pageData.introText && (
                                    <Col lg={{ span: 7, offset: 1 }}>
                                        <Box>
                                            {pageData.introText.heading && <Heading {...rightHeading}>{parse(pageData.introText.heading)}</Heading>}
                                            {pageData.introText.text && <Text {...rightText}>{parse(pageData.introText.text)}</Text>}
                                        </Box>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </IntroArea>
                )}
                {(pageData.faq || pageData.video) && (
                    <FaqArea>
                        <Container>
                            <Row>
                                {pageData.faq && (
                                    <Col lg={6} pr="3rem">
                                        <AccordionWrap layout="two">
                                            <Accordion allowZeroExpanded preExpanded={[pageData.faq[0].id]}>
                                                {
                                                    pageData.faq.map((el, index) => {
                                                        return (
                                                            <AccordionItem id={el.id} key={el.id}>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton>
                                                                        {el.title}
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                    <p>{el.desc}</p>
                                                                </AccordionItemPanel>
                                                            </AccordionItem>
                                                        )
                                                    })
                                                }
                                            </Accordion>
                                        </AccordionWrap>
                                    </Col>
                                )}
                                {pageData.video && (
                                    <Col lg={6}>
                                        <VideoBoxWrap>
                                            {pageData.video.preview_image && <Image fluid={pageData.video.preview_image.childImageSharp.fluid} alt="Video preview" align="left" />}
                                            <VideoBtnWrap>
                                                <VideoButton skin="primary" onClick={modalVideoOpen} />
                                            </VideoBtnWrap>
                                        </VideoBoxWrap>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </FaqArea>
                )}
                {pageData.features && (
                    <FeatureArea>
                        <Container>
                            {pageData.features.title && (
                                <Row>
                                    <Col col="12">
                                        <Heading {...featureTitle}>{pageData.features.title}</Heading>
                                    </Col>
                                </Row>
                            )}
                            {pageData.features.items && (
                                <Row>
                                    {pageData.features.items.map(feature => (
                                        <Col lg={6} key={feature.id}>
                                            <BoxIcon
                                                title={feature.title}
                                                icon={feature.icon}
                                                desc={feature.desc}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </Container>
                    </FeatureArea>
                )}
                <CTA />
            </main>
            <ModalVideo
                channel='youtube'
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        itSolutionsJson(fields: {slug: {eq: $slug}}){
            title
            id
            tagline
            banner_image{
                childImageSharp{
                  fluid(maxWidth: 1920, maxHeight: 570, quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
            }
            introText{
                heading
                text
            }
            faq{
                id
                title
                desc
            }
            video{
                preview_image{
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 570, maxHeight: 350) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                    }
                }
                video_link
            }
            features {
                title
                items {
                    id
                    title
                    icon{
                        childImageSharp {
                            fixed(quality: 100, width: 60, height: 60) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                    desc
                }
            }
        }
    }
`;

ServiceTemplate.propTypes = {
    introTextStyles: PropTypes.object,
    titleStyle: PropTypes.object,
    taglineStyle: PropTypes.object,
    featureStyels: PropTypes.object
}

ServiceTemplate.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: '#fff',
        mb: '15px'
    },
    taglineStyle: {
        as: 'h5',
        fontweight: 400,
        color: '#fff'
    },
    introTextStyles: {
        leftHeading: {
            as: 'h3',
            mt: '25px',
            fontSize: '38px',
            child: {
                color: 'primary'
            },
            responsive: {
                large: {
                    fontSize: '30px'
                },
                medium: {
                    mt: 0,
                    mb: '20px',
                    fontSize: '28px'
                },
                small: {
                    fontSize: '24px'
                }
            }
        },
        rightHeading: {
            as: 'h5',
            position: 'relative',
            pl: '34px',
            lineheight: 1.67,
            fontweight: 800,
            layout: 'quote',
            child: {
                color: 'primary'
            },
        },
        rightText: {
            mt: '15px',
            fontSize: '18px',
            ml: '34px',
            color: '#696969'
        }
    },
    featureStyels: {
        featureTitle: {
            as: 'h3',
            textalign: 'center',
            mb: '20px'
        }
    }
}

export default ServiceTemplate;