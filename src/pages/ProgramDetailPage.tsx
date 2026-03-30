import { useParams } from 'react-router-dom'
import { programs } from '@/data/programs'
import { categoryThemes } from '@/config/categoryThemes'

export default function ProgramDetailPage = () => {
  const { slug } = useParams()
  const program = programs.find(p => p.slug === slug)
  const theme = categoryThemes[program?.categoryId]
  
  if (!program) return <NotFound />
  
  return (
    <>
      <DetailStickyBar program={program} theme={theme} />
      <DetailHero program={program} theme={theme} />
      <DetailQuickInfo program={program} theme={theme} />
      <DetailBenefitsDeep program={program} theme={theme} />
      <DetailRealData program={program} theme={theme} />
      <DetailJourney program={program} theme={theme} />
      <DetailTrainer program={program} theme={theme} />
      <DetailSchedule program={program} theme={theme} />
      <DetailGallery program={program} theme={theme} />
      <DetailComparePlans program={program} theme={theme} />
      <DetailSocialProof program={program} theme={theme} />
      <DetailFAQ program={program} theme={theme} />
      <DetailRelatedPrograms program={program} theme={theme} />
      <DetailWhatsAppFloat program={program} theme={theme} />
    </>
  )
}