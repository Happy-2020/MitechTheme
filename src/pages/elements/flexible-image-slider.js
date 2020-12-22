import React from 'react'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import FullWideSlider from '../../containers/elements/flexible-image-slider/full-wide-slider'
import CarouselSlider from '../../containers/elements/flexible-image-slider/carousel-slider'
import CenteredSlider from '../../containers/elements/flexible-image-slider/centered-slider'
import FreeModeSlider from '../../containers/elements/flexible-image-slider/freemode-slider'
import SmoothTransitionSlider from '../../containers/elements/flexible-image-slider/smooth-transition-slider'
import CTA from '../../containers/global/cta-area/section-one'

const FlexibleSliderPage = ({ pageContext, location }) => {
    return (
        <Layout location={location}>
            <SEO title="Flexible Image Slider" />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Flexible Image Slider"
            />
            <main className="site-wrapper-reveal">
                <FullWideSlider />
                <CarouselSlider />
                <CenteredSlider />
                <FreeModeSlider />
                <SmoothTransitionSlider />
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export default FlexibleSliderPage
