import styled, { css } from 'styled-components';
import CloseIcon from '../../../assets/images/icons/light-close.png'
import { device } from '../../../theme'

export const OffCanvaseWrap = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #333333;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    z-index: 9999;
    background: rgba(0,0,0,0.7);
    cursor: url(${CloseIcon}) 16 16,pointer;
    overflow-y: hidden;
    visibility: hidden;
    opacity: 0;
    ${props => props.isOpen && css`
        visibility: visible;
        opacity: 1;
    `}
`;

export const OffCanvasInner = styled.div`
    transform: translateX(120%);
    width: 400px;
    height: 100%;
    float: right;
    cursor: default;
    background: #086AD8;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    overflow: hidden;
    @media ${device.xsmall}{
        width: 300px;
    }
    ${props => props.isOpen && css`
        transform: translateX(0%);
    `}
    ${props => props.scrollable && css`
        overflow-y: auto;
        scroll-behavior: smooth;
        &::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        }
        &::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.secondary};
            outline: 1px solid slategrey;
        }
    `}
`;