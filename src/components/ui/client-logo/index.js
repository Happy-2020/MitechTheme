import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import {BrandLogoWrap} from './client-logo.style'

const ClientLogo = ({path, brandImage, hoverImage, title, ...props}) => {
    let brandImg;
    let hoverImg;
    if(brandImage.fixed && typeof brandImage.fixed !== 'function'){
        brandImg = <Img fixed={brandImage.fixed} alt={title}/>;
    } else if(brandImage.fluid){
        brandImg = <Image fluid={brandImage.fluid} alt={title}/>;
    } else {
        brandImg = <img src={brandImage} className="img-fluid" alt={title}/>
    }
    if(hoverImage){
        if(hoverImage.fixed && typeof hoverImage.fixed !== 'function'){
            hoverImg = <Img fixed={hoverImage.fixed} alt={title}/>;
        } else if(hoverImage.fluid){
            hoverImg = <Image fluid={hoverImage.fluid} alt={title}/>;
        } else {
            hoverImg = <img src={hoverImage} className="img-fluid" alt={title}/>
        }
    }
     
    return (
        <BrandLogoWrap {...props}>
            <a href={path}>
                <div className="brand-logo__image">
                    {brandImg}
                </div>
                {(props.layout === 1 || props.layout === 2) && 
                    <div className="brand-logo__image-hover">
                        {hoverImg}
                    </div>
                }
            </a>
        </BrandLogoWrap>
    )
}

ClientLogo.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    hoverImage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}

ClientLogo.defaultProps = {
    layout: 1,
    path: '/',
    title: 'Brand Logo'
}

export default ClientLogo; 