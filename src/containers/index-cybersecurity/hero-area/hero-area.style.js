import styled from "styled-components";
import { device } from '../../../theme'

export const HeroWrapper = styled.section`
    overflow: hidden;
    background: #F6FAFE;
`;

export const HeroContent = styled.div`
    max-width: 680px;
    width: 100%;
    margin-left: auto;
    padding-left: 110px;
    @media ${device.medium}{
        padding-left: 0;
    }
    @media ${device.small}{
        padding-top: 100px;
    }
`;

export const HeroImagesWrap = styled.div`
    position: relative;
    padding-top: 80px;
    @media ${device.small}{
        padding-top: 60px;
    }
`;

export const HeroImageOne = styled.figure`
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 100%;
    @media ${device.large}{
        height: auto;
    }
`;

export const HeroImageTwo = styled.figure`
    position: relative;
    z-index: 2;
`;