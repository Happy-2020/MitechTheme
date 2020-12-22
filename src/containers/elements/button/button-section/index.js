import React from 'react';
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'react-bootstrap'
import Heading from '../../../../components/ui/heading'
import Button from '../../../../components/ui/button'
import gplayImg from '../../../../data/images/icons/google-play-btn.jpg'
import {SectionWrapper, SectionOne, ButtonGroupWrap, ButtonWrap} from './button-section.style'
 
const ButtonSection = ({headingStyle, buttonDefault, ...props}) => {
    return (
        <SectionWrapper>
            <Container>
                <Row>
                    <Col xs={12}>
                        <SectionOne>
                            <Heading {...headingStyle}>Button</Heading>
                            <ButtonGroupWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault} size="xsmall">Extra Small</Button>
                                    <Button {...buttonDefault} size="small">Small Size</Button>
                                    <Button {...buttonDefault} size="medium">Standard Size</Button>
                                    <Button {...buttonDefault} size="large">Large Size</Button>
                                </ButtonWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault} minwidth="280px">Customize Size</Button>
                                </ButtonWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault} fullwidth>Full Wide</Button>
                                </ButtonWrap>
                            </ButtonGroupWrap>
                        </SectionOne>
                        <SectionOne>
                            <Heading {...headingStyle}>Button Style</Heading>
                            <ButtonGroupWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault}>Standard Size</Button>
                                    <Button {...buttonDefault} varient="outlined">Outlined Size</Button>
                                    <Button {...buttonDefault} shape="rectangle">Rectangle</Button>
                                    <Button {...buttonDefault} shape="bullet">Bullet</Button>
                                </ButtonWrap>
                            </ButtonGroupWrap>
                        </SectionOne>
                        <SectionOne>
                            <Heading {...headingStyle}>Unlimited Skin</Heading>
                            <ButtonGroupWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault}>Primary Button</Button>
                                    <Button {...buttonDefault} skin="secondary">Secondary Button</Button>
                                    <Button {...buttonDefault} bgcolor="#000">Custom Color</Button>
                                    <Button {...buttonDefault} skin="light" shadow="true">White Button</Button>
                                    <Button {...buttonDefault} skin="gradient">Gradient Button</Button>
                                </ButtonWrap>
                            </ButtonGroupWrap>
                        </SectionOne>
                        <SectionOne>
                            <Heading {...headingStyle}>With Ton Of Icons</Heading>
                            <ButtonGroupWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault} iconname="far fa-bolt">Standard Size</Button>
                                    <Button {...buttonDefault} iconname="far fa-arrow-right">Standard Size</Button>
                                    <Button {...buttonDefault} iconname="far fa-binoculars">Standard Size</Button>
                                    <Button {...buttonDefault} iconname="far fa-code-merge" iconposition="left">Standard Size</Button>
                                </ButtonWrap>
                            </ButtonGroupWrap>
                        </SectionOne>
                        <SectionOne>
                            <Heading {...headingStyle}>With Image</Heading>
                            <ButtonGroupWrap>
                                <ButtonWrap>
                                    <Button {...buttonDefault} imgbutton="true"><img src={gplayImg} alt="gplay"/></Button>
                                    <Button {...buttonDefault} imgbutton="true"><img src={gplayImg} alt="gplay"/></Button>
                                </ButtonWrap>
                            </ButtonGroupWrap>
                        </SectionOne>
                    </Col>
                </Row>
            </Container>
        </SectionWrapper>
    )
}

ButtonSection.propTypes = {
    headingStyle: PropTypes.object,
    buttonDefault: PropTypes.object
}

ButtonSection.defaultProps = {
    headingStyle: {
        as: 'h5',
        mb: '10px'
    },
    buttonDefault: {
        hover: "false",
        m: '10px'
    }
}


export default ButtonSection;