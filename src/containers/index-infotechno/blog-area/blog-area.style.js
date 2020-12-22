import styled from 'styled-components'
import {device} from '../../../theme'

export const BlogWrapper = styled.section `
    padding-top: 100px;
    padding-bottom: 70px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 10px;
    }
`;

export const LeftBox = styled.div `
    margin-top: 30px;
    margin-bottom: 30px;
    @media ${device.medium}{
        margin-top: 0;
        margin-bottom: 40px;
    }
    @media ${device.small}{
        margin-bottom: 46px;
    }
`;

export const RecentBlogWrap = styled.div `
    margin-top: 30px;
`;

export const FeaturedBlogWrap = styled.div `
    @media ${device.small}{
        margin-bottom: 50px;
    }
`;