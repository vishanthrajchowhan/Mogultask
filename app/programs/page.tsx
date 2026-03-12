"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, Star, Gift } from "lucide-react"

const packages = [
  {
    name: "Starter Package",
    price: "$2,997",
    duration: "3 Months",
    description: "Perfect for those just starting their entrepreneurial journey",
    features: [
      "6 bi-weekly coaching sessions",
      "Business foundation setup",
      "Initial brand strategy",
      "Marketing fundamentals",
      "Email support",
      "Resource library access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Great Escape Package",
    price: "$8,997",
    duration: "6 Months",
    description: "The complete transformation package for serious entrepreneurs",
    features: [
      "24 coaching sessions (bi-weekly)",
      "Complete business strategy roadmap",
      "Personal brand development",
      "Marketing & sales framework",
      "Mindset transformation program",
      "Exclusive mastermind access",
      "Resources library & templates",
      "Ongoing email & chat support",
      "Money-back guarantee",
    ],
    cta: "Claim Your Spot",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "VIP Elite Package",
    price: "$24,997",
    duration: "12 Months",
    description: "Premium 1-on-1 support for rapid scaling and growth",
    features: [
      "Weekly coaching sessions (52 total)",
      "Direct phone & text access",
      "Quarterly in-person intensive days",
      "Complete business audit & optimization",
      "Advanced marketing automation setup",
      "Team building & hiring support",
      "V IP mastermind membership",
      "Done-with-you implementation",
      "Speaking opportunity at our event",
      "Lifetime community access",
    ],
    cta: "Apply Now",
    popular: false,
  },
]

export default function ProgramsPage() {
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
            <div className="inline-flex items-center gap-2 bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Transform Your Life</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Programs & <span className="gradient-text">Packages</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the coaching package that fits your goals and timeline. Every package 
              includes personalized support, proven strategies, and the accountability you 
              need to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
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
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-white px-4 py-1 rounded-full text-sm font-medium z-10">
                    {pkg.badge}
                  </div>
                )}
                
                <Card className={`h-full ${pkg.popular ? 'border-4 border-gold-400 shadow-xl scale-105' : 'border-2 hover:border-plum-200'} transition-all duration-300`}>
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                    <div className="text-5xl font-bold gradient-text mb-2">{pkg.price}</div>
                    <div className="text-gray-600">{pkg.duration}</div>
                    <p className="text-sm text-gray-600 mt-4">{pkg.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      className="w-full" 
                      size="lg"
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      <Link href="/book">
                        {pkg.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Flexible <span className="gradient-text">Payment Options</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-12">
              I believe in making coaching accessible. All packages come with flexible 
              payment plans so you can invest in your future without financial stress.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-plum-100">
                <Gift className="w-12 h-12 text-plum-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Pay in Full</h3>
                <p className="text-sm text-gray-600">Save 10% when you pay upfront</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-plum-100">
                <Gift className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Monthly Payments</h3>
                <p className="text-sm text-gray-600">Spread the investment over time</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-plum-100">
                <Gift className="w-12 h-12 text-plum-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Custom Plans</h3>
                <p className="text-sm text-gray-600">Let&apos;s create a plan that works for you</p>
              </div>
            </div>
            
            <Button asChild size="xl">
              <Link href="/book">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-gradient-to-br from-plum-900 to-plum-950 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white fill-current" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              My Guarantee to You
            </h2>
            
            <p className="text-lg text-plum-100 mb-8">
              I&apos;m so confident in my coaching that I offer a money-back guarantee on The Great 
              Escape Package and VIP Elite Package. If you implement everything I teach and 
              don&apos;t see a 10x return on your investment within 12 months, I&apos;ll refund your 
              entire investment. No questions asked.
            </p>
            
            <p className="text-plum-200">
              That&apos;s how committed I am to your success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
