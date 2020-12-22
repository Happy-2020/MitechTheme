import styled from "styled-components";
import { device } from '../../../theme'

export const ClientsWrap = styled.div`
    overflow: hidden;
`;

export const ClientsSecInner = styled.div`
    padding-top: 230px;
    padding-bottom: 230px;
    margin-bottom: 40px;
    margin-top: 40px;
    background: #F6FAFE;
    @media ${device.small}{
        padding-top: 150px;
        padding-bottom: 150px;
        margin-bottom: 0px;
        margin-top: 0px;
    }
`;

export const ClientContent = styled.div`
    text-align: center;
    position: relative;
    z-index: 4;
    .download_btn{
        @media ${device.xsmall}{
            padding: 0 15px;
            font-size: 14px;
        }
    }
`;

export const ClinetImages = styled.div`
    .redrow-img{
        width: 230px;
        @media ${device.small}{
            width: 100px;
        }
        a{
            display: block;
        }
    }
    .redrow-1{
        overflow: hidden;
        top: -205%;
        position: absolute;
        left: 10%;
        @media ${device.small}{
            top: -150%;
        }
        @media ${device.xsmall}{
            top: -70%;
        }
    }
    .redrow-2{
        position: absolute;
        left: 40%;
        top: -150%;
        @media ${device.small}{
            top: -80%;
        }
    }
    .redrow-3{
        top: -205%;
        position: absolute;
        right: 10%;
        @media ${device.medium}{
            right: 0%;
        }
        @media ${device.small}{
            top: -150%;
        }
        @media ${device.xsmall}{
            top: -70%;
        }
    }
    .redrow-4{
        top: 0%;
        position: absolute;
        left: -10%;
    }
    .redrow-5{
        position: absolute;
        left: 20%;
        top: 150%;
        @media ${device.small}{
            top: 110%;
        }
    }
    .redrow-6{
        position: absolute;
        right: 20%;
        top: 150%;
        @media ${device.small}{
            top: 110%;
        }
    }
    .redrow-7{
        top: 0%;
        position: absolute;
        right: -10%;
    }
`;