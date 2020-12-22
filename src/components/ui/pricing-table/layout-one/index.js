import React from 'react'
import Img from 'gatsby-image'
import Image from '../../../image'
import { MdDone } from "react-icons/md";
import Button from '../../button'
import {
    PricingTableWrap,
    PricingTableInner,
    PricingTableHead,
    PricingTableTitle,
    PricingTableImage,
    PricingTablePrice,
    PricingTableBody,
    PricingTableBtn,
    PricingTableList,
    PricingTableFeatureMark
} from './style'


const PricingTable = ({ title, period, image, price, isFeatured, path, features }) => {
    const btnStyle = {
        varient: !isFeatured ? 'outlined' : 'contained',
        hover: !isFeatured ? "true" : 2
    }
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
        <PricingTableWrap>
            <PricingTableInner>
                {isFeatured && (
                    <PricingTableFeatureMark>
                        <span>Popular Choice</span>
                    </PricingTableFeatureMark>
                )}
                <PricingTableHead>
                    {title && <PricingTableTitle>{title}</PricingTableTitle>}
                    {image && (
                        <PricingTableImage>
                            {boxImage}
                        </PricingTableImage>
                    )}
                    {price && (
                        <PricingTablePrice>
                            <sup>$</sup>
                            <h6>{price}</h6>
                            <sub>/{period === 'monthly' ? 'mo' : 'y'}</sub>
                        </PricingTablePrice>
                    )}
                </PricingTableHead>
                <PricingTableBody>
                    {path && (
                        <PricingTableBtn>
                            <Button {...btnStyle} to={path}>Learn More</Button>
                        </PricingTableBtn>
                    )}
                    {features && (
                        <PricingTableList>
                            {features.map(feature => <li key={feature.id}><MdDone /><span>{feature.text}</span></li>)}
                        </PricingTableList>
                    )}
                </PricingTableBody>
            </PricingTableInner>
        </PricingTableWrap>
    )
}

export default PricingTable
