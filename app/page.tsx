import { EstimateModal, EstimateProvider } from "@/components/estimate";
import {
  Benefits,
  CallToAction,
  Commercial,
  Footer,
  Header,
  Hero,
  Motorization,
  Products,
  Stats,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <EstimateProvider>
      <Header />
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
      <Footer />
      <EstimateModal />
    </EstimateProvider>
  );
}
