import React from 'react'
import parse from 'html-react-parser'
import { useStaticQuery, graphql } from 'gatsby'
import { MdTrendingFlat } from "react-icons/md";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import SectionTitle from '../../../components/ui/section-title'
import { SectionWrap, AboutHeading, AboutText } from './about-area.style'

const AboutArea = (props) => {
    const aboutData = useStaticQuery(graphql`
        query CybersecurityAboutQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-about-content"}) {
                title
                subtitle
                heading
                subheading
                desc
                path
            }
        }
    `);
    const { title, subtitle, heading, subheading, desc, path } = aboutData.indexCybersecurityJson
    const { sectionTitleStyle, headingStyle, subheadingStyle, descStyle, btnStyle } = props
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
                <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <AboutHeading>
                            {heading && <Heading {...headingStyle}>{parse(heading)}</Heading>}
                            {subheading && <Heading {...subheadingStyle}>{parse(subheading)}</Heading>}
                        </AboutHeading>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <AboutText>
                            {desc && <Text {...descStyle}>{desc}</Text>}
                            {path && <Button to={path} icon={<MdTrendingFlat />} {...btnStyle}>Discover Now</Button>}
                        </AboutText>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

AboutArea.defaultProps = {
    sectionTitleStyle: {
        mb: '60px',
        responsive: {
            small: {
                mb: '47px'
            }
        }
    },
    headingStyle: {
        layout: 'highlight',
        mr: '48px'
    },
    subheadingStyle: {
        as: 'h6',
        mt: '30px'
    },
    descStyle: {
        fontSize: '18px',
        mb: '20px'
    },
    btnStyle: {
        varient: 'texted',
        icondistance: '4px'
    }
}

export default AboutArea
