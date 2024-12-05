import Companies from "@/components/Companies";
import CreativeProcess from "@/components/CreativeProcess";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Hero />
       <Works />
       <Companies />
       <Services />
       <CreativeProcess />
    </div>
  );
}
