import React from 'react';
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { BoxIconWrap, BoxIconInner, BoxIconTop, IconWrap, Heading, BoxIconBottom, Text } from './box-icon.style'

const BoxIcon = ({ icon, title, desc }) => {
    const gatsbyImg = icon && icon.childImageSharp;
    const imageSrc = gatsbyImg || icon;
    let boxImage;
    if (imageSrc.fixed && typeof imageSrc.fixed !== 'function') {
        boxImage = <Img fixed={imageSrc.fixed} alt={title || 'Box Icon'} />;
    } else {
        boxImage = <img src={imageSrc} alt={title || 'Box Icon'} />
    }

    return (
        <BoxIconWrap>
            <BoxIconInner>
                <BoxIconTop>
                    {icon && (
                        <IconWrap>
                            {boxImage}
                        </IconWrap>
                    )}
                    {title && <Heading>{title}</Heading>}
                </BoxIconTop>
                {desc && (
                    <BoxIconBottom>
                        <Text>{desc}</Text>
                    </BoxIconBottom>
                )}
            </BoxIconInner>
        </BoxIconWrap>
    )
}

BoxIcon.defaultProps = {
    title: '',
    desc: '',
    icon: {}
}

BoxIcon.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default BoxIcon;