import styled from 'styled-components'
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding: 150px 0;
    background: #f6f2ed;
    @media ${device.medium}{
        padding: 120px 0;
    }
    @media ${device.small}{
        padding: 60px 0;
    }
`;

export const CtaTextBox = styled.div `
    text-align: center;
`;