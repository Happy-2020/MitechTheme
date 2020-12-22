import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import {
    BoxImgWrapper, 
    BoxImgInner, 
    BoxImgMediaWrap, 
    DefaultImage, 
    BoxImgContent,
    HeadingWrap,
    TextWrap} from './box-image.style'


const BoxImage = ({imageSrc, title, desc, ...boxStyles}) => {
    const {headingStyle, descStyle} = boxStyles;
    let boxImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        boxImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        boxImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        boxImage = <img src={imageSrc} alt={title}/>
    }
    return (
        <BoxImgWrapper {...boxStyles}>
            <BoxImgInner>
                {imageSrc && (
                    <BoxImgMediaWrap>
                        <DefaultImage>
                            {boxImage}
                        </DefaultImage>
                    </BoxImgMediaWrap>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap as="h6" {...headingStyle}>{title}</HeadingWrap>}
                    {desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
                </BoxImgContent>
            </BoxImgInner>
        </BoxImgWrapper>
    )
}

BoxImage.propTypes = {
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    subtitle: PropTypes.string
}



export default BoxImage; 