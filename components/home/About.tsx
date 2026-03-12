"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, TrendingUp, Heart } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "Certified",
    label: "Professional Coach",
  },
  {
    icon: Users,
    value: "500+",
    label: "Lives Transformed",
  },
  {
    icon: TrendingUp,
    value: "$50M+",
    label: "Client Revenue Generated",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Passion-Driven",
  },
]

export default function About() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-plum-300 to-gold-300">
              {/* Placeholder for founder image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-serif font-bold text-white mb-4">MD</div>
                  <div className="text-2xl text-white/90">MekaDivine</div>
                  <div className="text-white/70 mt-2">Founder & CEO</div>
                </div>
              </div>
              {/* Replace with actual image */}
              {/* <Image src="/images/founder.jpg" alt="MekaDivine" fill className="object-cover" /> */}
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-400 rounded-full blur-3xl opacity-30 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Meet Your Coach</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Hi, I&apos;m <span className="gradient-text">MekaDivine</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg mb-8">
              <p>
                I&apos;m a Certified Professional Coach, Motivator, and Strategist on a mission to help 
                ambitious professionals break free from the 9-5 grind and build businesses they love.
              </p>
              <p>
                For over a decade, I&apos;ve helped hundreds of individuals transform their lives by 
                turning their passion and purpose into profitable businesses. I believe everyone 
                deserves to wake up excited about their work and make an impact while earning the 
                income they deserve.
              </p>
              <p>
                My approach combines strategic business planning, mindset transformation, and 
                practical action steps that deliver real results. I don&apos;t just teach theory—I 
                give you the exact blueprint I&apos;ve used to help my clients generate over $50M 
                in revenue.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-4 shadow-sm border border-plum-100"
                  >
                    <Icon className="w-8 h-8 text-plum-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            <Button asChild size="lg">
              <Link href="/about">
                Learn More About My Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
