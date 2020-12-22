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
                            <Heading as="h5" mb="40px">Basic Icons</Heading>
                            <Social size="small">
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
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Medium Icon Style</Heading>
                            <Social size="medium" space="20px">
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
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Large Icon Style</Heading>
                            <Social size="large" space="25px">
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
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Flat Rounded Icon Style</Heading>
                            <Social varient="flat" shape="rounded">
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
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Solid Rounded Icon Style</Heading>
                            <Social varient="outlined" shape="rounded">
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
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">With Tooltip Icon Style</Heading>
                            <Social varient="outlined" shape="rounded" tooltip={true}>
                                <SocialLink path="https://facebook.com" title="facebook">
                                    <FaFacebookSquare />
                                </SocialLink>
                                <SocialLink path="https://twitter.com" title="twitter">
                                    <FaTwitter />
                                </SocialLink>
                                <SocialLink path="https://instagram.com" title="instagram">
                                    <FaInstagram />
                                </SocialLink>
                                <SocialLink path="https://dribbble.com" title="dribbble">
                                    <FaDribbble />
                                </SocialLink>
                                <SocialLink path="https://pinterest.com" title="pinterest">
                                    <FaPinterest />
                                </SocialLink>
                            </Social>
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Black Tooltip Icon Style</Heading>
                            <Social
                                size="medium"
                                tooltip={true}
                                tooltip_bg="dark"
                                tooltip_position="bottom-left">
                                <SocialLink path="https://facebook.com" title="facebook">
                                    <FaFacebookSquare />
                                </SocialLink>
                                <SocialLink path="https://twitter.com" title="twitter">
                                    <FaTwitter />
                                </SocialLink>
                                <SocialLink path="https://instagram.com" title="instagram">
                                    <FaInstagram />
                                </SocialLink>
                                <SocialLink path="https://dribbble.com" title="dribbble">
                                    <FaDribbble />
                                </SocialLink>
                                <SocialLink path="https://pinterest.com" title="pinterest">
                                    <FaPinterest />
                                </SocialLink>
                            </Social>
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Icon & Tilte Style</Heading>
                            <Social>
                                <SocialLink path="https://facebook.com" title="facebook">
                                    <FaFacebookSquare />
                                </SocialLink>
                                <SocialLink path="https://twitter.com" title="twitter">
                                    <FaTwitter />
                                </SocialLink>
                                <SocialLink path="https://instagram.com" title="instagram">
                                    <FaInstagram />
                                </SocialLink>
                                <SocialLink path="https://dribbble.com" title="dribbble">
                                    <FaDribbble />
                                </SocialLink>
                                <SocialLink path="https://pinterest.com" title="pinterest">
                                    <FaPinterest />
                                </SocialLink>
                            </Social>
                        </IconsWrap>
                        <IconsWrap>
                            <Heading as="h5" mb="40px">Title Style</Heading>
                            <Social varient="texted">
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
