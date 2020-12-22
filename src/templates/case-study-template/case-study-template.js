import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import { Container, Box, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Text from '../../components/ui/text'
import Icon from '../../components/ui/icon'
import Image from '../../components/image'
import VideoButton from '../../components/ui/video-button'
import ModalVideo from '../../components/ui/modal-video'
import Social, { SocialLink } from '../../components/ui/social'
import TestimonialSection from '../../containers/global/testimonial-area/section-one'
import CTA from '../../containers/global/cta-area/section-one'
import PostNav from '../../components/post-nav/layout-one'
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
    OverviewArea,
    ClientBox,
    MetaBox,
    ProblemArea,
    ProblemBox,
    ProblemTextBox,
    ResultArea,
    FaqArea,
    VideoBoxWrap,
    VideoBtnWrap,
    NavigationArea,
    Navigtion
} from './case-study-template.style'

const CaseStudyTemplate = ({ data, pageContext: { next, previous }, location, ...restProps }) => {
    const pageData = data.caseStudiesJson;
    let bannerImg;
    if (pageData.banner_image) {
        bannerImg = pageData.banner_image.childImageSharp.fluid;
    }
    const { overview, problem_solution, results, faq, video } = pageData;
    const {
        taglineStyle,
        overviewStyles: { overviewHeading, clientName, metaHeading },
        social,
        problemSolStyles: { problemHeading, problemIcon },
        resultStyles: { resultText } } = restProps;

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
            <Header />
            <SEO title={pageData.title} />
            <main className="site-wrapper-reveal">
                {(pageData.title || pageData.tagline) && (
                    <BannerArea fluid={bannerImg}>
                        <Container>
                            <Row justify="center">
                                <Col lg={10}>
                                    <BannerTextWrap>
                                        {pageData.logo && <Img fixed={pageData.logo.childImageSharp.fixed} alt={pageData.title} />}
                                        {pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
                                    </BannerTextWrap>
                                </Col>
                            </Row>
                        </Container>
                    </BannerArea>
                )}
                {overview && (
                    <OverviewArea>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <Heading as="h3" mb="30px">Overview</Heading>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={5}>
                                    {overview.heading && <Heading {...overviewHeading}>{overview.heading}</Heading>}
                                    {overview.client && (
                                        <ClientBox>
                                            <Heading {...clientName}>{overview.client.name}</Heading>
                                            <Text>
                                                <Text as="span">/ {overview.client.designation}</Text>
                                                <Text as="span">- {overview.client.company}</Text>
                                            </Text>
                                        </ClientBox>
                                    )}
                                </Col>
                                <Col lg={7}>
                                    {overview.short_desc && <Text>{overview.short_desc}</Text>}
                                    {overview.tags && (
                                        <MetaBox>
                                            <Heading {...metaHeading}>Tags</Heading>
                                            <Box>
                                                {overview.tags.map((tag, i) => <span key={`tag-${i}`}>{tag}</span>)}
                                            </Box>
                                        </MetaBox>
                                    )}
                                    <MetaBox boxtype="share-box">
                                        <Heading {...metaHeading}>Share</Heading>
                                        <Social {...social}>
                                            <SocialLink path="https://www.twitter.com" title="twitter"><FaTwitter /></SocialLink>
                                            <SocialLink path="https://www.facebook.com" title="facebook"><FaFacebookF /> </SocialLink>
                                            <SocialLink path="https://www.linkedin.com" title="linkedin"><FaLinkedinIn /></SocialLink>
                                        </Social>
                                    </MetaBox>
                                </Col>
                            </Row>
                        </Container>
                    </OverviewArea>
                )}
                {problem_solution && (
                    <ProblemArea>
                        <Container>
                            <Row>
                                <Col md={4}>
                                    <Heading as="h4" mb="50px">Requirements</Heading>
                                </Col>
                                <Col md={{ span: 7, offset: 1 }}>
                                    <Heading as="h4" mb="50px">Our solution</Heading>
                                </Col>
                            </Row>
                            {problem_solution.map(item => (
                                <ProblemBox key={item.id}>
                                    <Row>
                                        <Col md={4}>
                                            <ProblemTextBox>
                                                <Icon {...problemIcon} iconName="fal fa-long-arrow-right" />
                                                <Heading {...problemHeading}>{item.problem}</Heading>
                                            </ProblemTextBox>
                                        </Col>
                                        <Col md={{ span: 7, offset: 1 }}>
                                            <ProblemTextBox>
                                                <Icon {...problemIcon} iconName="fal fa-check" />
                                                <Text>{item.solution}</Text>
                                            </ProblemTextBox>
                                        </Col>
                                    </Row>
                                </ProblemBox>
                            ))}
                        </Container>
                    </ProblemArea>
                )}
                {results && (
                    <ResultArea>
                        <Container>
                            <Row>
                                <Col lg={3}>
                                    <Heading>Results:</Heading>
                                </Col>
                                <Col lg={9}>
                                    <Text {...resultText}>{results}</Text>
                                </Col>
                            </Row>
                        </Container>
                    </ResultArea>
                )}
                {(faq || video) && (
                    <FaqArea>
                        <Container>
                            <Row>
                                {faq && (
                                    <Col lg={6} pr="3rem">
                                        <AccordionWrap layout="two">
                                            <Accordion allowZeroExpanded preExpanded={[faq[0].id]}>
                                                {
                                                    faq.map((el, index) => {
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
                                {video && (
                                    <Col lg={6}>
                                        <VideoBoxWrap>
                                            {video.preview_image && <Image fluid={video.preview_image.childImageSharp.fluid} alt="Video preview" align="left" />}
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
                <TestimonialSection />
                <NavigationArea>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Navigtion>
                                    {previous && (
                                        <PostNav
                                            rel="prev"
                                            slug={previous.fields.slug}
                                            title={previous.title}
                                            image={previous.image.childImageSharp.fixed}
                                        />
                                    )}
                                    {next && (
                                        <PostNav
                                            rel="next"
                                            slug={next.fields.slug}
                                            title={next.title}
                                            image={next.image.childImageSharp.fixed}
                                        />
                                    )}
                                </Navigtion>
                            </Col>
                        </Row>
                    </Container>
                </NavigationArea>
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
        caseStudiesJson(fields: {slug: {eq: $slug}}){
            title
            tagline
            logo{
                childImageSharp{
                    fixed(width: 83, height: 108, quality: 100){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            banner_image{
                childImageSharp{
                  fluid(maxWidth: 1920, maxHeight: 570, quality: 100){
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                  }
                }
            }
            overview {
                heading
                short_desc
                tags
                client {
                    name
                    designation
                    company
                }
            }
            problem_solution {
                id
                problem
                solution
            }
            results
            faq {
                id
                title
                desc
            }
            video {
                video_link
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
            }
        }
    }
`;

CaseStudyTemplate.propTypes = {
    bannerStyle: PropTypes.object,
    taglineStyle: PropTypes.object,
    overviewStyles: PropTypes.object,
    social: PropTypes.object,
    problemSolStyles: PropTypes.object,
    resultStyles: PropTypes.object,
    faqStyles: PropTypes.object,
    navigation: PropTypes.object
}

CaseStudyTemplate.defaultProps = {
    taglineStyle: {
        as: 'h1',
        mt: '20px',
        mb: '15px',
        color: '#fff'
    },
    overviewStyles: {
        overviewHeading: {
            as: 'h5',
            fontSize: '28px',
            lineHeight: 1.43,
            fontweight: 400,
            color: '#002fa6',
        },
        clientName: {
            as: 'h6',
            fontweight: '500',
            mb: '.25rem'
        },
        metaHeading: {
            texttransform: 'uppercase',
            fontweight: 500,
            fontSize: '14px',
            letterspacing: '1px',
            color: '#333'
        }
    },
    social: {
        color: '#ababab',
        fontSize: '15px',
        tooltip: true,
        tooltip_position: 'bottom-left'
    },
    problemSolStyles: {
        problemHeading: {
            as: 'h6',
            position: 'relative',
            fontSize: '15px',
            fontweight: 500,
            lineHeight: 1.74,
            mb: '20px'
        },
        problemIcon: {
            fontSize: '18px',
            fontweight: 400,
            pr: '15px',
            mt: '5px'
        }
    },
    resultStyles: {
        resultText: {
            fontSize: '24px'
        }
    }
}

export default CaseStudyTemplate;