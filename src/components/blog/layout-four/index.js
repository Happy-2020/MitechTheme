import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import Image from '../../image'
import AuthorMeta from '../author-meta'
import BlogMeta from '../blog-meta'
import Anchor from '../../ui/anchor'
import {truncateString} from '../../../utils/utilFunctions'
import {
    BlogWrapper, 
    BlogMedia,
    BlogThumb,
    BlogThumbMeta,
    BlogInfo,
    BlogHeaderMeta,
    BlogTitle
} from './blog.style'

const Blog = ({format, title, slug, date, dateSlug, author, featured_image, ...restProps}) => {
    const {authorMetaStyle} = restProps;
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
                {author && (
                    <BlogThumbMeta>
                        <AuthorMeta
                            {...authorMetaStyle}
                            slug={author.fields.authorId}
                            name={author.name}
                            imageSrc={author.image.childImageSharp}
                        />
                    </BlogThumbMeta>
                )}
            </BlogMedia>
            <BlogInfo>
                {date && (
                    <BlogHeaderMeta>
                        <BlogMeta
                            path={`/date/${dateSlug}`}
                            text={date}
                            icon={<FaCalendarAlt/>}
                        />
                    </BlogHeaderMeta>
                )}
                {title && <BlogTitle><Anchor path={`/${slug}`}>{truncateString(title, 33)}</Anchor></BlogTitle>}
            </BlogInfo>
        </BlogWrapper>
    )
} 

Blog.defaultProps = {
    authorMetaStyle: {
        color: '#fff'
    }
}

export default Blog
