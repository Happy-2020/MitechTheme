import styled from 'styled-components'
import { device } from '../../../theme'

export const SectionWrap = styled.div`
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-bottom: 60px;
    }
    .box-item{
        margin-bottom: 50px;
    }
`;

export const SectionBottom = styled.div`
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.40;
    color: #333333;
`;