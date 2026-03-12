"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-plum-50 via-white to-gold-50 section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Certified Professional Coach</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Passion, Purpose & Potential{" "}
              <span className="gradient-text">Into Power, Productivity and Profit!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl">
              <strong>Stand Up, Step Out and Shine</strong> with coaching, strategy and training for ambitious GoalGetters ready to break free and build powerful brands.
            </p>
            
            <p className="text-xl font-bold text-plum-700 mb-8">
              #DWTBG - Don&apos;t Wait To Be Great! Grow Your GREATNESS!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="xl">
                <Link href="/book">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/programs">
                  Explore Programs
                </Link>
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-plum-600">500+</div>
                <div className="text-sm text-gray-600">Clients Transformed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-plum-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-plum-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-plum-200 to-gold-200">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-white mb-2">MT</div>
                  <div className="text-white/80">MekaDivine</div>
                  <div className="text-sm text-white/60 mt-2">Professional Coach</div>
                </div>
              </div>
              {/* Add actual image here */}
              {/* <Image src="/images/hero.jpg" alt="MekaDivine" fill className="object-cover" /> */}
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Free Session Giveaway</div>
                  <div className="text-sm text-gray-600">Limited spots available</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
