import HeroArea from '../containers/index-resolutions/hero-area'
import FeaturesArea from '../containers/index-resolutions/features-area'
import FunFactArea from '../containers/index-resolutions/funfact-area'
import ServicesArea from '../containers/index-resolutions/services-area'
import ContactArea from '../containers/global/contact-area/contact-three'
import TestimonialArea from '../containers/global/testimonial-area/section-one'
import WhatsnewArea from '../containers/index-resolutions/whats-new-area'
import CTAArea from '../containers/global/cta-area/section-one'
import ClientsArea from '../containers/global/clients-area'

const modules = {
  'HeroArea': HeroArea,
  'FeaturesArea': FeaturesArea,
  'FunFactArea': FunFactArea,
  'ServicesArea': ServicesArea,
  'ContactArea': ContactArea,
  'TestimonialArea': TestimonialArea,
  'WhatsnewArea': WhatsnewArea,
  'CTAArea': CTAArea,
  'ClientsArea': ClientsArea,
}

export function findModuleComponent(moduleId) {
  if (!modules.hasOwnProperty(moduleId)) {
    throw new Error(`Module ${moduleId} does not exist`)
  }

  return modules[moduleId]
}