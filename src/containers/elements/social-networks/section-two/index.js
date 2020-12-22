import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaDribbble, FaPinterest } from "react-icons/fa";
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Social, { SocialLink } from '../../../../components/ui/social'
import { SectionWrap, IconsWrap } from './style'

const SocialSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <IconsWrap>
                            <Heading as="h5" mb="40px" color="#fff">Basic Icons</Heading>
                            <Social varient="outlined" shape="rounded" skin="light">
                                <SocialLink path="https://facebook.com">
                                    <FaFacebookSquare />
                                </SocialLink>
                                <SocialLink path="https://twitter.com">
                                    <FaTwitter />
                                </SocialLink>
                                <SocialLink path="https://instagram.com">
                                    <FaInstagram />
                                </SocialLink>
                                <SocialLink path="https://dribbble.com">
                                    <FaDribbble />
                                </SocialLink>
                                <SocialLink path="https://pinterest.com">
                                    <FaPinterest />
                                </SocialLink>
                            </Social>
                            <Social varient="texted" skin="light" mt="50px">
                                <SocialLink path="https://facebook.com" title="facebook" />
                                <SocialLink path="https://twitter.com" title="twitter" />
                                <SocialLink path="https://instagram.com" title="instagram" />
                                <SocialLink path="https://dribbble.com" title="dribbble" />
                                <SocialLink path="https://pinterest.com" title="pinterest" />
                            </Social>
                        </IconsWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default SocialSection
