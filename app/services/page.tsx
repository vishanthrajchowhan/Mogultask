"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Lightbulb, GraduationCap, Mic, Check, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "1-on-1 Coaching",
    description: "Personalized coaching sessions tailored to your unique goals",
    href: "/services/coaching",
    color: "from-plum-500 to-plum-700",
    features: [
      "Bi-weekly 60-minute sessions",
      "Personalized action plans",
      "Email & text support",
      "Resource library access",
    ],
  },
  {
    icon: Lightbulb,
    title: "Mastermind Strategy",
    description: "Strategic planning to accelerate your business growth",
    href: "/services/strategy",
    color: "from-gold-500 to-gold-700",
    features: [
      "Business model optimization",
      "Marketing strategy development",
      "Revenue growth planning",
      "Implementation roadmap",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Courses",
    description: "Comprehensive programs to build essential skills",
    href: "/services/training",
    color: "from-plum-600 to-purple-800",
    features: [
      "Self-paced learning modules",
      "Live group coaching calls",
      "Downloadable resources",
      "Community support",
    ],
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Inspiring keynotes and workshops for your events",
    href: "/services/speaking",
    color: "from-amber-500 to-orange-600",
    features: [
      "Customizable topics",
      "Interactive workshops",
      "Virtual or in-person",
      "Post-event resources",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-50 via-white to-gold-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Services to <span className="gradient-text">Transform Your Life</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you&apos;re just starting out or ready to scale, I have a service designed 
              to help you achieve your goals and build the business of your dreams.
            </p>
            <Button asChild size="xl">
              <Link href="/book">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-plum-200 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl font-serif">{service.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full">
                        <Link href={service.href}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-plum-900 to-plum-950 text-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Book a free 30-minute consultation and we&apos;ll create a customized plan 
              to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/book">Book Free Consultation</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-plum-900">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
