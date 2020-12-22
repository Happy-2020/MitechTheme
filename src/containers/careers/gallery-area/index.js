import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MdTrendingFlat, MdSearch } from "react-icons/md";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from '../../../components/image'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import Heading from '../../../components/ui/heading'
import Button from '../../../components/ui/button'
import { SectionWrap, SectionTitle, GalleryWrap, GalleryGrid, GalleryItem, GalleryOverlay, GalleryOverlayIcon } from './style'

const JobsArea = ({ headingStyle, btnStyle }) => {
    const getJobsData = useStaticQuery(graphql`
        query GET_OFFICE_VIEW_DATA {
            careersJson(id: {eq: "our-office-views"}) {
                title
                link
                images {
                    childImageSharp {
                        fluid(maxWidth: 960, maxHeight: 960, quality: 100, srcSetBreakpoints: 6) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }     
    `);
    const { careersJson: { title, link, images } } = getJobsData
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0);
    const onClickHandler = (e, i) => {
        setIsOpen(true)
        setPhotoIndex(i)
    }
    return (
        <SectionWrap>
            <Container>
                <Row justify="center">
                    <Col lg={7}>
                        <SectionTitle>
                            <Heading {...headingStyle}>{title}</Heading>
                            <Button {...btnStyle} to={link} icon={<MdTrendingFlat />}>View all team</Button>
                        </SectionTitle>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <GalleryWrap>
                            {images.map((image, i) => (
                                <GalleryGrid key={`gallery-${i}`}>
                                    <GalleryItem>
                                        <Image fluid={image.childImageSharp.fluid} />
                                        <GalleryOverlay />
                                        <GalleryOverlayIcon onClick={(e) => onClickHandler(e, i)}>
                                            <MdSearch className="icon" />
                                        </GalleryOverlayIcon>
                                    </GalleryItem>
                                </GalleryGrid>
                            ))}
                            {isOpen && (
                                <Lightbox
                                    mainSrc={images[photoIndex].childImageSharp.fluid.src}
                                    nextSrc={images[(photoIndex + 1) % images.length]}
                                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={() =>
                                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                    }
                                    onMoveNextRequest={() =>
                                        setPhotoIndex((photoIndex + 1) % images.length)
                                    }
                                />
                            )}
                        </GalleryWrap>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

JobsArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        mb: '15px'
    },
    btnStyle: {
        varient: "texted",
        fontSize: '18px',
        hover: "false",
        border: {
            bottom: {
                width: '1px'
            }
        }
    }
}

export default JobsArea
