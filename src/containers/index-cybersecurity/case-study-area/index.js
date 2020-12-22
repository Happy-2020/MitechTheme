import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { truncateString } from '../../../utils/utilFunctions'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Swiper from '../../../components/ui/swiper'
import Image from '../../../components/image'
import { SectionWrap, CaseInfo, CaseTitle, CaseCat, CaseText, CaseImage } from './case-study-area.style'

const CaseStudyArea = (props) => {
    const caseData = useStaticQuery(graphql`
        query CybersecurityCaseStudyQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-case-content"}) {
                title
                subtitle
              }
            allCaseStudiesJson(limit: 2) {
                edges {
                    node {
                        title
                        id
                        fields {
                            slug
                        }
                        category
                        excerpt
                        slide_image {
                            childImageSharp {
                                fluid(maxWidth: 670, maxHeight: 454, quality: 100) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                }
            }
        }
      
    `)
    const { title, subtitle } = caseData.indexCybersecurityJson;
    const caseStudies = caseData.allCaseStudiesJson.edges;
    const { sectionTitleStyle, sliderSettings } = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title={title}
                            subtitle={subtitle}
                        />
                    </Col>
                </Row>
                <Swiper settings={{ ...sliderSettings }}>
                    {caseStudies.map(caseStudy => (
                        <div className="item" key={caseStudy.node.id}>
                            <Row>
                                <Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
                                    <CaseInfo>
                                        {caseStudy.node.title && <CaseTitle><Link to={`/case-study/${caseStudy.node.fields.slug}`}>{caseStudy.node.title}</Link></CaseTitle>}
                                        {caseStudy.node.category && <CaseCat>{caseStudy.node.category}</CaseCat>}
                                        {caseStudy.node.excerpt && <CaseText>{truncateString(caseStudy.node.excerpt, 100)}</CaseText>}
                                    </CaseInfo>
                                </Col>
                                <Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
                                    <CaseImage>
                                        <Image fluid={caseStudy.node.slide_image.childImageSharp.fluid} alt={caseStudy.node.title} />
                                    </CaseImage>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Swiper>
            </Container>
        </SectionWrap>
    )
}

CaseStudyArea.defaultProps = {
    sectionTitleStyle: {
        mb: '60px',
        responsive: {
            small: {
                mb: '47px'
            }
        }
    },
    sliderSettings: {
        slidesPerView: 1
    }
}

export default CaseStudyArea
