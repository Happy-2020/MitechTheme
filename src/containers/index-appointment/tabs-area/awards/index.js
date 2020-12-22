import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import {Row, Col} from '../../../../components/ui/wrapper'
import AwardBox from '../../../../components/box-image/layout-eight'
import {AwardsSection} from './awards.style'

const Awards = ({boxStyles}) => {
    const awardsQueryData = useStaticQuery(graphql `
        query AwardsDataQuery {
            allAwardsJson {
                edges {
                  node {
                    id
                    title
                    desc
                    image {
                      childImageSharp {
                        fixed(width: 161, height: 110, quality: 100){
                            ...GatsbyImageSharpFixed_withWebp
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
    
    const awardsData = awardsQueryData.allAwardsJson.edges;

    return (
        <AwardsSection>
            <Row>
                {awardsData.map(award => (
                    <Col key={award.node.id} lg={6}>
                        <AwardBox
                            {...boxStyles}
                            imageSrc={award.node.image.childImageSharp}
                            title={award.node.title}
                            desc={award.node.desc}
                        />
                    </Col>
                ))}
            </Row>
        </AwardsSection>
    )
}

Awards.propTypes = {
    boxStyles: PropTypes.object
}

Awards.defaultProps = {
    boxStyles: {
        boxStyle: {
            mt: '50px'
        }
    }
}

export default Awards;