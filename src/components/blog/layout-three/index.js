import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { MdTrendingFlat } from "react-icons/md";
import Image from '../../image'
import Button from '../../ui/button'
import Anchor from '../../ui/anchor'
import AuthorMeta from '../author-meta'
import BlogMeta from '../blog-meta'
import {
    BlogWrapper,
    BlogMedia,
    BlogThumb,
    BlogHeaderMeta,
    BlogInfo,
    BlogTitle,
    BlogExcerpt,
    ReadMoreBtn
} from './blog.style'

const Blog = ({title, format, slug, date, dateSlug, author, featured_image, excerpt, ...restProps}) => {
    const {metaStyle, btnStyle} = restProps;
    
    return (
        <BlogWrapper>
            <BlogMedia>
                {format === 'image' && (
                    <BlogThumb>
                        <Anchor path={`/${slug}`}>
                            <Image fluid={featured_image.childImageSharp.fluid} alt={title}/>
                        </Anchor>
                    </BlogThumb>
                )}
                <BlogHeaderMeta>
                    {author && (
                        <AuthorMeta
                            {...metaStyle}
                            slug={author.fields.authorId}
                            name={author.name}
                            imageSrc={author.image.childImageSharp}
                        />
                    )}
                    {date && (
                        <BlogMeta
                            {...metaStyle}
                            path={`/date/${dateSlug}`}
                            text={date}
                            icon={<FaCalendarAlt/>}  
                        />
                    )}
                </BlogHeaderMeta>
            </BlogMedia>
            <BlogInfo>
                {title && <BlogTitle><Anchor to={`/${slug}`}>{title}</Anchor></BlogTitle>}
                {excerpt && <BlogExcerpt>{excerpt}</BlogExcerpt>}
                <ReadMoreBtn>
                    <Button {...btnStyle} icon={<MdTrendingFlat/>}>Read More</Button>
                </ReadMoreBtn>
            </BlogInfo>
        </BlogWrapper>
    )
}

Blog.defaultProps = {
    metaStyle: {
        color: '#fff',
        ml: '8px',
        mr: '8px'
    },
    btnStyle: {
        varient: 'texted',
        fontWeight: 400,
        icondistance: '4px',
        hover: "false",
        border: {
            bottom:{
                color: '#ddd'
            }
        }
    }
}

export default Blog
