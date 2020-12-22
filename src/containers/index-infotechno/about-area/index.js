import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import NumberedList, { NumberedListItem } from '../../../components/ui/numbered-list'
import { SectionWrap, LeftBox } from './about-area.style'


const AboutArea = (props) => {
    const aboutDataQuery = useStaticQuery(graphql`
        query infotechnoAboutQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-about-content"}) {
                title
                subtitle
                desc
                path
                features {
                  text
                  path
                }
            }
        }
    `);
    const { title, subtitle, path, desc, features } = aboutDataQuery.indexInfotechnoJson;
    const { sectionTitleStyle, descStyle, btnStyle } = props
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={5}>
                        <LeftBox>
                            <SectionTitle
                                {...sectionTitleStyle}
                                title={title}
                                subtitle={subtitle}
                            />
                            {desc && <Text {...descStyle}>{desc}</Text>}
                            {path && <Button to={path} {...btnStyle}>Join Us Now</Button>}
                        </LeftBox>
                    </Col>
                    <Col lg={5} ml="auto">
                        <NumberedList>
                            {features.map((feature, i) => (
                                <NumberedListItem key={`about-feature-${i}`} path={feature.path} number={i + 1}>{feature.text}</NumberedListItem>
                            ))}
                        </NumberedList>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

AboutArea.propTypes = {
    descStyle: PropTypes.object,
    btnStyle: PropTypes.object,
    sectionTitleStyle: PropTypes.object
}

AboutArea.defaultProps = {
    sectionTitleStyle: {
        mb: '20px',
        align: 'left'
    },
    descStyle: {
        mb: '30px'
    },
    btnStyle: {
        hover: "2"
    }
}

export default AboutArea;