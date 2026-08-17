import ExtraSections from "@/components/ExtraSections";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";



export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Suspense fallback={<Spinner />}>
        <Features></Features>
      </Suspense>
      <ExtraSections></ExtraSections>
    </>
  );
}
