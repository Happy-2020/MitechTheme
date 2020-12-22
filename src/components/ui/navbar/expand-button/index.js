import React from 'react'
import { MdExpandMore } from "react-icons/md";
import {ExpandButtonWrap} from './expand-button.style'

export const ExpandButton = ({onClick, ...props}) => {
    return (
        <ExpandButtonWrap className="menu-expand" onClick={onClick} {...props}>
            <MdExpandMore className="icon"/>
        </ExpandButtonWrap>
    )
}

