import React from 'react'
import PropTypes from 'prop-types'
import { MdTrendingFlat } from "react-icons/md";
import {ItemWrap, ItemAnchor, Marker, TitleWrap, TitleInner, Title, IconWrap} from './numbered-list-item.style'

export const NumberedListItem = ({path, number, children}) => {
    let numb = number < 10 ? `0${number}` : number;
    return (
        <ItemWrap>
            <ItemAnchor path={path}>
                {number && <Marker>{numb}</Marker>}
                <TitleWrap>
                    <TitleInner>
                        <Title>{children}</Title>
                        <IconWrap>
                            <MdTrendingFlat className="icon icon-1"/>
                            <MdTrendingFlat className="icon icon-2"/>
                        </IconWrap>
                    </TitleInner>
                </TitleWrap>
            </ItemAnchor>
        </ItemWrap>
    )
}
 
NumberedListItem.propTypes = {
    path: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title: PropTypes.string
}

NumberedListItem.defautProps = {
    path: "/"
}
