import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {Container, Row, Col} from '../../../../components/ui/wrapper'
import SectionTitle from '../../../../components/ui/section-title'
import SwiperSlider from '../../../../components/ui/swiper'
import Testimonial from '../../../../components/testimonial/layout-two'
import {TestimonialWrappper} from './section.style'

const TestimonialArea = (props) => {
    const testmonialDataQuery = useStaticQuery(graphql `
        query GlobalTestimonialQueryData {
            allTestimonialsJson {
                edges {
                  node {
                    id
                    author_name
                    author_designation
                    rating
                    subject
                    review
                    author_image {
                      childImageSharp {
                        fixed(width: 70, height: 70, quality: 100){
                            ...GatsbyImageSharpFixed_withWebp
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
    // const testimonialSecData = testmonialDataQuery.infotechnoJson;
    const testimonials = testmonialDataQuery.allTestimonialsJson.edges;
    const {sectionTitleStyle, slider, sliderStyle} = props;
    return (
        <TestimonialWrappper>
            <Container fluid px={0}>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            title="Why do people praise about <span>Mitech?</span>"
                            subtitle="TESTIMONIALS"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <SwiperSlider {...sliderStyle} settings={slider}>
                            {testimonials.map((testimonial, i) => (
                                <div className="item" key={`${testimonial.node.id}-${i}`}>
                                    <Testimonial
                                        authorName={testimonial.node.author_name}
                                        authroRole={testimonial.node.author_designation}
                                        authorImg={testimonial.node.author_image.childImageSharp}
                                        rating={testimonial.node.rating}
                                        subject={testimonial.node.subject}
                                        review={testimonial.node.review}
                                    />
                                </div>
                            ))}
                        </SwiperSlider>
                    </Col>
                </Row>
            </Container>
        </TestimonialWrappper>
    )
}

TestimonialArea.propTypes = {
    sectionTitleStyle: PropTypes.object,
    slider: PropTypes.object,
    sliderStyle: PropTypes.object
}

TestimonialArea.defaultProps = {
    sectionTitleStyle: {
        mb: '60px',
        responsive: {
            small: {
                mb: '47px'
            }
        }
    },
    slider: {
        slidesPerView : 3,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        spaceBetween : 50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView : 1
            },
            991: {
                slidesPerView : 2
            },
            1499: {
                slidesPerView : 3
            }
        }
    },
    sliderStyle: {
        opacityStyle: true,
        pagination: {
            mt: '28px'
        }
    }
}

export default TestimonialArea;