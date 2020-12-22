import React from 'react'
import Img from 'gatsby-image'
import Image from '../../../components/image'
import {
    TimelineWrap,
    TimelineList,
    Line,
    Item,
    Dots,
    TimelineRow,
    TimelineFeature,
    TimelineFeatureInner,
    TimelineInfo,
    TimelineInfoInner,
    DateWrap,
    Photo,
    TimelineContent,
    Title,
    Description
} from './style'

const Timeline = ({ items }) => {
    return (
        <TimelineWrap>
            <TimelineList>
                <Line />
                {items && items.map((item, i) => {
                    const { year, image, title, desc } = item;
                    const gatsbyImg = image && image.childImageSharp;
                    const imageSrc = gatsbyImg || image;
                    let boxImage;
                    if (imageSrc.fixed && typeof imageSrc.fixed !== 'function') {
                        boxImage = <Img fixed={imageSrc.fixed} alt="popup video" />;
                    } else if (imageSrc.fluid) {
                        boxImage = <Image fluid={imageSrc.fluid} alt="popup video" />
                    } else {
                        boxImage = <img src={imageSrc} alt="popup video" />
                    }
                    return (
                        <Item key={`timeline-${i}`} align={i % 2 === 0 ? 'left' : 'right'}>
                            <Dots />
                            <TimelineRow>
                                <TimelineFeature>
                                    <TimelineFeatureInner>
                                        {year && <DateWrap>{year}</DateWrap>}
                                        {imageSrc && <Photo>{boxImage}</Photo>}
                                    </TimelineFeatureInner>
                                </TimelineFeature>
                                <TimelineInfo>
                                    <TimelineInfoInner>
                                        <TimelineContent>
                                            {title && <Title>{title}</Title>}
                                            {desc && <Description>{desc}</Description>}
                                        </TimelineContent>
                                    </TimelineInfoInner>
                                </TimelineInfo>
                            </TimelineRow>
                        </Item>
                    )
                })}

            </TimelineList>
        </TimelineWrap>
    )
}

export default Timeline
