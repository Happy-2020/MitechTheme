import React from 'react'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { useStaticQuery, graphql } from "gatsby"
import {PageHeaderWrap} from './page-header.style';

const PageHeader = ({pageContext, location, title}) => {
    const { breadcrumb: { crumbs } } = pageContext;
    const disableLinks = [
        "/elements", 
        "/category", 
        "/profile", 
        "/date", 
        "/tag", 
        "/page", 
        "/blog", 
        "/blog/page", 
        "/blogs",
        "/services"
    ]
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split('/');
    const label = crumbLabelArr[crumbLabelArr.length - 1]
    const labelArr = label.split('-');
    const imageData = useStaticQuery(graphql `
        query breadCrumbImgQuery {
            file(relativePath: {eq: "images/bg/title-bar-01-bg.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920, maxHeight: 400, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
      
    `);
    return (
        <PageHeaderWrap fluid={imageData.file.childImageSharp.fluid}>
            <Breadcrumb
                title={title}
                crumbs={crumbs}
                crumbLabel={labelArr.join(' ')}            
                disableLinks={disableLinks}
            />
        </PageHeaderWrap>
    )
}

export default PageHeader
