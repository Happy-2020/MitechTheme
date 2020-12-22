import React, { Fragment, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { FaEllipsisH } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"
import Logo from '../../../../components/logo'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import BurgerButton from '../../../../components/ui/burger-button'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../../components/ui/off-canvas';
import Clickable from '../../../../components/ui/clickable'
import { MainMenu, MobileMenu } from '../../../../components/menu'
import Language from '../../../../components/language'
import HeaderForm from '../../../../components/forms/search-form/layout-one'
import {
    HeaderWrap,
    HeaderTop,
    HeaderBottom,
    FixedHeader,
    HeaderMain,
    HeaderLeft,
    HeaderMiddle,
    HeaderRight,
    HeaderRightInner,
    HeaderNavigation,
    HeaderElement,
    FixedHeaderHeight
} from './header.style'

const Header = (props) => {
    const menuData = useStaticQuery(graphql`
        query MenuOneQuery {
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
    `)
    const menuArr = menuData.allMenuJson.edges;
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);
    const [headerInnerOpen, setHeaderInnerOpen] = useState(false);
    const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
    const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
    const [sticky, setSticky] = useState(false);
    const headerRef = useRef(null);
    const fixedRef = useRef(null);
    const offCanvasHandler = () => {
        setOffcanvasOpen(prevState => !prevState);
    }

    const headerInnerHandler = () => {
        setHeaderInnerOpen(prevState => !prevState);
    }

    useEffect(() => {
        setFixedHeaderHeight(fixedRef.current.clientHeight);
        setTotalHeaderHeight(headerRef.current.clientHeight);
    }, []);

    useEffect(() => {
        const scrollHandler = () => {
            let scrollPos = window.scrollY;
            if (scrollPos > totalHeaderHeight) {
                setSticky(true)
            }

            if (scrollPos < fixedHeaderHeight) {
                setSticky(false)
            }
        }

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    }, [sticky, fixedHeaderHeight, totalHeaderHeight]);

    const { headerTop, headerBottom } = props;
    const { textStyle, linkStyle } = headerTop;
    const { logoStyle, langElStyle, burgerBtnElStyle, clickAbleElStyle, clickAble, headerFormElStyle } = headerBottom;

    return (
        <Fragment>
            <HeaderWrap ref={headerRef}>
                <HeaderTop borderBottom>
                    <Container fluid>
                        <Row>
                            <Col lg={12}>
                                <Text {...textStyle}><Anchor path="/" {...linkStyle}>Now Hiring:</Anchor> Are you a driven and motivated 1st Line IT Support Engineer?</Text>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>
                <HeaderBottom>
                    <FixedHeader ref={fixedRef} isSticky={sticky}>
                        <Container fluid>
                            <Row>
                                <Col lg={12}>
                                    <HeaderMain>
                                        <HeaderLeft>
                                            <Logo darkLogo {...logoStyle} />
                                        </HeaderLeft>
                                        <HeaderMiddle>
                                            <HeaderNavigation>
                                                <MainMenu menuData={menuArr} />
                                            </HeaderNavigation>
                                        </HeaderMiddle>
                                        <HeaderRight>
                                            <HeaderRightInner isOpen={headerInnerOpen}>
                                                <HeaderElement {...langElStyle}>
                                                    <Language />
                                                </HeaderElement>
                                                <HeaderElement {...headerFormElStyle}>
                                                    <HeaderForm />
                                                </HeaderElement>
                                            </HeaderRightInner>
                                            <HeaderElement
                                                {...burgerBtnElStyle}
                                                visibility={{ default: 'false', lg: 'true' }}
                                            >
                                                <BurgerButton onClick={offCanvasHandler} />
                                            </HeaderElement>
                                            <HeaderElement
                                                {...clickAbleElStyle}
                                                visibility={{ default: 'false', sm: 'true' }}
                                            >
                                                <Clickable onClick={headerInnerHandler} {...clickAble}>
                                                    <FaEllipsisH />
                                                </Clickable>
                                            </HeaderElement>
                                        </HeaderRight>
                                    </HeaderMain>
                                </Col>
                            </Row>
                        </Container>
                    </FixedHeader>
                    <FixedHeaderHeight height={fixedHeaderHeight} />
                </HeaderBottom>
            </HeaderWrap>
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
    headerTop: PropTypes.object
}

Header.defaultProps = {
    headerTop: {
        textStyle: {
            fontSize: '14px',
            align: 'center',
            lineHeight: 1.78,
            pt: '10px',
            pb: '10px'
        },
        linkStyle: {
            fontWeight: 500
        }
    },
    headerBottom: {
        logoStyle: {
            align: {
                default: 'center',
                lg: 'flex-start'
            }
        },
        langElStyle: {
            pr: '25px',
            responsive: {
                xlarge: {
                    pr: "10px"
                }
            }
        },
        headerFormElStyle: {
            bl: '1px solid #eee',
            responsive: {
                xsmall: {
                    mt: '15px'
                }
            }
        },
        burgerBtnElStyle: {
            pl: "20px"
        },
        clickAbleElStyle: {
            pl: "15px"
        },
        clickAble: {
            fontsize: "20px",
            color: "#6D70A6"
        }
    }
}

export default Header
