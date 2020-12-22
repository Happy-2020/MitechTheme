import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import ProgressBarOne from '../../../../components/ui/progress-bar/layout-one'
import ProgressBarTwo from '../../../../components/ui/progress-bar/layout-two'
import { SectionWrap, ProgressOneWrap, ProgressTwoWrap } from './style'

const ProgresBarSection = () => {
    const skills = [
        {
            title: "UI/UX",
            value: '85%'
        },
        {
            title: "Ideas",
            value: '72%'
        },
        {
            title: "Marketing",
            value: '89%'
        },
        {
            title: "Consulting",
            value: '57%'
        }
    ]
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={6}>
                        <ProgressOneWrap>
                            {skills && skills.map((skill, i) => (
                                <ProgressBarOne
                                    key={`prog-one-${i}`}
                                    title={skill.title}
                                    value={skill.value}
                                />
                            ))}
                        </ProgressOneWrap>
                    </Col>
                    <Col lg={6}>
                        <ProgressTwoWrap>
                            {skills && skills.map((skill, i) => (
                                <ProgressBarTwo
                                    key={`prog-two-${i}`}
                                    title={skill.title}
                                    value={skill.value}
                                    gradient={i + 1}
                                />
                            ))}
                        </ProgressTwoWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default ProgresBarSection
