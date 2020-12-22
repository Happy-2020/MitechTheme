import React from 'react'
import Image from '../../image'
import {VideoThumbWrapper} from './video-thumb.style'

const VideoThumb = ({poster, title, onClick}) => {
    return (
        <VideoThumbWrapper onClick={onClick}>
            <div className="video-poster">
                <Image fluid={poster} alt={title}/>					
            </div>
            <div className="video-overlay">
                <div className="video-button">
                    <div className="video-play">
                        <span className="video-play-icon"></span>
                    </div>
                </div>
            </div>
        </VideoThumbWrapper>
    )
}

export default VideoThumb;