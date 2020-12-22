import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { DropmenuItemInner } from './dropdown-item-inner.style'

const DropdownItemInner = ({ children, ...props }) => {
    return (
        <DropmenuItemInner {...props}>
            {children}
            {props.active ? <FaAngleDown className="icon" /> : ''}
        </DropmenuItemInner>
    )
}

export default DropdownItemInner
