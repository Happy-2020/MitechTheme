import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdShare } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import Social, { SocialLink } from '../../ui/social'
import Text from '../../ui/text'
import Button from '../../ui/button'
import {
    SocialShareWrap,
    SocialMediaWrap,
    FloatingSocialBox
} from './social-share.style'

const SocialShare = ({ socialStyle, socialButtonStyle, title, url }) => {
    const [socialOpen, setSocialOpen] = useState(false);
    const getUrl = useStaticQuery(graphql`
        query SocialSiteUrlQuery {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }      
    `)
    const basUrl = getUrl.site.siteMetadata.siteUrl;
    const socialHandler = () => {
        setSocialOpen(prev => !prev)
    }
    return (
        <SocialShareWrap className="social-share">
            <Text as="span" className="share-label">Share this post</Text>
            <SocialMediaWrap>
                <Button {...socialButtonStyle} onClick={socialHandler}>
                    <MdShare />
                </Button>
                <FloatingSocialBox isOpen={socialOpen}>
                    <Social {...socialStyle}>
                        <SocialLink
                            path={`https://twitter.com/intent/tweet?status=${title}+${basUrl + url}`} >
                            <TiSocialTwitter />
                        </SocialLink>
                        <SocialLink
                            path={`https://www.facebook.com/share.php?u=${basUrl + url}&title=${title}`}>
                            <TiSocialFacebook />
                        </SocialLink>
                        <SocialLink
                            path={`https://www.linkedin.com/shareArticle?mini=true&url=${basUrl + url}&title=${title}`} >
                            <TiSocialLinkedin />
                        </SocialLink>
                    </Social>
                </FloatingSocialBox>
            </SocialMediaWrap>
        </SocialShareWrap>
    )
}

SocialShare.propTypes = {
    socialButtonStyle: PropTypes.object,
    socialStyle: PropTypes.object
}

SocialShare.defaultProps = {
    socialButtonStyle: {
        varient: 'onlyIcon',
        width: '48px',
        shape: 'bullet',
        hover: "false"
    },
    socialStyle: {
        fontSize: '12px',
        color: '#555',
        space: "14px"
    }
}



export default SocialShare;