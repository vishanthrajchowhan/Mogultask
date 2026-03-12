"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    company: "SJ Consulting",
    content: "Working with MekaDivine was the best decision I made for my business. Within 6 months, I went from struggling freelancer to running a six-figure consulting firm. Her strategic guidance and unwavering support transformed not just my business, but my entire life.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Corporate Executive turned Entrepreneur",
    company: "Chen Digital",
    content: "I was stuck in corporate for 15 years, dreaming of starting my own business. MekaDivine gave me the clarity, confidence, and concrete plan I needed to make the leap. I'm now running a thriving digital agency and have never been happier.",
    rating: 5,
  },
  {
    name: "Lisa Martinez",
    role: "Life Coach",
    company: "Empowered Living",
    content: "MekaDivine doesn't just teach you business strategies—she helps you develop the mindset and habits of a successful entrepreneur. Her coaching helped me overcome self-doubt and build a coaching practice that impacts hundreds of lives.",
    rating: 5,
  },
]

export default function Testimonials() {
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
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say about 
            their transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-plum-200 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-plum-100 flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-plum-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-plum-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
