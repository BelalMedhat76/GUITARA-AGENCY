import Image from "next/image";
import Hero from "./components/Hero";
import HexGrid from "./components/HexGrid";
import CounterSection from "./components/counterCard";

export default function Home() {
  return (
    <>
      <Hero />

      <HexGrid />
      <CounterSection />
    </>
  );
}
