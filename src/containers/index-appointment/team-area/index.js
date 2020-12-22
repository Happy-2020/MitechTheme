import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import parse from 'html-react-parser';
import { MdTrendingFlat } from "react-icons/md";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import TeamMember from '../../../components/team-member'
import { TeamWrapper, SectionTitle, ButtonWrap } from './team-area.style'

const TeamsSection = (props) => {
    const teamSecQueryData = useStaticQuery(graphql`
    query TeamSecQuery {
        indexAppointmentJson(id: {eq: "appointment-team-section"}) {
          id
          title
          desc
          join_link
          team_link
        }
        allTeamsJson(filter: {is_featured: {eq: true}}) {
            edges {
              node {
                id
                name
                designation
                images{
                    medium{
                        childImageSharp {
                            fluid(maxWidth: 310, maxHeight: 210, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
                socials {
                  facebook
                  instagram
                  twitter
                }
              }
            }
        }
    }      
    `);

    const teamSecData = teamSecQueryData.indexAppointmentJson;
    const teamMembers = teamSecQueryData.allTeamsJson.edges;

    const { headingStyle, textStyle, buttonOneStyle, buttonTwoStyle, teamMemberStyle } = props;

    return (
        <TeamWrapper>
            <Container>
                <Row>
                    <Col lg={4}>
                        <SectionTitle>
                            <Heading {...headingStyle}>{parse(teamSecData.title)}</Heading>
                            <Text {...textStyle}>{parse(teamSecData.desc)}</Text>

                            <ButtonWrap>
                                <Button {...buttonOneStyle} to={teamSecData.join_link}>Join us now</Button>
                                <Button {...buttonTwoStyle} to={teamSecData.team_link} icon={<MdTrendingFlat />}>View all team</Button>
                            </ButtonWrap>
                        </SectionTitle>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            {teamMembers.map(team => (
                                <Col md={6} key={team.node.id}>
                                    <TeamMember
                                        {...teamMemberStyle}
                                        imageSrc={team.node.images.medium.childImageSharp}
                                        name={team.node.name}
                                        designation={team.node.designation}
                                        social={team.node.socials}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </TeamWrapper>
    )
}

TeamsSection.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    buttonOneStyle: PropTypes.object,
    buttonTwoStyle: PropTypes.object,
    teamMemberStyle: PropTypes.object
}

TeamsSection.defaultProps = {
    headingStyle: {
        as: 'h3',
        child: {
            color: 'primary'
        }
    },
    textStyle: {
        mt: '30px'
    },
    buttonOneStyle: {
        mr: '15px',
        as: Link,
        hover: 2
    },
    buttonTwoStyle: {
        as: Link,
        varient: 'texted',
        fontWeight: 800,
        icondistance: '2px',
        hover: 2
    },
    teamMemberStyle: {
        mb: '60px',
        responsive: {
            small: {
                mb: '30px'
            }
        }
    }
}

export default TeamsSection;