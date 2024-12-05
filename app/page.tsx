import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <Hero />
       <Works />
       <Companies />
    </div>
  );
}
