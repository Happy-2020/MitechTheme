import styled, { css } from 'styled-components';
import { device } from '../../../../theme'
import { fadeInDown } from '../../../../assets/css/animations'

export const HeaderOuter = styled.div`
    position: relative;
`;

export const FixedHeader = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    transition: ${props => props.theme.transition};
    background-color: #fff;
`;

export const HeaderMain = styled.div`
    display: flex;
    position: relative;
    padding: 18px 0;
`;

export const HeaderLeft = styled.div`
    flex-basis: 20%;
    justify-content: flex-start;
    padding: 14px 0;
    @media ${device.small}{
        flex-basis: 50%;
    }
`;

export const HeaderMiddle = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const HeaderRight = styled.div`
    flex-shrink: 0;
    flex-basis: auto;
    padding-left: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderNavigation = styled.div`
    display: block;
    @media ${device.large}{
        display: none;
    }
`
export const HeaderRightInner = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    z-index: 999;
    @media ${device.small}{
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        padding: 20px;
        box-shadow: 0 15px 40px rgba(0,0,0,0.09);
        background-color: #ffffff;
        transition: ${props => props.theme.transition};
        visibility: hidden;
        opacity: 0;
        transform: translateY(30px);
        ${props => props.isOpen && css`
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        `}
    }
    @media ${device.xsmall}{
        flex-direction: column;
    }
`

export const HeaderElement = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    ${props => props.visibility && css`
        display: ${props => props.visibility.default === 'true' ? 'flex' : 'none'};
        @media  ${device.large}{
            display: ${props => props.visibility.lg === 'true' ? 'flex' : 'none'};
        }
        @media  ${device.medium}{
            ${props => props.visibility.md !== undefined && css`
                display: ${props => props.visibility.md === 'true' ? 'flex' : 'none'};
            `}
        }
        @media  ${device.small}{
            ${props => props.visibility.sm !== undefined && css`
                display: ${props => props.visibility.sm === 'true' ? 'flex' : 'none'};
            `}
        }
    `}
`;

export const FixedHeaderHeight = styled.div`
    height: ${props => props.height}px;
`;



export const HeaderWrap = styled.header` 
    position: relative;
    ${props => props.transparent && css`
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        background: transparent;
        z-index: 9;
        @media ${device.medium}{
            ${HeaderMain}{
                padding: 0;
            }
        }
        ${FixedHeader}{
            background: transparent;
        }
    `}
    ${props => props.isSticky && css`
        ${FixedHeader}{
            position: fixed;
            z-index: 999;
            box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
            animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
            transition: ${props => props.theme.transition};
        }
        ${props => props.transparent && css`
            ${FixedHeader}{
                background: #fff;
            }
            ${HeaderMain}{
                padding: 0;
            }
        `}
    `}
`;