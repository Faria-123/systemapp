import ExtraSections from "@/components/ExtraSections";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Features></Features>
      <ExtraSections></ExtraSections>
    </>
  );
}
