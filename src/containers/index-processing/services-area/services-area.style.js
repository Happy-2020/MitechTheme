import styled from "styled-components";
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 100px;
    padding-bottom: 90px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 70px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 50px;
    }
    .box-item{
        margin-top: 60px;
        @media ${device.small}{
            margin-top: 47px;
        }
    }
`;

export const SectionBottom = styled.div `
    text-align: center;
    margin-top: 51px;
    @media ${device.small}{
        margin-top: 36px;
    }
`;