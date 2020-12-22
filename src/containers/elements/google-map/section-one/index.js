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
                    <Col lg={6} className="map-one">
                        <Heading as="h3" mb="40px" textalign="center">Default Style</Heading>
                        <GoogleMap />
                    </Col>
                    <Col lg={6}>
                        <Heading as="h3" mb="40px" textalign="center">Custom Marker</Heading>
                        <GoogleMap
                            marker="animated"
                        />
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default GoogleMapSection
