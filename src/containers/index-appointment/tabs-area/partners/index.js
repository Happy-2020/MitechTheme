import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {PartnersWrap, BrandLogoWrap} from './partners.style'
import ClientLogo from '../../../../components/ui/client-logo'

const Partners = ({content}) => {
    const partnersQueryData = useStaticQuery(graphql `
        query PartnersDataQuery{
            allPartnersJson {
                edges {
                  node {
                    id
                    path
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          ...GatsbyImageSharpFluid_tracedSVG
                          presentationWidth
                          presentationHeight
                          aspectRatio
                        }
                      }
                    }
                    hover_image {
                      childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid_tracedSVG
                            presentationWidth
                            presentationHeight
                            aspectRatio
                        }
                      }
                    }
                  }
                }
            }
        }
    `); 
    const partnersData = partnersQueryData.allPartnersJson.edges;
    return(
        <PartnersWrap>
            {partnersData.map(data => (
                <BrandLogoWrap key={data.node.id}>
                    <ClientLogo
                        layout={1}
                        title={data.node.id}
                        path={data.node.path}
                        brandImage={data.node.image.childImageSharp}
                        hoverImage={data.node.hover_image.childImageSharp}
                    />
                </BrandLogoWrap>
            ))}
        </PartnersWrap>
    )
}
export default Partners;