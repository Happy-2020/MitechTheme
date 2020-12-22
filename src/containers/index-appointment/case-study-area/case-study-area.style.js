import styled from 'styled-components'
import {device} from '../../../theme'
import BackgroundImage from 'gatsby-background-image'

export const CaseStudyWrapper = styled(BackgroundImage) `
    padding-top: 100px;
    padding-bottom: 100px;
    background-position: bottom left;
    background-size: auto;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;