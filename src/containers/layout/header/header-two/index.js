import React, { Fragment, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap'
import { useStaticQuery, graphql } from "gatsby"
import { MdPlace, MdAvTimer, MdComment, MdPhone, MdMoreHoriz } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import Logo from '../../../../components/logo'
import SwiperSlider from '../../../../components/ui/swiper'
import Heading from '../../../../components/ui/heading'
import Text from '../../../../components/ui/text'
import Social, { SocialLink } from '../../../../components/ui/social'
import { MainMenu, MobileMenu } from '../../../../components/menu'
import HeaderForm from '../../../../components/forms/search-form/layout-two'
import BurgerButton from '../../../../components/ui/burger-button'
import Clickable from '../../../../components/ui/clickable'
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from '../../../../components/ui/off-canvas';
import {
    HeaderWrap,
    HeaderTop,
    HeaderMain,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderTopRightInner,
    InfoItem,
    InfoIcon,
    InfoContent,
    HeaderBottom,
    HeaderBottomLeft,
    HeaderNavigation,
    HeaderBottomRight,
    HeaderElement
} from './header.style'

const Header = (props) => {
    const headerData = useStaticQuery(graphql`
        query GET_HEADER_TWO_DATA {
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
            site {
                siteMetadata {
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                }
            }
        }
    `)
    const [offCanvasOpen, setOffcanvasOpen] = useState(false);
    const [headerInnerOpen, setHeaderInnerOpen] = useState(false);
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
        setTotalHeaderHeight(headerRef.current.clientHeight)
    }, [totalHeaderHeight]);

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

    const menuArr = headerData.allMenuJson.edges;
    const { facebook, twitter, instagram, linkedin } = headerData.site.siteMetadata.social;
    const { slider, headerTopStyles, menuStyle } = props;
    const { infoHeading, infoText, burgerBtnElStyle, clickAbleElStyle, clickAble, innerElementStyle } = headerTopStyles;

    return (
        <Fragment>
            <HeaderWrap ref={headerRef} isSticky={sticky}>
                <HeaderTop>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <HeaderMain>
                                    <HeaderTopLeft>
                                        <Logo darkLogo />
                                    </HeaderTopLeft>
                                    <HeaderTopRight>
                                        <HeaderTopRightInner isOpen={headerInnerOpen}>
                                            <HeaderElement {...innerElementStyle} visibility={{ default: 'false', xs: 'true' }}>
                                                <HeaderForm inputId="header-search" />
                                            </HeaderElement>
                                            <HeaderElement {...innerElementStyle}>
                                                <SwiperSlider settings={slider} className="header-top-info-slider-wrap">
                                                    <div className="item">
                                                        <InfoItem>
                                                            <InfoIcon>
                                                                <MdPlace className="icon" />
                                                            </InfoIcon>
                                                            <InfoContent>
                                                                <Heading {...infoHeading}>219 Amara Fort Apt. 394</Heading>
                                                                <Text {...infoText}>New York, NY 941</Text>
                                                            </InfoContent>
                                                        </InfoItem>
                                                    </div>
                                                    <div className="item">
                                                        <InfoItem>
                                                            <InfoIcon>
                                                                <MdAvTimer className="icon" />
                                                            </InfoIcon>
                                                            <InfoContent>
                                                                <Heading {...infoHeading}>8:00AM - 6:00PM</Heading>
                                                                <Text {...infoText}>Monday to Saturday</Text>
                                                            </InfoContent>
                                                        </InfoItem>
                                                    </div>
                                                    <div className="item">
                                                        <InfoItem>
                                                            <InfoIcon>
                                                                <MdComment className="icon" />
                                                            </InfoIcon>
                                                            <InfoContent>
                                                                <Heading {...infoHeading}>Online 24/7</Heading>
                                                                <Text {...infoText}>+122 123 4567</Text>
                                                            </InfoContent>
                                                        </InfoItem>
                                                    </div>
                                                    <div className="item">
                                                        <InfoItem>
                                                            <InfoIcon>
                                                                <MdPhone className="icon" />
                                                            </InfoIcon>
                                                            <InfoContent>
                                                                <Heading {...infoHeading}>0122 8899900</Heading>
                                                                <Text {...infoText}>Info@example.com</Text>
                                                            </InfoContent>
                                                        </InfoItem>
                                                    </div>
                                                </SwiperSlider>
                                            </HeaderElement>
                                            <HeaderElement {...innerElementStyle}>
                                                <Social
                                                    tooltip={true}
                                                    tooltip_position="bottom-left"
                                                    tooltip_bg="dark"
                                                    space="10px"
                                                >
                                                    {twitter && (
                                                        <SocialLink path={twitter} title="Twitter">
                                                            <TiSocialTwitter />
                                                        </SocialLink>
                                                    )}
                                                    {facebook && (
                                                        <SocialLink path={facebook} title="Facebook">
                                                            <TiSocialFacebook />
                                                        </SocialLink>
                                                    )}
                                                    {instagram && (
                                                        <SocialLink path={instagram} title="Instagram">
                                                            <TiSocialInstagram />
                                                        </SocialLink>
                                                    )}
                                                    {linkedin && (
                                                        <SocialLink path={linkedin} title="Linkedin">
                                                            <TiSocialLinkedin />
                                                        </SocialLink>
                                                    )}
                                                </Social>
                                            </HeaderElement>
                                        </HeaderTopRightInner>
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
                                                <MdMoreHoriz />
                                            </Clickable>
                                        </HeaderElement>
                                    </HeaderTopRight>
                                </HeaderMain>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTop>
                <HeaderBottom ref={fixedRef} isSticky={sticky}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <HeaderMain>
                                    <HeaderBottomLeft>
                                        <HeaderNavigation>
                                            <MainMenu
                                                menuData={menuArr}
                                                blackColor={sticky}
                                                {...menuStyle}
                                            />
                                        </HeaderNavigation>
                                    </HeaderBottomLeft>
                                    <HeaderBottomRight>
                                        <HeaderForm layout={sticky && 'white'} inputId="header-search-2" />
                                    </HeaderBottomRight>
                                </HeaderMain>
                            </Col>
                        </Row>
                    </Container>
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
    slider: PropTypes.object
}

Header.defaultProps = {
    slider: {
        slidesPerView: 3,
        loop: true,
        pagination: false,
        spaceBetween: 0,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        }
    },
    headerTopStyles: {
        infoHeading: {
            fontSize: '14px',
            fontweight: 700,
            lineHeight: 1.18,
            mb: '6px'
        },
        infoText: {
            fontSize: '14px',
        },
        burgerBtnElStyle: {
            pl: '40px'
        },
        clickAbleElStyle: {
            pl: "15px"
        },
        clickAble: {
            fontsize: "30px",
            color: "#6D70A6"
        },
        innerElementStyle: {
            responsive: {
                small: {
                    width: '100%'
                }
            }
        }
    },
    menuStyle: {
        alignment: "left",
        color: "#ffffffb3",
        hoverColor: "#fff",
        barColor: "#fff",
        vSpace: 42,
        submenu: {
            hoverColor: 'primary'
        }
    }
}


export default Header;