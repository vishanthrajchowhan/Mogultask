"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, GraduationCap, BookOpen, Video, Users, ArrowRight } from "lucide-react"

const courses = [
  {
    name: "Freedom Business Foundations",
    format: "8-week online course",
    price: "$497",
    description: "Learn the fundamentals of building a profitable online business",
    features: [
      "8 comprehensive modules",
      "Video lessons + workbooks",
      "Live Q&A calls (weekly)",
      "Private community access",
      "Templates & resources",
      "Lifetime access",
    ],
  },
  {
    name: "Brand Building Bootcamp",
    format: "4-week intensive",
    price: "$997",
    description: "Build a powerful personal brand that attracts ideal clients",
    features: [
      "Personal brand strategy",
      "Content creation system",
      "Social media blueprint",
      "Website & funnel templates",
      "Brand voice development",
      "Live implementation calls",
      "Done-with-you support",
    ],
    popular: true,
  },
  {
    name: "Scale to Six Figures",
    format: "12-week accelerator",
    price: "$2,997",
    description: "Advanced strategies to scale your business to six figures and beyond",
    features: [
      "Advanced marketing tactics",
      "Sales system optimization",
      "Team building strategies",
      "Automation & systems",
      "Weekly group coaching",
      "Guest expert sessions",
      "Hot seat coaching",
      "Accountability partners",
    ],
  },
]

const benefits = [
  {
    icon: Video,
    title: "Learn at Your Pace",
    description: "Self-paced video modules you can complete on your schedule.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with fellow entrepreneurs on the same journey.",
  },
  {
    icon: BookOpen,
    title: "Actionable Content",
    description: "No fluff—just practical strategies you can implement immediately.",
  },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-50 via-white to-purple-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-plum-600 to-purple-800 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Training & <span className="gradient-text">Courses</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive training programs designed to give you the skills, systems, 
                and strategies you need to build and scale a successful business—at your own pace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl">
                  <Link href="/shop">
                    Browse All Courses
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="/book">Schedule a Call</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Choose Online Training?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the same quality coaching and strategies in a flexible, affordable format.
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
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-plum-600 to-purple-800 flex items-center justify-center mx-auto mb-4">
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

      {/* Courses */}
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
              Featured <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the training program that matches your current business stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-plum-600 to-purple-800 text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    Most Popular
                  </div>
                )}
                
                <Card className={`h-full ${course.popular ? 'border-4 border-plum-400 shadow-xl' : 'border-2 hover:border-plum-200'} transition-all`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-serif mb-2">{course.name}</CardTitle>
                    <div className="text-gray-600 mb-1">{course.format}</div>
                    <div className="text-4xl font-bold gradient-text mb-3">{course.price}</div>
                    <p className="text-sm text-gray-600">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="w-full" variant={course.popular ? "default" : "outline"}>
                      <Link href="/shop">View Details</Link>
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
              Not Sure Which Course is Right?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Book a free consultation and I&apos;ll help you choose the perfect program 
              for your current business stage and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link href="/book">Book Free Consultation</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-plum-900">
                <Link href="/shop">Browse All Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
