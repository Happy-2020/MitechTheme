import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import ClientLogo from '../../../components/ui/client-logo'
import SwiperSlider from '../../../components/ui/swiper'
import { SectionWrap, ClientLogoWrap } from './style'

const ClientsArea = (props) => {
    const partnersQueryData = useStaticQuery(graphql`
        query AboutPartnersDataQuery{
            allPartnersJson {
                edges {
                  node {
                    id
                    path
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid_tracedSVG
                          presentationWidth
                          presentationHeight
                          aspectRatio
                        }
                      }
                    }
                    hover_image {
                      childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
    const partnersData = partnersQueryData.allPartnersJson.edges;
    const { slider, sliderStyle } = props
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider settings={slider} {...sliderStyle}>
                            {partnersData.map((data, i) => {
                                return (
                                    <ClientLogoWrap key={data.node.id}>
                                        <ClientLogo
                                            layout={1}
                                            title={data.node.id}
                                            path={data.node.path}
                                            brandImage={data.node.image.childImageSharp}
                                            hoverImage={data.node.hover_image.childImageSharp}
                                        />
                                    </ClientLogoWrap>
                                )
                            })}
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ClientsArea.propTypes = {
    slider: PropTypes.object,
    sliderStyle: PropTypes.object
}

ClientsArea.defaultProps = {
    slider: {
        slidesPerView: 6,
        loop: true,
        speed: 1000,
        pagination: false,
        autoplay: {
            delay: 2500
        },
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            575: {
                slidesPerView: 3
            },
            767: {
                slidesPerView: 4
            },
            991: {
                slidesPerView: 5
            },
            1499: {
                slidesPerView: 6
            }
        }
    },
    sliderStyle: {
        align: 'center'
    }
}

export default ClientsArea;