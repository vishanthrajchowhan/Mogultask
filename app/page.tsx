import Hero from "@/components/home/Hero"
import Services from "@/components/home/Services"
import About from "@/components/home/About"
import SignatureProgram from "@/components/home/SignatureProgram"
import Testimonials from "@/components/home/Testimonials"
import LeadMagnet from "@/components/home/LeadMagnet"
import CTA from "@/components/home/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <SignatureProgram />
      <Testimonials />
      <LeadMagnet />
      <CTA />
    </>
  )
}
