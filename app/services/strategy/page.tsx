"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Lightbulb, Target, TrendingUp, ArrowRight } from "lucide-react"

const offerings = [
  {
    name: "Business Audit Session",
    duration: "2 hours",
    price: "$750",
    description: "Deep-dive analysis of your current business with actionable recommendations",
    features: [
      "Complete business assessment",
      "SWOT analysis",
      "Growth opportunity identification",
      "Strategic roadmap",
      "30-day action plan",
    ],
  },
  {
    name: "Brand Strategy Intensive",
    duration: "Half day (4 hours)",
    price: "$2,500",
    description: "Comprehensive brand positioning and marketing strategy development",
    features: [
      "Brand positioning workshop",
      "Target audience deep-dive",
      "Competitive analysis",
      "Messaging framework",
      "Marketing strategy blueprint",
      "90-day implementation plan",
    ],
    popular: true,
  },
  {
    name: "Scale Strategy Package",
    duration: "Full day + follow-up",
    price: "$5,000",
    description: "Complete scaling strategy for established businesses ready to grow",
    features: [
      "Full-day intensive session",
      "Revenue growth strategy",
      "Systems & automation plan",
      "Team building roadmap",
      "Financial projections",
      "6-month milestone plan",
      "2 follow-up sessions",
    ],
  },
]

const whatYouGet = [
  {
    icon: Target,
    title: "Crystal Clear Direction",
    description: "Walk away with absolute clarity on where you're going and how to get there.",
  },
  {
    icon: TrendingUp,
    title: "Growth Roadmap",
    description: "A detailed, step-by-step plan to achieve your next level of success.",
  },
  {
    icon: Lightbulb,
    title: "Fresh Perspective",
    description: "Gain new insights and strategies you haven't considered before.",
  },
]

export default function StrategyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gold-50 via-white to-plum-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Mastermind <span className="gradient-text">Strategy</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get strategic clarity and a concrete action plan to accelerate your business growth. 
                These intensive strategy sessions are designed to help you break through plateaus 
                and create exponential results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl">
                  <Link href="/book">
                    Book Strategy Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Get */}
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
              What You&apos;ll Walk Away With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t just talking sessions—you&apos;ll leave with concrete deliverables.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatYouGet.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-2 hover:border-gold-200 transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategy Offerings */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gold-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Strategy Session <span className="gradient-text">Options</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the intensive that matches your current business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {offering.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}
                
                <Card className={`h-full ${offering.popular ? 'border-4 border-gold-400 shadow-xl' : 'border-2 hover:border-gold-200'} transition-all`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif mb-2">{offering.name}</CardTitle>
                    <div className="text-gray-600 mb-1">{offering.duration}</div>
                    <div className="text-4xl font-bold gradient-text mb-3">{offering.price}</div>
                    <p className="text-sm text-gray-600">{offering.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {offering.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={offering.popular ? "default" : "outline"}>
                      <Link href="/book">Book Session</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-plum-900 to-plum-950 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Create Your Growth Strategy?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Let&apos;s map out your path to the next level. Book a free consultation 
              to discuss which strategy session is right for you.
            </p>
            <Button asChild size="xl" variant="secondary">
              <Link href="/book">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
