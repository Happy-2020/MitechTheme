import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import VideoButton from '../../../components/ui/video-button'
import ModalVideo from '../../../components/ui/modal-video'
import AppointmentForm from '../../../components/forms/appointment-form'
import {
    HeroWrapper,
    HeroTextWrap,
    HeroButton,
    AppointmentWrap,
    AppointmentTitleWrap,
    AppointmentFormWrap
} from './hero-area.style'

const Hero = ({ subtitleStyle, titleStyle }) => {

    const heroData = useStaticQuery(graphql`
    query HeroQuery {
        indexAppointmentJson(id: {eq: "appointment-hero-content"}) {
          id
          title
          subtitle
          video
          buttonText
          bgImage {
            childImageSharp {
              fluid(maxWidth: 1920, maxHeight: 771, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      } 
    `);

    const [videoOpen, setVideoOpen] = useState(false);

    const data = heroData.indexAppointmentJson;
    const imageData = data.bgImage.childImageSharp.fluid;

    const modalVideoOpen = () => {
        setVideoOpen(true)
    }

    const modalVideoClose = () => {
        setVideoOpen(false)
    }

    return (
        <Fragment>
            <HeroWrapper
                tag="section"
                fluid={imageData}
            >
                <Container>
                    <Row alignitems="center">
                        <Col md={6}>
                            <HeroTextWrap>
                                <Heading {...subtitleStyle}>{data.subtitle}</Heading>
                                <Heading {...titleStyle}>{data.title}</Heading>
                                <HeroButton>
                                    <VideoButton
                                        onClick={modalVideoOpen}
                                        text="How we work"
                                    />
                                </HeroButton>
                            </HeroTextWrap>
                        </Col>
                        <Col lg={5} md={6} className="mx-auto">
                            <AppointmentWrap>
                                <AppointmentTitleWrap>
                                    <Heading as="h5" mb="10px">Book appointment</Heading>
                                    <Text>It's out pleasure to have a chance to cooperate.</Text>
                                </AppointmentTitleWrap>
                                <AppointmentFormWrap>
                                    <AppointmentForm />
                                </AppointmentFormWrap>
                            </AppointmentWrap>
                        </Col>
                    </Row>
                </Container>
            </HeroWrapper>
            <ModalVideo
                channel='youtube'
                videoId='L61p2uyiMSo'
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

Hero.propTypes = {
    subtitleStyle: PropTypes.object,
    titleStyle: PropTypes.object
}

Hero.defaultProps = {
    subtitleStyle: {
        as: 'h6',
        color: '#fff'
    },
    titleStyle: {
        as: 'h1',
        color: '#fff',
        fontweight: 500,
        mb: '30px'
    }
}

export default Hero;