import {
  Benefits,
  CallToAction,
  Commercial,
  Hero,
  Motorization,
  Products,
  Repairs,
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
      <Repairs />
      <Commercial />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
