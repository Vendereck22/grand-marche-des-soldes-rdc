import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { ConceptSection } from "@/components/landing/concept-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { AudienceSection } from "@/components/landing/audience-section";
import { ActivitiesSection } from "@/components/landing/activities-section";
import { SectorsSection } from "@/components/landing/sectors-section";
import { MasterclassSection } from "@/components/landing/masterclass-section";
import { ExhibitorsSection } from "@/components/landing/exhibitors-section";
import { CommunitySection } from "@/components/landing/community-section";
import { PartnersSection } from "@/components/landing/partners-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ConceptSection />
        <BenefitsSection />
        <AudienceSection />
        <ActivitiesSection />
        <SectorsSection />
        <MasterclassSection />
        <ExhibitorsSection />
        <CommunitySection />
        <PartnersSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
