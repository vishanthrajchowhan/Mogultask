"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gift, ArrowRight, CheckCircle } from "lucide-react"

export default function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to store lead
    console.log({ email, name })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
      setName("")
    }, 5000)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-plum-600 to-plum-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-plum-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 rounded-full px-6 py-3 mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Do You Desire to be Successful? Are You Ready to Take Action?
            </h2>
            
            <p className="text-lg text-plum-100 mb-8 max-w-2xl mx-auto">
              Enter your information below to win a free session, Great Escape Package or Ticket to my next event. 
              The winning names are drawn monthly and announced in our GoalGetters Anonymous Facebook Group.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white text-gray-900"
                    />
                  </div>
                </div>

                <Button type="submit" size="xl" variant="secondary" className="w-full">
                  Enter to Win
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-sm text-plum-200 text-center">
                  By entering, you&apos;ll also receive weekly tips and resources to help you 
                  build your dream business. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You&apos;re Entered!</h3>
                <p className="text-plum-100">
                  Check your email for confirmation and your free business growth guide.
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-plum-200 text-lg">
              <strong className="text-gold-300">Gain Access to our super supportive group of GoalGetters</strong>
              <br />
              Join the GoalGetters Anonymous community on Facebook!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
