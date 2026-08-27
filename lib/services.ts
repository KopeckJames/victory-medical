import type { ServiceContent } from '@/components/ServicePageTemplate'

import allergyServices from '@/content/services/allergy-services'
import chiropractic from '@/content/services/chiropractic'
import coolsculpting from '@/content/services/coolsculpting'
import familyPractice from '@/content/services/family-practice'
import generalMedicalCare from '@/content/services/general-medical-care'
import ketamine from '@/content/services/ketamine'
import mammogramScreeningAustin from '@/content/services/mammogram-screening-austin'
import naturalHormoneReplacement from '@/content/services/natural-hormone-replacement'
import pharmacy from '@/content/services/pharmacy'
import physicalMedicine from '@/content/services/physical-medicine'
import physicalTherapy from '@/content/services/physical-therapy'
import preventativeCare from '@/content/services/preventative-care'
import urgentCare from '@/content/services/urgent-care'
import victoryheartwise from '@/content/services/victoryheartwise'
import weightLoss from '@/content/services/weight-loss'

/*
 * Service pages rebuilt in the current design system.
 *
 * They stay at the URLs they held on the old WordPress site — app/[slug]
 * renders this template instead of the cloned legacy blocks whenever a slug
 * appears here, so the rebuild costs nothing in accumulated ranking.
 */
const serviceContent: Record<string, ServiceContent> = {
  'allergy-services': allergyServices,
  chiropractic,
  coolsculpting,
  'family-practice': familyPractice,
  'general-medical-care': generalMedicalCare,
  ketamine,
  'mammogram-screening-austin': mammogramScreeningAustin,
  'natural-hormone-replacement': naturalHormoneReplacement,
  pharmacy,
  'physical-medicine': physicalMedicine,
  'physical-therapy': physicalTherapy,
  'preventative-care': preventativeCare,
  'urgent-care': urgentCare,
  victoryheartwise,
  'weight-loss': weightLoss,
}

export function getServiceContent(slug: string): ServiceContent | null {
  return serviceContent[slug] ?? null
}
