import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {AboutServiceWrapStyle, AboutServiceInner} from './about-service-wrap.style'

const AboutServiceWrap = ({children}) => {
    const imageData = useStaticQuery(graphql `
        query ABoutServiceImageQuery {
            file(relativePath: {eq: "images/bg/mitech-home-infotechno-section-company-bg.png"}) {
                childImageSharp {
                    fluid(maxWidth: 428, maxHeight: 680, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }      
    `)
    return (
        <AboutServiceWrapStyle>
            <AboutServiceInner fluid={imageData.file.childImageSharp.fluid}></AboutServiceInner>
            {children}
        </AboutServiceWrapStyle>)
}

AboutServiceWrap.propTypes = {
    children: PropTypes.node.isRequired
}

export default AboutServiceWrap; 