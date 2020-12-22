import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import {
    BoxImageWrap, 
    BoxImageInner, 
    BoxImageSrcWrap,
    BoxImageContent,
    Heading,
    Text} from './box-image.style'

const BoxImage = ({imageSrc, title, desc, ...boxStyles}) => {
    const {boxStyle} = boxStyles;
    let boxImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        boxImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        boxImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        boxImage = <img src={imageSrc} alt={title}/>
    }
    return (
        <BoxImageWrap {...boxStyle}>
            <BoxImageInner>
                {imageSrc && (
                    <BoxImageSrcWrap>
                        {boxImage}
                    </BoxImageSrcWrap>          
                )}
                <BoxImageContent>
                    {title && <Heading>{title}</Heading>}
                    {desc && <Text>{desc}</Text>}
                </BoxImageContent>
            </BoxImageInner>
        </BoxImageWrap>
    )
}

BoxImage.propTypes = {
    imageSrc: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    title: PropTypes.string,
    desc: PropTypes.string
}

export default BoxImage;