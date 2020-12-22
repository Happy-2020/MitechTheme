import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Anchor from '../../../components/ui/anchor'
import Image from '../../../components/image'

const BlogAd = (props) => {
    const BlogAdQuery = useStaticQuery(graphql `
        query BlogSidebarAdQuery {
            advertismentsJson(id: {eq: "blog-sidebar-ad-1"}) {
                title
                path
                image {
                    childImageSharp {
                        fluid(maxWidth: 680, maxHeight: 940, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    `)
    const adData = BlogAdQuery.advertismentsJson;
    const imageData = adData.image.childImageSharp.fluid
    return (
        <Anchor path={adData.path} display="block">
            <Image fluid={imageData} alt={adData.title}/>
        </Anchor>
    )
}

export default BlogAd;