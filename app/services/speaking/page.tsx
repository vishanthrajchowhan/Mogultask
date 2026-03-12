"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Mic, Building, Users2, Sparkles, ArrowRight } from "lucide-react"

const speakingOptions = [
  {
    name: "Keynote Speech",
    duration: "45-60 minutes",
    price: "Starting at $5,000",
    description: "Inspiring keynote that motivates and empowers your audience",
    features: [
      "Customized to your event theme",
      "Interactive and engaging",
      "Actionable takeaways",
      "Post-event resources",
      "Meet & greet (optional)",
    ],
  },
  {
    name: "Workshop/Training",
    duration: "2-4 hours",
    price: "Starting at $7,500",
    description: "Interactive workshop with hands-on exercises and implementation",
    features: [
      "Hands-on activities",
      "Workbooks for attendees",
      "Small group exercises",
      "Q&A session",
      "Follow-up materials",
      "Virtual or in-person",
    ],
    popular: true,
  },
  {
    name: "Multi-Day Event",
    duration: "Half or full day",
    price: "Custom pricing",
    description: "Deep-dive training or intensive for maximum transformation",
    features: [
      "Multiple sessions",
      "Complete transformation program",
      "Comprehensive materials",
      "Hot seat coaching",
      "Implementation planning",
      "Post-event support",
    ],
  },
]

const topics = [
  {
    icon: Sparkles,
    title: "From 9-5 to Freedom",
    description: "How to escape corporate and build a business you love",
  },
  {
    icon: Users2,
    title: "Building Your Brand",
    description: "Personal branding strategies for entrepreneurs and leaders",
  },
  {
    icon: Building,
    title: "Entrepreneurial Mindset",
    description: "Overcoming fear and developing the mindset of success",
  },
]

const eventTypes = [
  "Corporate events & conferences",
  "Women's empowerment events",
  "Entrepreneurship summits",
  "Leadership retreats",
  "Industry conferences",
  "University & college events",
  "Nonprofit organizations",
  "Virtual events & webinars",
]

export default function SpeakingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6">
                <Mic className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Public <span className="gradient-text">Speaking</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Book an inspiring, transformational speaker for your next event. I deliver 
                powerful keynotes and interactive workshops that motivate audiences and 
                drive real change.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl">
                  <Link href="/contact">
                    Request Speaking Info
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/testimonials">See Testimonials</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
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
              Popular Speaking Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All presentations are customized to fit your audience and event goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, index) => {
              const Icon = topic.icon
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center border-2 hover:border-orange-200 transition-all">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{topic.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Speaking Options */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Speaking <span className="gradient-text">Options</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the format that best fits your event needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    Most Requested
                  </div>
                )}
                
                <Card className={`h-full ${option.popular ? 'border-4 border-orange-400 shadow-xl' : 'border-2 hover:border-orange-200'} transition-all`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif mb-2">{option.name}</CardTitle>
                    <div className="text-gray-600 mb-1">{option.duration}</div>
                    <div className="text-3xl font-bold gradient-text mb-3">{option.price}</div>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={option.popular ? "default" : "outline"}>
                      <Link href="/contact">Request Info</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Perfect For These Events
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
              >
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{type}</span>
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
              Book MekaDivine for Your Next Event
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Let&apos;s discuss your event needs and create a customized speaking experience 
              that inspires and transforms your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/contact">
                  Request Speaker Info
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-plum-900">
                <Link href="/testimonials">View Past Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
