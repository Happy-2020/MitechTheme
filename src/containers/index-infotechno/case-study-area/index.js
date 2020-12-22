import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import CaseStudyBox from '../../../components/box-large-image/layout-two'
import SwiperSlider from '../../../components/ui/swiper'
import { SectionWrap } from './case-study-area.style'

const CaseStudyArea = ({
    sectionStyle,
    sectionTitleStyle,
    bottomBoxStyle,
    bottomTextStyle,
    bottoTextLinkStyle,
    caseStudyStyles,
    slider,
    sliderStyle }) => {
    const caseStudyData = useStaticQuery(graphql`
    query InfoTechCaseStudyQuery {
        indexInfotechnoJson(id: {eq: "infotechno-case-study-content"}) {
            id
            title
            subtitle
            bottom_text
            bottom_link_text
            bottom_link
            bgImage {
                childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
        }
        allCaseStudiesJson(filter: {is_featured: {eq: true}}, limit: 4) {
            edges {
              node {
                fields{
                    slug
                }
                id
                title
                category
                excerpt
                image{
                  childImageSharp {
                    fluid(maxWidth: 480, maxHeight: 298, quality: 100){
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        presentationWidth
                        presentationHeight
                    }
                  }
                }
              }
            }
        }
      } 
    `);
    const caseStudySecData = caseStudyData.indexInfotechnoJson;
    const caseStudies = caseStudyData.allCaseStudiesJson.edges;
    const imageData = caseStudySecData.bgImage.childImageSharp.fluid;

    return (
        <SectionWrap fluid={imageData}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={caseStudySecData.title}
                            subtitle={caseStudySecData.subtitle}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {caseStudies.map(caseStudy => (
                                <div className="item" key={caseStudy.node.fields.slug}>
                                    <CaseStudyBox
                                        {...caseStudyStyles}
                                        imageSrc={caseStudy.node.image.childImageSharp}
                                        title={caseStudy.node.title}
                                        category={caseStudy.node.category}
                                        desc={caseStudy.node.excerpt}
                                        path={`/case-study/${caseStudy.node.fields.slug}`}
                                        btnText="View case study"
                                    />
                                </div>
                            ))}
                        </SwiperSlider>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Text {...bottomTextStyle}>
                            {caseStudySecData.bottom_text}
                            <Anchor {...bottoTextLinkStyle} path={caseStudySecData.bottom_link}>{caseStudySecData.bottom_link_text}</Anchor>
                        </Text>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

CaseStudyArea.propTypes = {
    sectionStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object,
    bottomTextStyle: PropTypes.object,
    bottoTextLinkStyle: PropTypes.object
}

CaseStudyArea.defaultProps = {
    sectionTitleStyle: {
        mb: '40px',
        responsive: {
            small: {
                mb: '27px'
            }
        }
    },
    bottomTextStyle: {
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333',
        mt: '60px',
        align: 'center',
        responsive: {
            small: {
                mt: '45px'
            }
        }
    },
    bottoTextLinkStyle: {
        fontWeight: 500,
        layout: 'underline',
        hover: {
            layout: 2
        }
    },
    slider: {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    sliderStyle: {
        pagination: {
            bottom: 0
        }
    },
    caseStudyStyles: {
        boxStyle: {
            mt: '20px',
            mb: '35px',
            ml: '15px',
            mr: '15px'
        },
        contentBoxStyle: {
            pt: '25px',
            pl: '26px',
            pr: '26px',
            textalign: 'left'
        },
        headingStyle: {
            as: 'h6',
            fontweight: 600,
            mb: '2px'
        },
        descStyle: {
            mb: 0,
            mt: '13px'
        }
    }
}

export default CaseStudyArea;