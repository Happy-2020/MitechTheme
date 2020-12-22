import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    background-color: #F8F8F8;
    padding-top: 100px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 80px;
        padding-bottom: 80px;   
    }
`;
