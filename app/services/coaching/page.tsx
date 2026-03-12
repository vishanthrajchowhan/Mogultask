"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, Calendar, MessageSquare, ArrowRight } from "lucide-react"

const packages = [
  {
    name: "Discovery Session",
    duration: "Single 90-min session",
    price: "$500",
    features: [
      "Deep-dive goal assessment",
      "Personalized strategy outline",
      "Action plan framework",
      "Follow-up resources",
    ],
  },
  {
    name: "Monthly Coaching",
    duration: "4 sessions per month",
    price: "$2,000/mo",
    features: [
      "Weekly 60-minute sessions",
      "Unlimited email support",
      "Custom accountability system",
      "Resource library access",
      "Monthly progress reviews",
    ],
    popular: true,
  },
  {
    name: "Quarterly Intensive",
    duration: "3-month commitment",
    price: "$5,500",
    features: [
      "12 bi-weekly sessions",
      "Priority scheduling",
      "Text message support",
      "Quarterly intensive day",
      "Personalized workbook",
      "Community access",
    ],
  },
]

const benefits = [
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Every session is tailored to your unique situation, goals, and challenges.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for your busy schedule—evenings and weekends available.",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support",
    description: "Get email and text support between sessions to keep you moving forward.",
  },
]

export default function CoachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-plum-500 to-plum-700 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                1-on-1 <span className="gradient-text">Coaching</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get personalized coaching designed specifically for your goals. Whether you&apos;re 
                looking to escape the 9-5, scale your business, or overcome limiting beliefs, 
                I&apos;ll work with you one-on-one to create lasting transformation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl">
                  <Link href="/book">
                    Book Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/contact">Ask a Question</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
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
              What to Expect
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My coaching approach is strategic, supportive, and results-focused.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-2 hover:border-plum-200 transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-plum-500 to-plum-700 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Coaching <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your needs and timeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}
                
                <Card className={`h-full ${pkg.popular ? 'border-4 border-gold-400 shadow-xl' : 'border-2 hover:border-plum-200'} transition-all`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                    <div className="text-gray-600 mb-4">{pkg.duration}</div>
                    <div className="text-4xl font-bold gradient-text">{pkg.price}</div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                      <Link href="/book">Get Started</Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Book a free 30-minute consultation to discuss your goals and see if 
              we&apos;re a good fit to work together.
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
