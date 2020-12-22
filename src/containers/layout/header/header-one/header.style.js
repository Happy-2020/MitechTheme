import styled, {css} from 'styled-components';
import {device} from '../../../../theme'
import {fadeInDown} from '../../../../assets/css/animations'

export const HeaderWrap = styled.header `
    border-color: #E4E8F6;
    position: relative;
    z-index: 999;
`;

export const HeaderTop = styled.div `
    ${props => props.borderBottom && css `
        border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    `}
`;

export const HeaderBottom = styled.div `
    position: relative;
`;
 
export const FixedHeader = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #fff;
    z-index: 1;
    ${props => props.isSticky && css `
        position: fixed;
        z-index: 999;
        box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
        animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    `}
`;

export const HeaderMain = styled.div `
    display: flex;
    position: relative;
`;

export const HeaderLeft = styled.div `
    flex-basis: 23.5%;
    justify-content: center;
    padding: 14px 0;
    @media ${device.xxlarge}{
        flex-basis: 20%;
    }
    @media ${device.xlarge}{
        flex-basis: 13%;
    }
    @media ${device.large}{
        flex-basis: 40%;
        justify-content: flex-start;
    }
    @media ${device.xsmall}{
        flex-basis: 50%;
    }
`;

export const HeaderMiddle = styled.div `
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const HeaderRight = styled.div `
    flex-shrink: 0;
    flex-basis: 23.5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media ${device.xxlarge}{
        flex-basis: 25%;
    }
    @media ${device.xlarge}{
        flex-basis: 29%;
    }
    @media ${device.large}{
        flex-basis: 60%;
    }
    @media ${device.xsmall}{
        flex-basis: 50%;
    }
`;

export const HeaderNavigation = styled.div `
    display: block;
    @media ${device.large}{
        display: none;
    }
` 
export const HeaderRightInner = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
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
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        visibility: hidden;
        opacity: 0;
        transform: translateY(30px);
        z-index: 9;
        height: auto;
        ${props => props.isOpen && css `
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        `}
    }
    @media ${device.xsmall}{
        flex-direction: column;
    }
`;

export const HeaderElement = styled.div `
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: ${props => props.pr};
    padding-left: ${props => props.pl};
    border-left: ${props => props.bl};
    ${props => props.responsive && css `
        ${props => props.responsive.xlarge && css `
            @media ${device.xlarge}{
                padding-right: ${props => props.responsive.xlarge.pr};
                margin-top: ${props => props.responsive.xlarge.mt};
            }
        `}
        ${props => props.responsive.large && css `
            @media ${device.large}{
                padding-right: ${props => props.responsive.large.pr};
                margin-top: ${props => props.responsive.xlarge.mt};
            }
        `}
        ${props => props.responsive.medium && css `
            @media ${device.medium}{
                padding-right: ${props => props.responsive.medium.pr};
                margin-top: ${props => props.responsive.medium.mt};
            }
        `}
        ${props => props.responsive.small && css `
            @media ${device.small}{
                padding-right: ${props => props.responsive.small.pr};
                margin-top: ${props => props.responsive.small.mt};
            }
        `}
        ${props => props.responsive.xsmall && css `
            @media ${device.xsmall}{
                padding-right: ${props => props.responsive.xsmall.pr};
                margin-top: ${props => props.responsive.xsmall.mt};
            }
        `}
    `}
    ${props => props.visibility && css `
        display: ${props => props.visibility.default === 'true' ? 'flex' : 'none'};
        @media  ${device.large}{
            display: ${props => props.visibility.lg === 'true' ? 'flex' : 'none'};
        }
        @media  ${device.medium}{
            ${props => props.visibility.md !== undefined && css `
                display: ${props => props.visibility.md === 'true' ? 'flex' : 'none'};
            `}
        }
        @media  ${device.small}{
            ${props => props.visibility.sm !== undefined && css `
                display: ${props => props.visibility.sm === 'true' ? 'flex' : 'none'};
            `}
        }
    `}
`;

export const FixedHeaderHeight = styled.div `
    height: ${props => props.height}px;
`;