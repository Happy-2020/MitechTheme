import styled from "styled-components";
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    padding-top: 80px;
    padding-bottom: 80px;
    @media ${device.medium}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
    @media ${device.medium}{
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;