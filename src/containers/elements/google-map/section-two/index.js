import React from 'react'
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import GoogleMap from '../../../../components/ui/google-map'
import { SectionWrap } from './style'

const GoogleMapSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Heading as="h3" mb="40px" textalign="center">Default Style</Heading>
                        <GoogleMap />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default GoogleMapSection
