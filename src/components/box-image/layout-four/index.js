import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import {
    BoxImgWrapper, 
    BoxImgInner, 
    BoxImgMediaWrap, 
    BoxImgContent, 
    HeadingWrap, 
    TextWrap, 
    BoxImgLink} from './box-image.style'

const BoxImage = ({imageSrc, title, desc, path, ...boxStyles}) => {
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
                        {boxImage}
                    </BoxImgMediaWrap>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
                    {desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
                </BoxImgContent>
                <BoxImgLink to={path}>{title}</BoxImgLink>
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
    headingStyle: PropTypes.object,
    descStyle: PropTypes.object
}

BoxImage.defaultProps = {
    path: "/"
}


export default BoxImage;