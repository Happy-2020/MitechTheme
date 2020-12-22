import React from 'react'
import PropTypes from 'prop-types'
import { FaCheck, FaRegClock, FaCrown, FaDatabase, FaRebel, FaCartPlus, FaCrosshairs } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap'
import { SectionWrap, ListGroupWrap } from './section.style'
import Heading from '../../../../components/ui/heading'
import List, { ListItem } from '../../../../components/ui/list'

const Section = ({ HeadingStyle, ListOneStyle, ListTwoStyle, ListThreeStyle, ListFourStyle, ListFiveStyle, ListSixStyle }) => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Separator List</Heading>
                            <List {...ListOneStyle}>
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Check List</Heading>
                            <List {...ListTwoStyle}>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 01</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 02</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 03</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 04</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 05</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCheck /></span>
                                    <span>Item text 06</span>
                                </ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Circle List</Heading>
                            <List {...ListThreeStyle}>
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Icon List</Heading>
                            <List {...ListFourStyle}>
                                <ListItem>
                                    <span className="icon"><FaRegClock /></span>
                                    <span>Item text 01</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCrown /></span>
                                    <span>Item text 02</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaDatabase /></span>
                                    <span>Item text 03</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaRebel /></span>
                                    <span>Item text 04</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCartPlus /></span>
                                    <span>Item text 05</span>
                                </ListItem>
                                <ListItem>
                                    <span className="icon"><FaCrosshairs /></span>
                                    <span>Item text 06</span>
                                </ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Automatic Numbered List</Heading>
                            <List {...ListFiveStyle}>
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                    <Col lg={4} md={6}>
                        <ListGroupWrap>
                            <Heading {...HeadingStyle}>Roman Numbered List</Heading>
                            <List {...ListSixStyle}>
                                <ListItem>Item text 01</ListItem>
                                <ListItem>Item text 02</ListItem>
                                <ListItem>Item text 03</ListItem>
                                <ListItem>Item text 04</ListItem>
                                <ListItem>Item text 05</ListItem>
                                <ListItem>Item text 06</ListItem>
                            </List>
                        </ListGroupWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

Section.propTypes = {
    HeadingStyle: PropTypes.object
}

Section.defaultProps = {
    HeadingStyle: {
        as: 'h5',
        mb: '30px'
    },
    ListOneStyle: {
        layout: 'separator'
    },
    ListTwoStyle: {
        layout: 'check'
    },
    ListThreeStyle: {
        layout: 'circle'
    },
    ListFourStyle: {
        layout: 'icon'
    },
    ListFiveStyle: {
        as: 'ol',
        layout: 'order-list'
    },
    ListSixStyle: {
        as: 'ol',
        liststyle: 'upper-roman',
        layout: 'order-list'
    }
}


export default Section;