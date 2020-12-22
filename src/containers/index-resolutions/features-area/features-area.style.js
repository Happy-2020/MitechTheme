import styled from "styled-components";
import {device} from '../../../theme'

export const SectionWrap = styled.section `
    background: #F8F8F8;
    margin-top: -110px;
    @media ${device.medium}{
        margin-top: 0;
        padding-top: 30px;
    }
`;