import React from 'react'
import { MdTrendingFlat } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby"
import {List, ListItem, ListLink} from './recent-post-list.style'

const RecentPostList = ({listStyle}) => {
    const blogData = useStaticQuery(graphql `
        query RecentBlogQueryData{
            allMarkdownRemark(filter: {frontmatter: {is_featured: {eq: false}}}, limit: 5, sort: {fields: frontmatter___date, order: ASC}) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    frontmatter {
                      title
                    }
                  }
                }
            }
        }
    `)
    const latestBlogs = blogData.allMarkdownRemark.edges;
    return (
        <List>
            {latestBlogs && latestBlogs.map((latestBlog, i) => (
                <ListItem key={`${latestBlog.node.fields.slug}-${i}`}>
                    <ListLink path={`/${latestBlog.node.fields.slug}`}>
                        <MdTrendingFlat className="icon icon-1"/>
                        <MdTrendingFlat className="icon icon-2"/>
                        <span>{latestBlog.node.frontmatter.title}</span>
                    </ListLink>
                </ListItem>
            ))}
        </List>
    )
}

export default RecentPostList;