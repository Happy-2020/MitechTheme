import React, { useState, Fragment } from 'react'
import Img from 'gatsby-image'
import Image from '../../../image'
import VideoButton from '../../video-button'
import ModalVideo from '../../modal-video'
import { PopupVideoWrap, VideoBtnWrap } from './style'

const PopupVideo = ({ image, video_link, btnStyle }) => {
    const gatsbyImg = image && image.childImageSharp;
    const imageSrc = gatsbyImg || image;
    let boxImage;
    if (imageSrc.fixed && typeof imageSrc.fixed !== 'function') {
        boxImage = <Img fixed={imageSrc.fixed} alt="popup video" />;
    } else if (imageSrc.fluid) {
        boxImage = <Image fluid={imageSrc.fluid} alt="popup video" />
    } else {
        boxImage = <img src={imageSrc} alt="popup video" />
    }
    const [videoOpen, setVideoOpen] = useState(false);
    let video_arr, video_id, video_channel;
    if (video_link) {
        video_arr = video_link.split('=', -1);
        video_id = video_arr[1];
        video_channel = video_link.split(".")[1];
    }
    const modalVideoOpen = () => {
        setVideoOpen(true)
    }
    const modalVideoClose = () => {
        setVideoOpen(false)
    }
    return (
        <Fragment>
            <PopupVideoWrap>
                {boxImage}
                <VideoBtnWrap>
                    <VideoButton {...btnStyle} onClick={modalVideoOpen} />
                </VideoBtnWrap>
            </PopupVideoWrap>
            <ModalVideo
                channel={video_channel}
                videoId={video_id}
                isOpen={videoOpen}
                onClose={modalVideoClose}
            />
        </Fragment>
    )
}

PopupVideo.defaultProps = {
    btnStyle: {
        wave: "false",
        varient: "outlined",
        border: {
            width: "6px"
        }
    }
}

export default PopupVideo
