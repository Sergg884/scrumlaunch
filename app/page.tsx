import HeroHome from '@/components/hero-home';
import OurSuperpowers from '@/components/our-superpowers';
import TalentMap from '@/components/talent-map';
import TechPartner from '@/components/tech-partner';
import ClientTestimonials from '@/components/client-testimonials';
import CaseStudies from '@/components/case-studies';
import Blog from '@/components/blog';
import GetStarted from '@/components/get-started';
import OurClients from '@/components/our-clients';
import WeThrive from '@/components/we-thrive';
import Services from '@/components/serivices';
import Hiring from '@/components/hiring';
import Awards from '@/components/awards';

export default function Home() {
  return (
    <>
      <HeroHome />

      <OurSuperpowers />

      <TalentMap />

      <TechPartner />

      <ClientTestimonials />

      <CaseStudies />

      <OurClients />

      <WeThrive />

      <Services />

      <Hiring />

      <Awards />

      <Blog gridType="home" />

      <GetStarted />
    </>
  );
}
