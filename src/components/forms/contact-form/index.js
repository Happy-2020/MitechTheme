import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Row, Col } from '../../ui/wrapper'
import useFormUrl from '../useFormUrl'
import Form, { FormGroup, Input, Textarea, Error } from '../../ui/form'
import Button from '../../ui/button'

const ContactForm = () => {
    const formUrl = useFormUrl();
    const { register, handleSubmit, errors, reset } = useForm({
        mode: "onBlur"
    })

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: formUrl,
            data: data
        })
            .then(r => {
                handleServerResponse(true, "Thanks! for contact with us", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row gutters={{ lg: 20 }}>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name *"
                            ref={register({ required: 'Name is required' })}
                        />
                        <Error>{errors.name && errors.name.message}</Error>
                    </FormGroup>
                </Col>
                <Col lg={6}>
                    <FormGroup mb="20px">
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email *"
                            ref={register({
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        <Error>{errors.email && errors.email.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="20px">
                        <Input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Subject *"
                            ref={register({ required: 'Subject is required' })}
                        />
                        <Error>{errors.subject && errors.subject.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <FormGroup mb="30px">
                        <Textarea
                            name="message"
                            id="message"
                            placeholder="Please describe what you need."
                            ref={register({
                                required: 'Message is required',
                                maxLength: {
                                    value: 50,
                                    message: "Maximum length is 50"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Minimum length is 10"
                                }
                            })}
                        ></Textarea>
                        <Error>{errors.message && errors.message.message}</Error>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button type="submit" disabled={serverState.submitting}>Send Message</Button>
                    {serverState.status && (
                        <p className={`form-output ${!serverState.status.ok ? "errorMsg" : "success"}`}>
                            {serverState.status.msg}
                        </p>
                    )}
                </Col>
            </Row>
        </Form>
    )
}

export default ContactForm;