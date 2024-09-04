import Image from "next/image";
import Hero1 from "./components/home/Hero";
import Feature15 from "./components/home/Features";
import Testimonial21 from "./components/home/Testimonial";
import Pricing16 from "./components/home/Pricing";
import Contact2 from "./components/home/Contact";
import Faqs1 from "./components/home/Faqs";
import Roadmap3 from "./components/home/Roadmap";

export default function Home() {
  return (
 <div>
  <Hero1/>
  <Feature15/>
  <Pricing16/>
  <Testimonial21/>
  <Roadmap3/>
  <Faqs1/>
  <Contact2/>
 </div>
  );
}
