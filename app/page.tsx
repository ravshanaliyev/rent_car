import CarModels from "@/components/shared/car-models";
import FilterCars from "@/components/shared/filter-cars";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";

import OfferCars from "@/components/shared/offer-cars";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FilterCars />
      <CarModels />
      <OfferCars />
      {/* /Mirmansur */}
      <Footer />
    </main>
  );
}
