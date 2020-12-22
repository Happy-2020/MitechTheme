import styled from 'styled-components';
import {device} from '../../../../theme'

export const OurMissionWrap = styled.div `
    margin-top: 70px;
    @media ${device.small}{
        margin-top: 50px;
    }
`;
 
export const OurMissionImageWrap = styled.div `
    position: relative;
    img{
        border-radius: 5px;
    }
`;

export const MissionContentWrap = styled.div `
    @media ${device.medium}{
        margin-top: 30px;
    }
`;

export const VideoBtnWrap = styled.div `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const ButtonWrap = styled.div `
    margin-top: 40px;
`;