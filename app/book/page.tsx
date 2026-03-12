"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle2, MessageSquare } from "lucide-react"

const sessionTypes = [
  {
    name: "Free Consultation",
    duration: "30 minutes",
    price: "Free",
    description: "Discover how coaching can help you achieve your goals",
  },
  {
    name: "Single Coaching Session",
    duration: "60 minutes",
    price: "$500",
    description: "One-on-one coaching session to tackle your biggest challenge",
  },
  {
    name: "Strategy Session",
    duration: "90 minutes",
    price: "$750",
    description: "Deep-dive strategic planning session for your business",
  },
]

export default function BookPage() {
  const [selectedSession, setSelectedSession] = useState(sessionTypes[0].name)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with booking API (Calendly or custom)
    console.log({ ...formData, sessionType: selectedSession })
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-plum-50 via-white to-gold-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl px-4"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Booking Request Received!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for booking a session with me. I&apos;ve received your request and will 
            send you a confirmation email within 24 hours with next steps.
          </p>
          <Button asChild size="lg">
            <a href="/">Return Home</a>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-plum-50 via-white to-gold-50">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Book Your Session</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Let&apos;s Start Your <span className="gradient-text">Transformation</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Schedule a session and take the first step toward building the business 
              and life you&apos;ve always dreamed of.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Session Types */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Choose Your Session
              </h2>
              
              {sessionTypes.map((session) => (
                <Card
                  key={session.name}
                  className={`cursor-pointer transition-all ${
                    selectedSession === session.name
                      ? 'border-2 border-plum-600 shadow-lg'
                      : 'border-2 border-transparent hover:border-plum-200'
                  }`}
                  onClick={() => setSelectedSession(session.name)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {session.name}
                      {selectedSession === session.name && (
                        <CheckCircle2 className="w-5 h-5 text-plum-600" />
                      )}
                    </CardTitle>
                    <CardDescription>{session.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </div>
                      <div className="text-plum-600 font-bold text-lg">
                        {session.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Your Information</CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you within 24 hours to 
                    confirm your booking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell Me About Your Goals
                      </label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="What would you like to achieve? What challenges are you facing?"
                      />
                    </div>

                    <Button type="submit" size="xl" className="w-full">
                      <Calendar className="mr-2 w-5 h-5" />
                      Submit Booking Request
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our terms and privacy policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="w-12 h-12 text-plum-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Sessions available weekdays and weekends to fit your schedule
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <MessageSquare className="w-12 h-12 text-plum-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Virtual or In-Person</h3>
              <p className="text-gray-600">
                Choose between video calls or in-person sessions
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CheckCircle2 className="w-12 h-12 text-plum-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Easy Rescheduling</h3>
              <p className="text-gray-600">
                Life happens—reschedule up to 24 hours before your session
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
