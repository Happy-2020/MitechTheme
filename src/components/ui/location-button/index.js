import React from 'react'
import { MdPlace } from "react-icons/md";
import {LocationBtnWrap, LocationBtnText} from './location-button.style'

const LocationButton = (props) => {
    return (
        <LocationBtnWrap {...props}>
            <LocationBtnText type="button">
                <span className="button-icon"><MdPlace className="icon"/></span> 
                <span className="button-text">View on Google map</span>
            </LocationBtnText>
        </LocationBtnWrap>
    )
}
 
export default LocationButton;