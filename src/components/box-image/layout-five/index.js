import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { MdTrendingFlat } from "react-icons/md";
import Image from '../../image'
import Button from '../../ui/button'
import {
    BoxImgWrapper, 
    BoxImgInner, 
    BoxImgMedia, 
    DefaultImage, 
    HoverImage, 
    BoxImgContent,
    HeadingWrap,
    TextWrap} from './box-image.style'


const BoxImage = ({imageSrc, hoverImg, title, desc, path, ...boxStyles}) => {
    const {boxStyle, headingStyle, descStyle} = boxStyles;
    let boxImage;
    let hoverImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        boxImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        boxImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        boxImage = <img src={imageSrc} alt={title}/>
    }

    if(hoverImg.fixed && typeof hoverImg.fixed !== 'function'){
        hoverImage = <Img fixed={hoverImg.fixed} alt={title}/>;
    } else if(hoverImg.fluid){
        hoverImage = <Image fluid={hoverImg.fluid} alt={title}/>
    } else{
        hoverImage = <img src={hoverImg} alt={title}/>
    }
    return (
        <BoxImgWrapper {...boxStyle}>
            <BoxImgInner>
                {imageSrc && (
                    <BoxImgMedia>
                        <DefaultImage>
                            {boxImage}
                        </DefaultImage>
                        <HoverImage>
                            {hoverImage}
                        </HoverImage>
                    </BoxImgMedia>
                )}
                <BoxImgContent>
                    {title && <HeadingWrap as='h5' {...headingStyle}>{title}</HeadingWrap>}
                    {desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
                    <Button 
                        className="button"
                        to={path}
                        icon={<MdTrendingFlat/>}
                        iconposition="right"
                        icondistance="4px"
                        varient="texted"
                        hover="false">Discover Now</Button>
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

BoxImage.defaultProps = {
    path: "/"
}

export default BoxImage;