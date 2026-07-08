import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Stats } from "@/components/sections/stats";
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
      <FeaturedProjects />
      <Process />
      <FAQ />
      <ContactCTA />
    </>
  );
}
