"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Star } from "lucide-react"

const features = [
  "Complete business strategy roadmap",
  "Personal brand development",
  "6 months of 1-on-1 coaching",
  "Marketing & sales framework",
  "Mindset transformation program",
  "Exclusive mastermind access",
  "Resources library & templates",
  "Ongoing email & chat support",
]

export default function SignatureProgram() {
  return (
    <section className="section-padding bg-gradient-to-br from-plum-900 via-plum-800 to-plum-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-plum-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Signature Program</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              The Great Escape Package
            </h2>
            
            <p className="text-lg text-plum-100 mb-8">
              Your complete transformation package to escape the 9-5, build a thriving business, 
              and create the freedom lifestyle you deserve. This is more than coaching—it&apos;s a 
              complete business-in-a-box system.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-plum-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" variant="secondary">
                <Link href="/programs/great-escape">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-plum-900">
                <Link href="/book">
                  Book Discovery Call
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium">Limited Spots Available</span>
              </div>
              <div className="text-5xl font-bold font-serif mb-2">
                <span className="text-gray-400 text-2xl line-through mr-2">$12,000</span>
              </div>
              <div className="text-6xl font-bold font-serif gradient-text mb-2">
                $8,997
              </div>
              <p className="text-gray-600">One-time investment or 6-month payment plan</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Program Duration</span>
                <span className="font-semibold">6 Months</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Coaching Sessions</span>
                <span className="font-semibold">24 Sessions</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-gray-600">Investment Return</span>
                <span className="font-semibold text-green-600">10x Guaranteed</span>
              </div>
            </div>

            <div className="bg-plum-50 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <div>
                  <div className="font-semibold text-plum-900 mb-1">Money-Back Guarantee</div>
                  <p className="text-sm text-plum-700">
                    If you don&apos;t see ROI within 12 months, get your investment back. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="w-full" size="xl">
              <Link href="/programs/great-escape">
                Claim Your Spot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Only 5 spots available per quarter
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
