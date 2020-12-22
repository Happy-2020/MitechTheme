import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Image from '../../image'
import Anchor from '../../ui/anchor'
import Text from '../../ui/text'
import {AuthorMetaWrap} from './author-meta.style'

const AuthorMeta = ({slug, name, imageSrc, ...restProps}) => {
    let authorImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        authorImage = <Img fixed={imageSrc.fixed} alt={name}/>;
    } else if(imageSrc.fluid){
        authorImage = <Image fluid={imageSrc.fluid} alt={name}/>
    } else{
        authorImage = <img src={imageSrc} alt={name}/>
    }
    
    return (
        <AuthorMetaWrap {...restProps}>
            <Anchor path={`/profile/${slug}`}>
                {authorImage}
                <Text as="span">{name}</Text>
            </Anchor>
        </AuthorMetaWrap>
    )
}

AuthorMeta.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.object,
    ml: PropTypes.string,
    mr: PropTypes.string
}

export default AuthorMeta;