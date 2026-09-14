import Image from "next/image";
import Hero from "./components/Hero";
import TechStackSection from "./components/TechStackSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <TechStackSection />
    </div>  
  );
}
