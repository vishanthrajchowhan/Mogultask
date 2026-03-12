"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, Play } from "lucide-react"

const testimonials = [
  {
    name: "Yanique B.",
    role: "Client",
    company: null,
    image: null,
    content: "MekaDivine is so AMAZING!! She made me feel so comfortable speaking to her and she was able to provide me with so much clarity. I'm growing my greatness and making it happen with her guidance. I couldn't ask for a better life coach. She is the bomb.com",
    rating: 5,
    featured: true,
    videoUrl: null,
  },
  {
    name: "Natalie Singleton",
    role: "Owner",
    company: "Singleton Sweets",
    image: null,
    content: "MekaDivine has the ability to speak life into any dim situation. Her professionalism, honesty and integrity gave me consistent accountability. I was referred to MekaDivine by a friend when I was going through a difficult time and wanted to make some changes to improve my life. I received coaching, strategy sessions and a Mastermind Game Plan. My transformation was so much so that everyone compliments me for reinventing myself. I was able to do that under the leadership of MekaDivine's life coaching and strategy program, MogulTask. I found my passion, my why and now I make profit doing what I love. I can't thank her enough. I highly recommend her and her programs.",
    rating: 5,
    featured: true,
    videoUrl: null,
  },
  {
    name: "Rudy Larose",
    role: "Owner",
    company: "SyncSystems Technology",
    image: null,
    content: "Our experience working with MogulTask has been phenomenal. Their attention to details, poise, and professionalism have both inspired and behooved us to experience a greater level of growth, quality, and overall customer experience. Their innovation along with great tenacity continues to prove that they are the best at what they do. They've given us clarity and helped set clear and precise goals for a pathway to success. We are definitely fans of MekaDivine and MogulTask…Big fans!",
    rating: 5,
    featured: true,
    videoUrl: null,
  },
  {
    name: "Marie M.",
    role: "Owner",
    company: "Pro-Staffing Group LLC",
    image: null,
    content: "When I decided to open my business, I knew in my heart that I had to call MekaDivine. I have known her for years and her professionalism is out of this world. She teaches you step-by-step. She makes sure you are ready to take on this journey. I know she is someone I need on my side and I am going to continue to use her services.",
    rating: 5,
    featured: true,
    videoUrl: null,
  },
]

const stats = [
  { value: "500+", label: "Lives Transformed" },
  { value: "$50M+", label: "Client Revenue Generated" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Would Recommend" },
]

export default function TestimonialsPage() {
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
              Client Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take my word for it. Here&apos;s what my clients have to say about 
              their transformation journey with MogulTask coaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real people, real results, real transformations
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
                    {/* Video Thumbnail (if available) */}
                    {testimonial.videoUrl && (
                      <div className="relative aspect-video bg-gray-200 rounded-lg mb-4 group cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-8 h-8 text-plum-600 ml-1" />
                          </div>
                        </div>
                      </div>
                    )}

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
                    <div className="flex items-center gap-4">
                      {testimonial.image ? (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plum-300 to-gold-300"></div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-plum-300 to-gold-300 flex items-center justify-center text-white font-bold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-plum-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Join hundreds of successful entrepreneurs who&apos;ve transformed their lives 
              through coaching. Your story could be next.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center h-14 px-10 rounded-md bg-gold-500 text-white font-medium hover:bg-gold-600 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="/programs"
                className="inline-flex items-center justify-center h-14 px-10 rounded-md border-2 border-white text-white font-medium hover:bg-white hover:text-plum-900 transition-colors"
              >
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
