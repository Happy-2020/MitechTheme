import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { MdPhone, MdPlace, MdSearch } from "react-icons/md";
import { Container, Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Logo from '../../../../components/logo'
import Clickable from '../../../../components/ui/clickable'
import { MainMenu, MobileMenu } from '../../../../components/menu'
import Flyout, { FlyoutHeader, FlyoutBody } from '../../../../components/ui/flyout'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../../components/ui/off-canvas';
import SearchForm from '../../../../components/forms/search-form/layout-three'
import CloseButton from '../../../../components/ui/close-button'
import BurgerButton from '../../../../components/ui/burger-button'
import {
    HeaderWrap,
    HeaderTop,
    HeaderBottom,
    FixedHeader,
    FixedHeaderHeight,
    HeaderMain,
    HeaderCol,
    HeaderNavigation,
    HeaderElement,
    HeaderInfoItem
} from './header.style'


const Header = ({ props, ...styles }) => {
    const headerData = useStaticQuery(graphql`
        query HeaderThreeDataQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        submenu {
                            link
                            text
                        }
                        megamenu {
                            title
                            submenu {
                                link
                                text
                            }
                        }
                    }
                }
            }
        }
    `);
    const [flyoutOpen, setFlyoutOpen] = useState(false);
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);
    const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
    const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef(null);
    const fixedRef = useRef(null);
    const flyoutHandler = () => {
        setFlyoutOpen(prevState => !prevState);
    }
    const offCanvasHandler = () => {
        setOffcanvasOpen(prevState => !prevState);
    }

    useEffect(() => {
        setFixedHeaderHeight(fixedRef.current.clientHeight);
        setTotalHeaderHeight(headerRef.current.clientHeight)
    }, [fixedHeaderHeight]);

    useEffect(() => {
        const scrollHandler = () => {
            let scrollPos = window.scrollY;
            if (scrollPos > totalHeaderHeight) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [sticky, totalHeaderHeight]);

    const { noticeStyle, phoneElStyle, searchElStyle, logoStyle, burgerBtnElStyle, transparent } = styles;
    const menuArr = headerData.allMenuJson.edges;

    return (
        <Fragment>
            <HeaderWrap ref={headerRef} isSticky={sticky} transparent={transparent}>
                <HeaderTop>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <HeaderMain top>
                                    <HeaderCol left>
                                        <Text color={transparent ? '#fff' : 'textColor'} {...noticeStyle}><strong>Now Hiring:</strong> Are you a driven and motivated 1st Line IT Support Engineer?</Text>
                                    </HeaderCol>
                                    <HeaderCol right>
                                        <HeaderElement {...phoneElStyle}>
                                            <HeaderInfoItem>
                                                <Anchor path="tel:01228899900">
                                                    <MdPhone />
                                                    <Text as="strong">0122 8899900</Text>
                                                </Anchor>
                                            </HeaderInfoItem>
                                        </HeaderElement>
                                        <HeaderElement>
                                            <HeaderInfoItem>
                                                <Text>
                                                    <MdPlace />
                                                    <Text as="span">58 Howard Street #2 San Francisco</Text>
                                                </Text>
                                            </HeaderInfoItem>
                                        </HeaderElement>
                                    </HeaderCol>
                                </HeaderMain>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>
                <HeaderBottom>
                    <FixedHeader ref={fixedRef} isSticky={sticky}>
                        <Container>
                            <Row>
                                <Col lg={12}>
                                    <HeaderMain>
                                        <HeaderCol left>
                                            <Logo {...logoStyle} darkLogo={!transparent} whiteLogo={transparent && !sticky} />
                                        </HeaderCol>
                                        <HeaderCol right>
                                            <HeaderNavigation>
                                                <MainMenu
                                                    whiteColor={transparent && !sticky}
                                                    layout={3}
                                                    alignment="right"
                                                    menuData={menuArr}
                                                />
                                            </HeaderNavigation>
                                            <HeaderElement {...searchElStyle}>
                                                <Clickable className="search-btn" onClick={flyoutHandler}>
                                                    <MdSearch />
                                                </Clickable>
                                            </HeaderElement>
                                            <HeaderElement
                                                {...burgerBtnElStyle}
                                                visibility={{ default: 'false', lg: 'true' }}
                                            >
                                                <BurgerButton className="burger-btn" onClick={offCanvasHandler} />
                                            </HeaderElement>
                                        </HeaderCol>
                                    </HeaderMain>
                                </Col>
                            </Row>
                        </Container>
                    </FixedHeader>
                    <FixedHeaderHeight height={fixedHeaderHeight} />
                </HeaderBottom>
            </HeaderWrap>
            <Flyout isOpen={flyoutOpen}>
                <FlyoutHeader>
                    <Container fluid>
                        <Row>
                            <Col lg={12} textalign="right">
                                <CloseButton size="large" onClick={flyoutHandler} />
                            </Col>
                        </Row>
                    </Container>
                </FlyoutHeader>
                <FlyoutBody>
                    <SearchForm />
                </FlyoutBody>
            </Flyout>
            <OffCanvas scrollable={true} isOpen={offCanvasOpen} onClick={offCanvasHandler}>
                <OffCanvasHeader onClick={offCanvasHandler}>
                    <Logo darkLogo align={{ default: 'flex-start' }} />
                </OffCanvasHeader>
                <OffCanvasBody>
                    <MobileMenu menuData={menuArr} />
                </OffCanvasBody>
            </OffCanvas>
        </Fragment>
    )
}

Header.propTypes = {
    phoneElStyle: PropTypes.object
}

Header.defaultProps = {
    noticeStyle: {
        fontSize: '14px',
        lineHeight: 1.78
    },
    logoStyle: {
        pt: '14px',
        pb: '14px'
    },
    phoneElStyle: {
        mr: '20px'
    },
    searchElStyle: {
        pl: "50px"
    },
    burgerBtnElStyle: {
        pl: "25px"
    }
}

export default Header; 