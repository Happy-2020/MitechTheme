import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Timeline from '../../../components/ui/timeline'
import { SectionWrap } from './style'

const HistoryArea = () => {
    const getHistories = useStaticQuery(graphql`
        query GET_HISTORY_DATA {
            ourHistoryJson(id: {eq: "our-history"}) {
                histories {
                    year
                    title
                    desc
                    image {
                        childImageSharp {
                            fluid(maxWidth: 500, maxHeight: 350, quality: 100, srcSetBreakpoints: 6) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
    `)
    const { ourHistoryJson: { histories } } = getHistories
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Timeline items={histories} />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default HistoryArea
