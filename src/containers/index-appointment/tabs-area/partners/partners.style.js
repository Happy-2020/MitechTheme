import styled from 'styled-components';
import {device} from '../../../../theme'

export const PartnersWrap = styled.div `
    display: grid;
    grid-row-gap: 60px;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 70px;
    @media ${device.medium}{
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${device.small}{
        grid-template-columns: repeat(2, 1fr);
        margin-top: 50px;
    }
`;

export const BrandLogoWrap = styled.div `
    align-self: center;
    text-align: center;
    position: relative;
`; 