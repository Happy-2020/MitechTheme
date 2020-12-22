import styled from 'styled-components'
import { device } from '../../../theme'

export const ContactFormWrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 75px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 55px;
        padding-bottom: 60px;
    }
`;

export const LeftBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 45px;
    }
`; 