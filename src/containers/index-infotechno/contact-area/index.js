import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import parse from 'html-react-parser'
import { MdPhone } from "react-icons/md";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import Button from '../../../components/ui/button'
import { ConatactWrapper, LeftBox, ContactInfoBox } from './contact-area.style'

const ContactArea = ({
    headingStyle,
    descStyle,
    conactInfoStyles: {
        titleStyle,
        phoneAnchorStyle,
        btnStyle
    }
}) => {
    const contactQueryData = useStaticQuery(graphql`
        query InfoTechContactQuery {
            sectionData: indexInfotechnoJson(id: {eq: "infotechno-contact-content"}) {
                title
                desc
            }
            sectionBg: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 520, quality: 100) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
            }
            contactData: site {
                siteMetadata {
                  contact {
                    phone
                  }
                }
            }
        } 
    `);
    const { title, desc } = contactQueryData.sectionData;
    const imageData = contactQueryData.sectionBg.childImageSharp.fluid;
    const { phone } = contactQueryData.contactData.siteMetadata.contact
    return (
        <ConatactWrapper fluid={imageData}>
            <Container>
                <Row alignitems="center">
                    <Col lg={6}>
                        <LeftBox>
                            {title && <Heading {...headingStyle}>{parse(title)}</Heading>}
                            {desc && <Text {...descStyle}>{parse(desc)}</Text>}
                        </LeftBox>
                    </Col>
                    <Col lg={6}>
                        <ContactInfoBox>
                            <MdPhone className="icon" />
                            <Heading {...titleStyle}>REACH OUT NOW!</Heading>
                            {phone && (
                                <Heading><Anchor path="/" {...phoneAnchorStyle}>{phone}</Anchor></Heading>
                            )}
                            <Button {...btnStyle}>Contact Us</Button>
                        </ContactInfoBox>
                    </Col>
                </Row>
            </Container>
        </ConatactWrapper>
    )
}

ContactArea.propTypes = {
    sectionStyle: PropTypes.object
}

ContactArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        position: 'relative',
        pl: '34px',
        fontweight: 600,
        lineHeight: 1.4,
        layout: 'quote',
        child: {
            color: 'primary'
        }
    },
    descStyle: {
        mt: '15px',
        fontSize: '18px',
        ml: '34px'
    },
    conactInfoStyles: {
        titleStyle: {
            as: 'h6',
            fontSize: '15px',
            letterspacing: '2px',
            texttransform: 'uppercase',
            mb: '10px',
            mt: '10px',
        },
        phoneAnchorStyle: {
            color: '#002fa6',
            hover: {
                layout: 2,
                color: '#002fa6'
            }
        },
        btnStyle: {
            mt: '20px',
            skin: 'secondary',
            minwidth: '230px',
            hover: {
                bgColor: 'primary'
            }
        }
    }
}

export default ContactArea;