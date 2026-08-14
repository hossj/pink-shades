import {
  Benefits,
  CallToAction,
  Commercial,
  Hero,
  Motorization,
  Products,
  Stats,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Products />
      <Motorization />
      <Benefits />
      <Commercial />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
