import styled from 'styled-components'
import {device} from '../../../theme'

export const HeroWrapper = styled.section `
    background-color: #f4efe9;
`;

export const HeroTextBox = styled.div `
    max-width: 605px;
    width: 100%;
    padding-left: 30px;
    margin-left: auto;
    @media ${device.small}{
        padding-left: 0;
        margin-top: 50px;
        margin-bottom: 20px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
`;

export const ImageBoxWrap = styled.div `
    position: relative;
    margin-top: 20px;
    @media ${device.medium}{
        margin-top: 0;
        padding-top: 160px;
    }
    @media ${device.small}{
        padding-top: 0;
        margin-left: auto;
        margin-right: auto;
        max-width: 370px
    }
`;

export const ImageBoxOne = styled.div `
    position: absolute;
    top: 10px;
    width: 100%;
    @media ${device.small}{
        max-width: 260px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ImageBoxTwo = styled.div `
    position: relative;
    z-index: 1;
`;