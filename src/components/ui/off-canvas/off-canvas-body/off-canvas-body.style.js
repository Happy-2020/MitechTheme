import styled from 'styled-components';
import { device } from '../../../../theme'

export const OffCanvasBodyWrap = styled.div`
    margin-top: 20px;
    margin-right: 25px;
    margin-bottom: 100px;
    margin-left: 40px;
    overflow: hidden;
    @media ${device.xsmall}{
        padding: 20px 30px 100px;
    }
`;