import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import {BoxImgWrapper, BoxImgInner, BoxImgMedia, BoxImgContent, HeadingWrap, BoxImgLink} from './box-image.style'

const BoxImage = ({imageSrc, title, headingStyle, path, ...boxStyles}) => {
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
                    <BoxImgMedia>
                        {boxImage}
                    </BoxImgMedia>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap as="h6" {...headingStyle}>{title}</HeadingWrap>}
                </BoxImgContent>
                <BoxImgLink to={path}>{title}</BoxImgLink>
            </BoxImgInner>
        </BoxImgWrapper>
    )
} 
 
BoxImage.propTypes = {
    boxCSS: PropTypes.object,
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    path: PropTypes.string
}

BoxImage.defaultProps = {
    path: "/"
}

export default BoxImage; 