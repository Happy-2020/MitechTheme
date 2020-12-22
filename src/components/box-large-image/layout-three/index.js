import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import { MdTrendingFlat } from "react-icons/md";
import Img from 'gatsby-image'
import Button from '../../ui/button'
import Image from '../../image'
import {
    BoxLargeImgWrap, 
    BoxLargeImgInner, 
    BoxLargeImgMedia,
    BoxLargeImgLink,
    BoxLargeImgContent,
    HeadingWrap,
    TextWrap,
    BoxLargeImgBtnWrap} from './box-large-image.style'

const BoxLargeImage = ({imageSrc, title, desc, path, ...restProps}) => {
    let boxImage;
    if(imageSrc.fixed){
        boxImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        boxImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        boxImage = <img src={imageSrc} alt={title}/>
    }
    
    const {boxStyle, imgStyle, headingStyle, descStyle, ...restStyle} = restProps;
    
    return (
        <BoxLargeImgWrap {...restStyle}>
            <BoxLargeImgInner {...boxStyle}>
                {boxImage && (
                    <BoxLargeImgMedia {...imgStyle}>
                        {boxImage}
                        <BoxLargeImgLink path={path}>{title}</BoxLargeImgLink>
                    </BoxLargeImgMedia>
                )}
                <BoxLargeImgContent>
                    {title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
                    {desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
                    {path && (
                        <BoxLargeImgBtnWrap>
                            <Button 
                                className="button"
                                as={Link}
                                to={path}
                                icon={<MdTrendingFlat/>}
                                iconposition="right"
                                icondistance="4px"
                                fontWeight={400}
                                varient="texted">Discover Now</Button>
                        </BoxLargeImgBtnWrap>
                    )}
                </BoxLargeImgContent>
            </BoxLargeImgInner>
        </BoxLargeImgWrap>
    )
} 

BoxLargeImage.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    desc: PropTypes.string,
    headingStyle: PropTypes.object,
    descStyle: PropTypes.object
}

BoxLargeImage.defaultProps = {
    path: "/"
}

export default BoxLargeImage;
