import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import parse from 'html-react-parser'
import Img from 'gatsby-image'
import { MdArrowForward } from "react-icons/md";
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Text from '../../../components/ui/text'
import Button from '../../../components/ui/button'
import { ClientsWrap, ClientsSecInner, ClientContent, ClinetImages } from './clients-area.style'

const ClientsArea = ({ headingStyle }) => {
    const clientsData = useStaticQuery(graphql`
        query CybersecurityClientsQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-client-content"}) {
                title
                subtitle
                download_link
            }
            allClientsJson {
                edges {
                    node {
                        path
                        image {
                            childImageSharp {
                                fluid(maxWidth: 230, maxHeight: 230, quality: 100) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const { title, subtitle, download_link } = clientsData.indexCybersecurityJson
    const clients = clientsData.allClientsJson.edges

    return (
        <ClientsWrap>
            <ClientsSecInner>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ClientContent>
                                {title && <Heading {...headingStyle}>{parse(title)}</Heading>}
                                {subtitle && <Text>{subtitle}</Text>}
                                {download_link && <Button className="download_btn" icon={<MdArrowForward />} hover="2" to={download_link}>Download free proposal sample </Button>}
                            </ClientContent>
                            <ClinetImages>
                                {clients && clients.map((client, i) => (
                                    <div key={`client-${i}`} className={`redrow-img redrow-${i + 1} animate wow fadeInLeft`} data-wow-delay={`0.${i + 1}s`}>
                                        <Link to={client.node.path}>
                                            <Img fluid={client.node.image.childImageSharp.fluid} alt="Client" />
                                        </Link>
                                    </div>
                                ))}
                            </ClinetImages>
                        </Col>
                    </Row>
                </Container>
            </ClientsSecInner>
        </ClientsWrap>
    )
}

ClientsArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        fontWeight: 500,
        child: {
            color: 'primary'
        }
    }
}

export default ClientsArea
