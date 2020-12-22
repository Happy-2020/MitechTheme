import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdEmail } from "react-icons/md";
import {Container, Row, Col, Box} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Image from '../../../../components/image'
import Ratings from '../../../../components/ratings'
import BoxIcon from '../../../../components/box-icon/layout-four'
import Anchor from '../../../../components/ui/anchor'
import {SectionWrap, ImageBox, ContactInfoBox} from './contact.style'

const ContactArea = ({sectionStyle, imgBoxStyle, rightBoxStyle, boxIconStyle, ratingStyle, textStyle}) => {
    const contactData = useStaticQuery(graphql `
        query AboutContactQuery {
            info: site {
                siteMetadata {
                    contact {
                        phone
                        email
                        rating
                        customers
                        clients
                    }
                }
            }
            bgImage: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
                childImageSharp {
                    fluid(maxHeight: 520, maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            contactImg: file(relativePath: {eq: "images/contact-image.png"}) {
                childImageSharp {
                    fluid(maxHeight: 572, maxWidth: 587, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                    }
                }
            }
        }
    `)
    const {phone, email, rating, customers, clients} = contactData.info.siteMetadata.contact;
    const bg_image = contactData.bgImage.childImageSharp.fluid;
    const contact_image = contactData.contactImg.childImageSharp.fluid;
    
    return (
        <SectionWrap fluid={bg_image}>
            <Container>
                <Row alignitems="center">
                    <Col lg={7}>
                        <ImageBox>
                            <Image fluid={contact_image} alt="Contact Us"/>
                        </ImageBox>
                    </Col>
                    <Col lg={4} ml="auto">
                        <ContactInfoBox>
                            <Box textalign="center">
                                {rating && <Heading as="h3">{`${rating}/5.0`}</Heading>}
                                <Ratings {...ratingStyle} rating={+rating}/>
                                <Text {...textStyle}>by {customers}+ customers for {clients}+ clients</Text>
                            </Box>
                            <Box>
                                <Anchor display="block" path={`tel:${phone}`}>
                                    <BoxIcon
                                        {...boxIconStyle}
                                        icon={<MdPhone/>}
                                        heading="Call for advice now!"
                                        title={phone}
                                    />
                                </Anchor>
                                <Anchor display="block" path={`mailto:${email}`}>
                                    <BoxIcon
                                        {...boxIconStyle}
                                        icon={<MdEmail/>}
                                        heading="Say hello"
                                        title={email}
                                    />
                                </Anchor>
                            </Box>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ContactArea.propTypes = {
    sectionStyle: PropTypes.object
}
 
ContactArea.defaultProps = {
    boxIconStyle: {
        wrapperStyle: {
            alignitems: 'center',
            mt: '55px'
        },
        iconStyle: {
            fontSize: '40px',
            mr: "25px",
            fontweight: 300
        },
        titleStyle: {
            fontSize: '34px',
            mb: "0",
            fontweight: 700,
            lineHeight: 1.17,
            responsive: {
                large: {
                    fontSize: "24px"
                }
            }
        }
    },
    ratingStyle: {
        mt: '10px',
        mb: '10px'
    },
    textStyle: {
        fontSize: '18px'
    }
}

export default ContactArea;