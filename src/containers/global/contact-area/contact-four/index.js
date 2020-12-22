import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {MdPhone, MdEmail} from 'react-icons/md'
import {Container, Row, Col, Box} from '../../../../components/ui/wrapper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Ratings from '../../../../components/ratings'
import BoxIcon from '../../../../components/box-icon/layout-four'
import Anchor from '../../../../components/ui/anchor'
import ContactFrom from '../../../../components/forms/contact-form'
import { SectionWrap, ContactInfoBox, ContactFormBox, ContactFormTitle } from './contact-area.style'

const ContactArea = ({ratingHeadingStyle, boxIconStyle, ratingStyle, textStyle}) => {
    const contactData = useStaticQuery(graphql `
        query ContactFourQuery {
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
            bgImage: file(relativePath: {eq: "images/bg/contact-section-bg-3.png"}) {
                childImageSharp {
                    fluid(maxHeight: 626, maxWidth: 982, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
    const {phone, email, rating, customers, clients} = contactData.info.siteMetadata.contact;
    const bg_image = contactData.bgImage.childImageSharp.fluid;
    
    return (
        <SectionWrap fluid={bg_image}>
            <Container>
                <Row alignitems="center">
                    <Col lg={4}>
                        <ContactInfoBox>
                            <Box textalign="center">
                                {rating && <Heading {...ratingHeadingStyle}>{`${rating}/5.0`}</Heading>}
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
                    <Col lg={7} ml="auto">
                        <ContactFormBox>
                            <ContactFormTitle>
                                <Heading as="h3" mb="10px">Need a hand?</Heading>
                                <Text>Reach out to the world’s most reliable IT services.</Text>
                            </ContactFormTitle>
                            <ContactFrom/>
                        </ContactFormBox>
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
            fontweight: 300,
            color: "#fff"
        },
        titleStyle: {
            fontSize: '34px',
            mb: "0",
            color: "secondary",
            fontweight: 700,
            lineHeight: 1.17,
            responsive: {
                large: {
                    fontSize: "24px"
                }
            }
        },
        headingStyle: {
            color: "#fff"
        }
    },
    ratingStyle: {
        mt: '10px',
        mb: '10px'
    },
    ratingHeadingStyle: {
        as: "h3",
        color: '#fff'
    },
    textStyle: {
        fontSize: '18px',
        color: '#fff'
    }
}

export default ContactArea;