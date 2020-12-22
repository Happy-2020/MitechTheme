import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 100px;
    padding-bottom: 100px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const SectionBottom = styled.div `
    margin-top: 61px;
    text-align: center;
    @media ${device.small} {
        margin-top: 46px;
    }
`;