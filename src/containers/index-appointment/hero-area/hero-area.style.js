import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const HeroWrapper = styled(BackgroundImage) `
    padding-top: 120px;
    padding-bottom: 120px;
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const HeroTextWrap = styled.div `
    @media ${device.small}{
        text-align: center;
        margin-bottom: 60px;
    }
`;

export const HeroButton = styled.div `
    display: flex;
    align-items: center;
    @media ${device.small}{
        justify-content: center;
    }
`;

export const AppointmentWrap = styled.div `
    max-width: 400px;
    margin-left: auto;
    background: #fff;
    box-shadow: 0 2px 30px rgba(0,0,0,0.1);
    padding: 42px 30px 51px;
    border-radius: 5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;
 
export const AppointmentTitleWrap = styled.div `
    margin-bottom: 40px;
    text-align: center;
`;


export const AppointmentFormWrap = styled.div `
    text-align: left;
`;