import HeroHome from '@/components/hero-home/hero-home';
import OurSuperpowers from '@/components/our-superpowers/our-superpowers';
import TalentMap from '@/components/talent-map/talent-map';
import TechPartner from '@/components/tech-partner/tech-partner';
import ClientTestimonials from '@/components/client-testimonials/client-testimonials';
import CaseStudies from '@/components/case-studies/case-studies';
export default function Home() {
  return (
    <>
      <HeroHome />

      <OurSuperpowers />

      <TalentMap />

      <TechPartner />

      <ClientTestimonials />

      <CaseStudies />
    </>
  );
}
