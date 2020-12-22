import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from '../../../components/ui/tabs/layout-one'
import OurMission from './our-mission'
import OurServices from './our-services'
import Partners from './partners'
import Awards from './awards'
import { TabWrapper } from './tabs-area.style'

const TabsSection = ({ sectionStyles, sectionTitleStyle }) => {

    const tabsSecQueryData = useStaticQuery(graphql`
        query TabsSecQuery {
            indexAppointmentJson(id: {eq: "appointment-about-us"}) {
                id
                title
                subtitle
                tab_header {
                    id
                    title
                }
            }
        }
    `);

    const secdata = tabsSecQueryData.indexAppointmentJson;
    const { tab_header } = secdata;

    return (
        <TabWrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            {...sectionTitleStyle}
                            subtitle={secdata.subtitle}
                            title={secdata.title}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <Tabs id="about-us-tab" defaultActiveKey="our-mission-tab">
                            <TabHeader>
                                {tab_header.map(tabitem => {
                                    return <NavItem key={tabitem.id} eventKey={tabitem.id}>{tabitem.title}</NavItem>
                                })}

                            </TabHeader>
                            <TabContent>
                                <TabPane eventKey={tab_header[0].id}>
                                    <OurMission />
                                </TabPane>
                                <TabPane eventKey={tab_header[1].id}>
                                    <OurServices />
                                </TabPane>
                                <TabPane eventKey={tab_header[2].id}>
                                    <Partners />
                                </TabPane>
                                <TabPane eventKey={tab_header[3].id}>
                                    <Awards />
                                </TabPane>
                            </TabContent>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </TabWrapper>
    )
}

TabsSection.propTypes = {
    sectionTitleStyle: PropTypes.object
}

TabsSection.defaultProps = {
    sectionTitleStyle: {
        mb: '60px',
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default TabsSection;