import FilterCars from "@/components/shared/filter-cars";
import Hero from "@/components/shared/hero";
import Navbar from "@/components/shared/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FilterCars />
    </main>
  );
}
