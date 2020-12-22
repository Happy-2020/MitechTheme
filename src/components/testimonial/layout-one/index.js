import React from 'react'
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {
    TestimonialWrap,
    TestimonialInfo,
    TestimonialMedia,
    TestimonialAuthor,
    TestimonialRating,
    AuthorInfo,
    AuthorName,
    AuthorRole,
    Review
} from './testimonial.style'

const Testimonial = ({ authorName, authroRole, authorImg, rating, review, ...testimonialStyle }) => {
    const { wrapperStyle, infoStyle, imageStyle, reviewStyle } = testimonialStyle;
    const ratingItems = [];
    const disableRating = [];
    for (let i = 1; i <= rating; i++) {
        ratingItems.push(<span key={`rating-${i}`}><FaRegStar className="rating" /></span>)
    }

    if (rating < 5) {
        for (let i = 1; i <= 5 - rating; i++) {
            disableRating.push(<span key={`disable-rating-${i}`}><FaRegStar className="rating disable" /></span>)
        }
    }
    let authorImage;
    if (authorImg.fixed && typeof authorImg.fixed !== 'function') {
        authorImage = <Img fixed={authorImg.fixed} alt={authorName} />;
    } else {
        authorImage = <img src={authorImg} className="img-fluid" alt={authorName} />;
    }

    return (
        <TestimonialWrap {...wrapperStyle}>
            <TestimonialInfo {...infoStyle}>
                {authorImg && (
                    <TestimonialMedia {...imageStyle}>
                        {authorImage}
                    </TestimonialMedia>
                )}
                <TestimonialAuthor>
                    {rating && (
                        <TestimonialRating>
                            {ratingItems}
                            {disableRating}
                        </TestimonialRating>
                    )}
                    <AuthorInfo>
                        {authorName && <AuthorName>{authorName}</AuthorName>}
                        {authroRole && <AuthorRole>{authroRole}</AuthorRole>}
                    </AuthorInfo>
                </TestimonialAuthor>
            </TestimonialInfo>
            {review && <Review {...reviewStyle}>{review}</Review>}
        </TestimonialWrap>
    )
}

Testimonial.propTypes = {
    authorImg: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    authorName: PropTypes.string,
    authroRole: PropTypes.string,
    review: PropTypes.string,
    testimonialStyle: PropTypes.object
}

Testimonial.defaultProps = {
    imageStyle: {
        circle: true
    }
}

export default Testimonial;