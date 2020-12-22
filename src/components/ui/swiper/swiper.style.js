import styled, { css } from 'styled-components';
import { device } from '../../../theme'

export const SwiperButtonWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), visibility 0.1s linear 2s, opacity 0.1s linear 2s;
    .swiper-btn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 0;
        width: 48px;
        height: 48px;
        color: black;
        background: white;
        line-height: 30px;
        z-index: 1;
        border-radius: 50%;
        transition: ${props => props.theme.transition};
        &-prev{
            left: 10px;
            @media ${device.small}{
                left: 0;
            }
        }
        &-next{
            right: 10px;
            @media ${device.small}{
                right: 0;
            }
        }
        .icon{
            color: #6d70a6;
            width: 20px;
            height: 20px;
            transition: ${props => props.theme.transition};
        }
        &:hover{
            background: ${props => props.theme.colors.themeColor};
            .icon{
                color: #fff;
            }
        }
    }
`;

export const SwiperWrap = styled.div`
    position: relative;
    ${props => props.align === 'center' && css`
        .swiper-slide{
            align-self: center;
            text-align: center;
            position: relative;
        }
    `}
    ${SwiperButtonWrap}{
        visibility: hidden;
        opacity: 0;
    }
    &:hover{
        ${SwiperButtonWrap}{
            visibility: visible;
            opacity: 1;
        }
    }
    .swiper-pagination{
        position: static;
        position: static;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .swiper-pagination-bullet{
            width: 12px;
            height: 12px;
            border: 0;
            border-radius: 0;
            background: transparent;
            opacity: 1;
            position: relative;
            outline: none;
            &:before{
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 100%;
                width: 8px;
                height: 8px;
                background: #d8d8d8;
                z-index: 1;
                transition: ${props => props.theme.transition};
            }
            &:hover{
                &:before{
                    width: 100%;
                    height: 100%;
                    background: ${props => props.theme.colors.themeColor};
                }
            }
            &.swiper-pagination-bullet-active{
                &:before{
                    width: 100%;
                    height: 100%;
                    background: ${props => props.theme.colors.themeColor};
                }
            }
        }
    }
    
    ${props => props.paginationStyle && css`
        ${SwiperButtonWrap}{
            height: calc(100% - ${props.paginationStyle.mt || '20px'})
        }
        .swiper-pagination{
            margin-top: ${props => props.paginationStyle.mt || '20px'};
            bottom: ${props => props.paginationStyle.bottom};
            .swiper-pagination-bullet{
                &:not(:last-child){
                    margin-right: ${props => props.paginationStyle.bulletGap || '15px'};
                }
            }
        }
    `}
    ${props => props.opacityStyle && css`
        .swiper-slide{
            &.swiper-slide{
                &-prev,
                &-next{
                    opacity: .5;
                }
            }
        }
    `}

    .swiper-container {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .swiper-container-free-mode{
        .swiper-slide{
            width: auto !important;
        }
        .swiper-wrapper{
            margin: 0 auto;
            transition-timing-function: linear !important;
        }
    }
`;
