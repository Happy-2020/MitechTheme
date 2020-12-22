import styled from 'styled-components';
import {device} from '../../../theme'

export const ServicesWrapper = styled.section `
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
`;

export const SectionBottom = styled.div `
    margin-top: 30px;
`;