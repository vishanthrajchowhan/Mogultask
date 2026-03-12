"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, BookOpen, FileText, Layout, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "The Freedom Business Blueprint",
    category: "course",
    price: 497,
    description: "Complete course on building a profitable online business from scratch",
    icon: BookOpen,
    features: [
      "12 video modules",
      "Workbooks & templates",
      "Private community access",
      "Lifetime access",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Brand Strategy Workbook",
    category: "workbook",
    price: 97,
    description: "Step-by-step workbook to define and develop your personal brand",
    icon: FileText,
    features: [
      "50+ page PDF workbook",
      "Brand positioning exercises",
      "Social media templates",
      "Instant download",
    ],
    featured: false,
  },
  {
    id: 3,
    name: "Business Launch Templates Pack",
    category: "template",
    price: 147,
    description: "Complete template bundle to launch your business professionally",
    icon: Layout,
    features: [
      "Website copy templates",
      "Email sequences",
      "Social media content calendar",
      "Contract templates",
    ],
    featured: false,
  },
  {
    id: 4,
    name: "Mindset Mastery Program",
    category: "course",
    price: 697,
    description: "Transform your mindset and overcome limiting beliefs holding you back",
    icon: BookOpen,
    features: [
      "8-week program",
      "Daily mindset exercises",
      "Audio meditations",
      "Group coaching calls",
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Marketing Funnel Blueprint",
    category: "template",
    price: 197,
    description: "Pre-built marketing funnels and email sequences for quick setup",
    icon: Layout,
    features: [
      "5 proven funnel templates",
      "Email copy included",
      "Landing page designs",
      "Video tutorials",
    ],
    featured: false,
  },
  {
    id: 6,
    name: "90-Day Action Planner",
    category: "workbook",
    price: 47,
    description: "Quarterly planning system to achieve your biggest goals",
    icon: FileText,
    features: [
      "Quarterly goal setting",
      "Weekly action plans",
      "Progress tracking",
      "Printable PDF",
    ],
    featured: false,
  },
]

const categories = [
  { name: "All Products", value: "all" },
  { name: "Courses", value: "course" },
  { name: "Workbooks", value: "workbook" },
  { name: "Templates", value: "template" },
]

export default function ShopPage() {
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
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Digital Products</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Shop Digital <span className="gradient-text">Products</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Courses, workbooks, and templates to help you build your dream business 
              at your own pace. All products come with my personal guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                className="px-6 py-2 rounded-full border-2 border-plum-200 text-gray-700 hover:border-plum-600 hover:text-plum-600 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {product.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-gold text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Bestseller
                    </div>
                  )}
                  
                  <Card className={`h-full ${product.featured ? 'border-2 border-gold-400' : 'border-2 hover:border-plum-200'} transition-all duration-300 hover:shadow-xl`}>
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-plum-500 to-plum-700 flex items-center justify-center mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-serif">{product.name}</CardTitle>
                      <CardDescription className="text-base">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-4xl font-bold gradient-text">
                          ${product.price}
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-plum-600"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="flex gap-2">
                      <Button className="flex-1">
                        <ShoppingCart className="mr-2 w-4 h-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-plum-50">
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
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              30-Day <span className="gradient-text">Money-Back Guarantee</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              I stand behind every product I create. If you&apos;re not completely satisfied 
              with your purchase, simply email me within 30 days for a full refund. 
              No questions asked.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Instant Access</h3>
                <p className="text-sm text-gray-600">
                  Get immediate access to your purchase via email
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Lifetime Updates</h3>
                <p className="text-sm text-gray-600">
                  Receive all future updates and improvements for free
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-sm text-gray-600">
                  Get help whenever you need it via email support
                </p>
              </div>
            </div>
          </motion.div>
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
              Need More Personalized Support?
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              While these products are great for self-paced learning, nothing beats 
              personalized 1-on-1 coaching. Let&apos;s work together to achieve your goals faster.
            </p>
            <Button asChild size="xl" variant="secondary">
              <Link href="/book">Book a Coaching Session</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
