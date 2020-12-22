import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import {device} from '../../../theme'

export const SectionWrap = styled(BackgroundImage)`
    padding-top: 150px;
    padding-bottom: 150px;
    @media ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px;
    }
`;