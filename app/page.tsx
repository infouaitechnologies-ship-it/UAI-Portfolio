import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Stats } from "@/components/sections/stats";
import { Industries } from "@/components/sections/industries";
import { Comparison } from "@/components/sections/comparison";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Industries />
      <FeaturedProjects />
      <Comparison />
      <Process />
      <FAQ />
      <ContactCTA />
    </>
  );
}
