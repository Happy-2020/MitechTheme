import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Anchor from '../../../components/ui/anchor'
import { SectionWrap, CtaTextBox } from './cta-area.style'

const CTAArea = ({ headingStyle, textStyle, anchorStyle }) => {
    const ctaData = useStaticQuery(graphql`
        query ProcessingCtaQuery {
            indexProcessingJson(id: {eq: "processing-cta-content"}){
                title
                text
                link_text
                link
            }
        }
    `);
    const { title, text, link_text, link } = ctaData.indexProcessingJson;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <CtaTextBox>
                            {title && <Heading {...headingStyle}>{title}</Heading>}
                            {text && <Text {...textStyle}>{text} {link_text && <Anchor {...anchorStyle} path={link}>{link_text}</Anchor>}</Text>}
                        </CtaTextBox>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

CTAArea.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    anchorStyle: PropTypes.object,
}

CTAArea.defaultProps = {
    headingStyle: {
        fontSize: '64px',
        lineHeight: 1.13,
        color: '#002fa6',
        mb: '30px',
        responsive: {
            medium: {
                fontSize: '42px'
            },
            small: {
                fontSize: '32px'
            }
        }
    },
    textStyle: {
        fontSize: '18px',
        fontweight: 500,
        lineheight: 1.40,
        color: '#333333',
    },
    anchorStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default CTAArea
