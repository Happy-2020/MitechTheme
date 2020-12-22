import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Line from '../../../../components/ui/divider/line'
import { SectionWrap } from './style'

const DividerSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h6" mb="15px">Dash Line</Heading>
                        <Text>Aeroland presents your services with flexible, convenient and multipurpose layouts. You can select your favorite layouts & elements for particular projects with unlimited customization possibilities. Pixel-perfect replication of the designers is intended for both front-end & back-end developers to build their pages with greater comfort thanks to the higher customizability, adaptability as well as flexibility.</Text>
                        <Line mt="40px" mb="40px" borderStyle="dashed" />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default DividerSection
