import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const ConatactWrapper = styled(BackgroundImage) `
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #eff2f6;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const LeftBox = styled.div ``;

export const ContactInfoBox = styled.div `
    text-align: center;
    .icon{
        color: ${props => props.theme.colors.themeColor};
        font-size: 40px;
    }
    @media ${device.medium}{
        margin-top: 45px;
    }
`;