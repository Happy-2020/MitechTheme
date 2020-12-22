import styled from 'styled-components';
import { device } from '../../../theme'

export const ServicesWrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 62px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 43px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 22px;
    }
`;