import React from 'react'
import PropTypes from 'prop-types'
import { MdTrendingFlat } from "react-icons/md";
import Img from 'gatsby-image'
import Image from '../../image'
import {
    BoxImgWrapper, 
    BoxImgInner, 
    BoxImgWrap, 
    BoxContentWrap, 
    BoxCircleBtnWrap, 
    BoxCircleBtnInner,
    HeadingWrap,
    TextWrap,
    BoxCircleBtn} from './box-image.style'


const BoxImage = ({title, imageSrc, desc, path, ...boxStyles}) => {
    const {headingStyle, descStyle, ...restStyles} = boxStyles;
    let boxImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        boxImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        boxImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        boxImage = <img src={imageSrc} alt={title}/>
    }
    return (
        <BoxImgWrapper {...restStyles}>
            <BoxImgInner>
                {imageSrc && (
                    <BoxImgWrap>
                        {boxImage}
                    </BoxImgWrap>
                )}
                <BoxContentWrap>
                    {title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
                    {desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
                    <BoxCircleBtnWrap>
                        <BoxCircleBtnInner>
                            <div className="middle-dot"></div>
                            <div className="middle-dot dot-2"></div>
                            <BoxCircleBtn to={path}>
                                <MdTrendingFlat className="icon"/>
                            </BoxCircleBtn>
                        </BoxCircleBtnInner>
                    </BoxCircleBtnWrap>
                </BoxContentWrap>
            </BoxImgInner>
        </BoxImgWrapper>
    )
} 
 
BoxImage.propTypes = {
    path: PropTypes.string,
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    headingStyle: PropTypes.object,
    descStyle: PropTypes.object
}

BoxImage.defaultProps = {
    path: "/"
}

export default BoxImage;