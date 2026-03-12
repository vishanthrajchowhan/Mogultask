"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Star, Gift, Clock, Users, BookOpen, ArrowRight, Sparkles } from "lucide-react"

const included = [
  "24 bi-weekly coaching sessions (6 months)",
  "Complete business strategy roadmap",
  "Personal brand development framework",
  "Marketing & sales system blueprint",
  "Mindset transformation program",
  "Exclusive mastermind community access",
  "Complete resources library & templates",
  "Unlimited email & chat support",
  "Quarterly business reviews",
  "Bonus: Private Slack channel access",
  "Bonus: Guest expert trainings",
  "Bonus: Annual summit ticket ($2,000 value)",
]

const modules = [
  {
    title: "Foundation & Clarity",
    description: "Get crystal clear on your vision, mission, and business model",
  },
  {
    title: "Brand Positioning",
    description: "Develop a powerful brand that attracts your ideal clients",
  },
  {
    title: "Marketing Mastery",
    description: "Build marketing systems that generate consistent leads",
  },
  {
    title: "Sales Systems",
    description: "Create conversion funnels that turn leads into paying clients",
  },
  {
    title: "Mindset & Habits",
    description: "Develop the daily practices of highly successful entrepreneurs",
  },
  {
    title: "Scale & Systematize",
    description: "Build systems and processes for sustainable growth",
  },
]

const bonuses = [
  {
    icon: Users,
    title: "VIP Mastermind Access",
    value: "$3,000 value",
    description: "Monthly group calls with other high-achieving entrepreneurs",
  },
  {
    icon: BookOpen,
    title: "Complete Resource Library",
    value: "$2,500 value",
    description: "Templates, scripts, and frameworks for every aspect of your business",
  },
  {
    icon: Sparkles,
    title: "Annual Summit Ticket",
    value: "$2,000 value",
    description: "VIP ticket to our annual entrepreneur summit",
  },
]

export default function GreatEscapePackagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-900 via-plum-800 to-plum-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-plum-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 rounded-full px-6 py-3 mb-6">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">Signature Program</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                The Great Escape Package
              </h1>
              
              <p className="text-xl text-plum-100 mb-12 max-w-3xl mx-auto">
                Your complete 6-month transformation from corporate employee to thriving 
                entrepreneur. This is more than coaching—it&apos;s a complete business-in-a-box 
                system designed to give you freedom, fulfillment, and financial success.
              </p>

              {/* Pricing */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-plum-200 text-sm mb-2">Investment</div>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-2xl text-plum-300 line-through">$12,000</span>
                    <span className="text-6xl font-bold">$8,997</span>
                  </div>
                  <p className="text-plum-200">One-time investment or flexible payment plan available</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">6</div>
                    <div className="text-sm text-plum-200">Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">24</div>
                    <div className="text-sm text-plum-200">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">10x</div>
                    <div className="text-sm text-plum-200">ROI Target</div>
                  </div>
                </div>

                <Button asChild size="xl" variant="secondary" className="w-full">
                  <Link href="/book">
                    Claim Your Spot Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <p className="text-center text-sm text-plum-300 mt-4">
                  Only 5 spots available per quarter
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Everything You Get
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete system to build, launch, and scale your dream business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {included.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-start gap-4 bg-gradient-to-r from-plum-50 to-white rounded-lg p-4"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              6-Month Program Journey
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-plum-200 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plum-600 to-plum-800 text-white flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600">{module.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gold-100 text-gold-700 rounded-full px-4 py-2 mb-4">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Bonuses</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              <span className="gradient-text">$7,500</span> in Exclusive Bonuses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon
              return (
                <motion.div
                  key={bonus.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gold-200 bg-gradient-to-br from-gold-50 to-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-gold-600 font-bold mb-2">{bonus.value}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-600">{bonus.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding bg-gradient-to-br from-plum-900 to-plum-950 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-6">
              <Star className="w-12 h-12 text-white fill-current" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              My 10x ROI Guarantee
            </h2>
            
            <p className="text-lg text-plum-100 mb-8">
              I&apos;m so confident in this program that I offer an unprecedented guarantee: 
              If you implement everything I teach and don&apos;t see at least a 10x return on 
              your investment within 12 months, I&apos;ll refund your entire investment. 
              No questions asked.
            </p>

            <p className="text-xl font-semibold text-gold-300 mb-8">
              That means if you invest $8,997, you should make at least $89,970 in the next year.
            </p>

            <Button asChild size="xl" variant="secondary" className="mb-4">
              <Link href="/book">
                <Clock className="mr-2 w-5 h-5" />
                Claim Your Spot Today
              </Link>
            </Button>

            <p className="text-plum-200 text-sm">
              Limited to 5 clients per quarter • Spots fill fast
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
