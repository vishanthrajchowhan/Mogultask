"use client"

import { motion } from "framer-motion"
import { Award, Target, Heart, Zap } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "I focus on practical strategies that deliver measurable outcomes. Your success is my success.",
  },
  {
    icon: Heart,
    title: "Authentic Connection",
    description: "I believe in building genuine relationships based on trust, empathy, and mutual respect.",
  },
  {
    icon: Zap,
    title: "Action-Oriented",
    description: "No fluff, no theory overload. We focus on taking massive action that moves the needle.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "I'm committed to your transformation and won't settle for anything less than extraordinary results.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-50 via-white to-gold-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
                Meet <span className="gradient-text">MekaDivine</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Certified Professional Coach, Motivator & Strategist
              </p>
              <div className="prose prose-lg text-gray-600">
                <p>
                  I&apos;m on a mission to help ambitious professionals break free from the 9-5 grind 
                  and build businesses that align with their passion, purpose, and potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-plum-300 to-gold-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl font-serif font-bold text-white mb-4">MD</div>
                    <div className="text-3xl text-white/90">MekaDivine</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              My Story
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Hi, I am MekaDivine, Maven of Makin It Happen and founder of MogulTask, a business, career and personal development resource.
              </p>
              
              <p>
                I empower GoalGetters to <strong>Stand Up, Step Out and Shine</strong> by clearing the clutter of self-sabotage and perceived blocks so they can effectively and tenaciously move forward.
              </p>
              
              <p>
                I also provide practical solutions to help ambitious professionals develop and implement a personalized game plan to package their genius and launch their irresistible brand.
              </p>
              
              <p className="text-xl font-bold text-gray-900">
                When it comes to demolishing your goals you have two choices… Give up or Give it all You Got.
              </p>
              
              <p>
                We all know what happens when you give up…but what happens when you give it all you got and you still can&apos;t accomplish what you set out to do?
              </p>
              
              <p className="text-xl font-semibold text-plum-700">
                You book a session with me, your Certified Professional Coach and Strategist.
              </p>
              
              <p className="text-2xl font-bold gradient-text mt-8">
                #DWTBG - Don&apos;t Wait To Be Great!
              </p>
              <p className="text-lg font-medium text-gray-700">
                Grow Your GREATNESS and Make the Miraculous Happen!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              My Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything I do and every client relationship I build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-plum-100 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-plum-500 to-plum-700 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Credentials & <span className="gradient-text">Certifications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-plum-50 to-white rounded-xl p-6 border-2 border-plum-100">
                <Award className="w-12 h-12 text-plum-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Professional Coach</h3>
                <p className="text-gray-600">International Coach Federation (ICF) Accredited</p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 border-2 border-gold-200">
                <Award className="w-12 h-12 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Strategy Expert</h3>
                <p className="text-gray-600">10+ years of entrepreneurial experience</p>
              </div>
              
              <div className="bg-gradient-to-br from-plum-50 to-white rounded-xl p-6 border-2 border-plum-100">
                <Award className="w-12 h-12 text-plum-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Motivational Speaker</h3>
                <p className="text-gray-600">100+ speaking engagements and workshops</p>
              </div>
              
              <div className="bg-gradient-to-br from-gold-50 to-white rounded-xl p-6 border-2 border-gold-200">
                <Award className="w-12 h-12 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Results Proven</h3>
                <p className="text-gray-600">$50M+ in client revenue generated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
