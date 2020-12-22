import React from 'react'
import { FaInfoCircle, FaCheck, FaTimes, FaExclamationCircle } from "react-icons/fa";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Alert from '../../../components/ui/alert'
import { SectionWrap } from './style'

const MessageBoxSection = () => {
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Alert variant="info" mb="30px">
                            <FaInfoCircle className="icon" /> This is a informational message
                        </Alert>
                        <Alert variant="success" mb="30px">
                            <FaCheck className="icon" /> This is a success message
                        </Alert>
                        <Alert variant="danger" mb="30px">
                            <FaTimes className="icon" /> This is a danger message
                        </Alert>
                        <Alert variant="warning">
                            <FaExclamationCircle className="icon" />  This is a warning message
                        </Alert>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default MessageBoxSection
