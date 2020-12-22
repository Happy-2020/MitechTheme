import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby'
import FeatureBox from '../../../components/box-image/layout-three'
import SwiperSlider from '../../../components/ui/swiper'
import GridLine from '../../../components/grid-line'
import { SectionWrap } from './features-area.stc'

const FeaturesArea = ({ slider, sliderStyle }) => {
    const featuresData = useStaticQuery(graphql`
        query ServicesFeaturesQuery {
            allItSolutionsJson(limit: 6) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        id
                        title
                        excerpt
                        icon {
                            img {
                                childImageSharp {
                                    fixed(width: 80, height: 83, quality: 100) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const features = featuresData.allItSolutionsJson.edges
    return (
        <SectionWrap>
            <GridLine />
            <SwiperSlider settings={slider} {...sliderStyle}>
                {features.map((feature, i) => {
                    return (
                        <div className="item" key={`feature-${i}`}>
                            <FeatureBox
                                title={feature.node.title}
                                desc={feature.node.excerpt}
                                imageSrc={feature.node.icon.img.childImageSharp}
                                path={`/it-solution/${feature.node.fields.slug}`}
                            />
                        </div>
                    )
                })}
            </SwiperSlider>
        </SectionWrap>
    )
}

FeaturesArea.propTypes = {
    slider: PropTypes.object,
    sliderStyle: PropTypes.object
}

FeaturesArea.defaultProps = {
    slider: {
        slidesPerView: 4,
        lazy: true,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1500: {
                slidesPerView: 4
            }
        }
    },
    sliderStyle: {
        pagination: {
            mt: "30px",
            layout: "2"
        }
    }
}

export default FeaturesArea
