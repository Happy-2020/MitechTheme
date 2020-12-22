import styled from "styled-components";
import { device } from '../../../theme'

export const SectionWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 92px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 72px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 52px;
    }
`;

export const AboutHeading = styled.div``;

export const AboutText = styled.div``;