import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const AboutServiceWrapStyle = styled.div `
    padding-top: 100px;
    padding-bottom: 100px;
    background: rgb(255,255,255); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(255,255,255,1) 0%,rgba(245,245,245,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(245,245,245,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f5f5f5',GradientType=0 ); /* IE6-9 */

    position: relative;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`; 

export const AboutServiceInner = styled(BackgroundImage)`
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: top 140px left !important;
    background-size: auto !important;
`;