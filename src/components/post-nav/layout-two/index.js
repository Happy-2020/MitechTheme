import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'gatsby'
import { NavItem, NavInner } from './post-nav.style'

const PostNav = ({ title, path, image, rel }) => {
    let imageSrc;
    if (image) {
        imageSrc = image.src;
    }
    return (
        <NavItem rel={rel} className="post-nav">
            <Link to={`/${path}`}>
                <NavInner rel={rel} bgImage={imageSrc}>
                    <h6>{title}</h6>
                    <FaAngleRight className="icon" />
                </NavInner>
            </Link>
        </NavItem>
    )
}

export default PostNav;