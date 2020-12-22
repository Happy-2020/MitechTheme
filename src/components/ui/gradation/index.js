import React from 'react'
import { MdTrendingFlat } from "react-icons/md";
import Button from '../button'
import { GradationWrap, Line, NumberWrap, ContentWrap, Heading, Text } from './style'

const Gradation = ({ number, title, desc, path, ...restProps }) => {
    const { btnStyle } = restProps;
    return (
        <GradationWrap {...restProps}>
            <Line />
            <NumberWrap>
                <div className="mask">
                    <div className="wave-pulse wave-pulse-1"></div>
                    <div className="wave-pulse wave-pulse-2"></div>
                    <div className="wave-pulse wave-pulse-3"></div>
                </div>
                {number && <h6 className="number">{number}</h6>}
            </NumberWrap>
            <ContentWrap>
                {title && <Heading>{title}</Heading>}
                {desc && <Text>{desc}</Text>}
                {path && <Button {...btnStyle} to={path} icon={<MdTrendingFlat />}>Look More</Button>}
            </ContentWrap>
        </GradationWrap>
    )
}

Gradation.defaultProps = {
    btnStyle: {
        varient: "texted",
        color: "primary",
        fontSize: "14px"
    }
}

export default Gradation
