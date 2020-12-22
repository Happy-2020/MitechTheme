import styled, { css } from 'styled-components'
import { device } from '../../../../theme'
import { fadeInDown } from '../../../../assets/css/animations'

export const HeaderTop = styled.div`
    position: relative;
`;

export const HeaderMain = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const HeaderTopLeft = styled.div`
    flex-basis: 20%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 25px 0;
    @media ${device.small}{
        padding: 15px 0;
        flex-basis: 50%;
    }
`;

export const HeaderTopRight = styled.div`
    flex-grow: 1;
    align-self: stretch;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    @media ${device.large}{
        flex-basis: 80%;
        max-width: 80%;
    }
    @media ${device.small}{
        flex-basis: 50%;
        max-width: 50%;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    padding-left: 19px;
    @media ${device.small}{
        padding-left: 0;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`;

export const InfoIcon = styled.div`
    width: 41px;
    flex-shrink: 0;
    font-size: 30px;
    line-height: 1;
    color: ${props => props.theme.colors.themeColor};
`;

export const InfoContent = styled.div`
    flex-grow: 1;
`;

export const HeaderTopRightInner = styled.div`
    display: flex;
    width: 100%;
    margin: 0 -12px;
    justify-content: space-between;
    flex-shrink: 0;
    padding: 0 12px;
    align-items: center;
    @media ${device.large}{
        justify-content: flex-end;
    }
    .header-top-info-slider-wrap{
        @media ${device.small}{
            max-width: 100%;
        }
        .swiper-container{
            cursor: w-resize;
            padding: 0 12px;
            overflow: hidden;
            max-width: 760px;
            width: 100%;   
            @media ${device.large}{
                max-width: 540px;
            }
            @media ${device.medium}{
                max-width: 280px;
            }
            @media ${device.small}{
                max-width: 100%;
                width: 100%;
                padding: 0;
            }
        }
        .swiper-slide-active{
            ${InfoItem}{
                border-right: 1px solid #ddd;
            }
        }
        .swiper-slide-next{
            ${InfoItem}{
                border-right: 1px solid #ddd;
                @media ${device.medium}{
                    border: none;
                }
            }
        }
    }
    @media ${device.small}{
        flex-wrap: wrap;
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
        z-index: 1;
        ${props => props.isOpen && css`
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        `}
    }
    @media ${device.xsmall}{
        flex-direction: column;
    }
`;


export const HeaderBottomLeft = styled.div`
    flex-grow: 1;
`;
export const HeaderNavigation = styled.div`
    @media ${device.large}{
        display: none;
    }
`;
export const HeaderBottomRight = styled.div`
    flex-shrink: 0;
    align-self: stretch;
    @media ${device.large}{
        flex-grow: 1;
    }
`;

export const HeaderElement = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: ${props => props.pr};
    padding-left: ${props => props.pl};
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                padding-right: ${props => props.responsive.xlarge.pr};
            }
        `}
        ${props => props.responsive.large && css`
            @media ${device.large}{
                padding-right: ${props => props.responsive.large.pr};
            }
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                padding-right: ${props => props.responsive.medium.pr};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                padding-right: ${props => props.responsive.small.pr};
                width: ${props => props.responsive.small.width};
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                padding-right: ${props => props.responsive.xsmall.pr};
                width: ${props => props.responsive.xsmall.width};
            }
        `}
    `}
     
    ${props => props.visibility && css`
        display: ${props => props.visibility.default === 'true' ? 'flex' : 'none'};
        @media ${device.large}{
            display: ${props => props.visibility.lg === 'true' ? 'flex' : 'none'};
        }
        @media ${device.medium}{
            ${props => props.visibility.md !== undefined && css`
                display: ${props => props.visibility.md === 'true' ? 'flex' : 'none'};
            `}
        }
        @media ${device.small}{
            ${props => props.visibility.sm !== undefined && css`
                display: ${props => props.visibility.sm === 'true' ? 'flex' : 'none'};
            `}
        }
        @media ${device.xsmall}{
            ${props => props.visibility.xs !== undefined && css`
                display: ${props => props.visibility.xs === 'true' ? 'flex' : 'none'};
            `}
        }
    `}
`;

export const FixedHeader = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
`;


export const HeaderBottom = styled.div`
    background: ${props => props.theme.colors.themeColor};
    position: relative;    
    transition: ${props => props.theme.transition};
    ${props => props.isSticky && css`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
        background: #fff;
        box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
        animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
        transition: ${props => props.theme.transition};
        @media ${device.large}{
            display: none;
        }
    `}
    @media ${device.small}{
        display: none;
    }
`;

export const HeaderWrap = styled.header`
    position: relative;
    @media ${device.large}{
        ${props => props.isSticky && css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
            z-index: 999;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
            background-color: #fff;
        `}
    }
`;
