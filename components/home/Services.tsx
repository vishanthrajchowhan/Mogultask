"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Lightbulb, GraduationCap, Mic, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Coaching",
    description: "Stand up, step out and shine with the confidence and clarity to achieve your goals. Boost your productivity, profits and effectiveness. Discover your purpose and explore the possibilities of your biggest dreams.",
    href: "/services/coaching",
    color: "from-plum-500 to-plum-700",
  },
  {
    icon: Lightbulb,
    title: "Mastermind Strategy",
    description: "Collaborate, brainstorm and gear up with the power of know-how. Gain the ultimate action plan to overcome self-sabotage and perceived blocks. Access results and the keys to success.",
    href: "/services/strategy",
    color: "from-gold-500 to-gold-700",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Out-of-the-box workshops and online courses filled with valuable lessons about business, career and personal development. Learn how to grow your greatness and make the miraculous happen.",
    href: "/services/training",
    color: "from-plum-600 to-purple-800",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Let MekaDivine host your next event or give a motivational speech that will inspire, galvanize and entertain your audience. Creating an atmosphere for introspection that shifts mindsets and transforms lives.",
    href: "/services/speaking",
    color: "from-amber-500 to-orange-600",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
            How I Can Help You <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching and strategy services designed to help you break free, 
            build your brand, and achieve your biggest goals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={item}>
                <Card className="h-full border-2 hover:border-plum-200 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={service.href} className="inline-flex items-center gap-2 group">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
