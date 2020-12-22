import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import ProgressCirle from '../../../../components/ui/progress-circle/layout-one'
import { FaCogs } from "react-icons/fa";
import { SectionWrap, ProgressCircleWrap } from './style'

const ProgressCircleSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                text="01"
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                varient="gradient"
                                startColor="#fad961"
                                endColor="#f76b1c"
                                gradientId="progress"
                                text="02"
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                icon={<FaCogs />}
                            />
                        </ProgressCircleWrap>
                    </Col>
                    <Col lg={3} sm={6}>
                        <ProgressCircleWrap>
                            <ProgressCirle
                                value={75}
                                rotation={0.25}
                                varient="gradient"
                                startColor="#fad961"
                                endColor="#f76b1c"
                                gradientId="progress-2"
                                icon={<FaCogs />}
                            />
                        </ProgressCircleWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default ProgressCircleSection
