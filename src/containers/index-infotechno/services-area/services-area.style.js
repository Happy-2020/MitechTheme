import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 100px;
    @media ${device.medium}{
        padding-top: 75px;
    }
    @media ${device.small}{
        padding-top: 54px;
    }
    .box-item{
        margin-top: 55px;
        @media ${device.small}{
            padding-top: 41px;
        }
    }
`;

export const SectionBottom = styled.div `
    margin-top: 56px;
    text-align: center;
    @media ${device.small} {
        margin-top: 42px;
    }
`;