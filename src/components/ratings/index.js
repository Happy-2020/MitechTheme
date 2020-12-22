import React from 'react'
import { MdStar } from "react-icons/md";
import {RatingsWrap} from './ratings.style.js'

const Ratings = ({rating, ...restProps}) => {
    const ratingRound = Math.round(rating)
    const ratingItems = [];
    const disableRating = [];
    for(let i=1; i <= ratingRound; i++){
        ratingItems.push(<MdStar key={`rating-${i}`}/>)
    }

    if(rating < 5){
        for(let i=1; i <= 5 - ratingRound; i++){
            disableRating.push(<MdStar className="disable" key={`disable-rating-${i}`}/>)
        }
    }
    return (
        <RatingsWrap {...restProps}>
            {ratingItems}
            {disableRating}
        </RatingsWrap>
    )
}

export default Ratings; 