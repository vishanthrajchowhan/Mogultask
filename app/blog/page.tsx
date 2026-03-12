"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { formatDate } from "@/lib/utils"

// Mock blog posts - replace with actual CMS data
const blogPosts = [
  {
    id: 1,
    title: "5 Signs You're Ready to Escape the 9-5",
    slug: "5-signs-ready-escape-9-5",
    excerpt: "Thinking about leaving your corporate job? Here are the clear signs that you're truly ready to make the leap into entrepreneurship.",
    category: "Career Transition",
    tags: ["9-5", "entrepreneurship", "career"],
    publishedAt: new Date("2026-02-10"),
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How to Build a Personal Brand That Attracts Clients",
    slug: "build-personal-brand-attracts-clients",
    excerpt: "Your personal brand is your most valuable asset as an entrepreneur. Learn how to position yourself as the go-to expert in your niche.",
    category: "Branding",
    tags: ["branding", "marketing", "business"],
    publishedAt: new Date("2026-02-08"),
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "The Mindset Shifts That Changed Everything",
    slug: "mindset-shifts-changed-everything",
    excerpt: "Success isn't just about strategy—it's about mindset. Discover the mental shifts that separate successful entrepreneurs from the rest.",
    category: "Mindset",
    tags: ["mindset", "success", "growth"],
    publishedAt: new Date("2026-02-05"),
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "From Side Hustle to Full-Time Business: A Roadmap",
    slug: "side-hustle-to-full-time-business",
    excerpt: "Not ready to quit your job yet? Here's how to build your business on the side and transition safely into full-time entrepreneurship.",
    category: "Business Strategy",
    tags: ["side hustle", "business", "strategy"],
    publishedAt: new Date("2026-02-01"),
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    title: "How to Price Your Services for Profit and Value",
    slug: "price-services-profit-value",
    excerpt: "Stop undercharging! Learn the proven framework for pricing your services based on value, not hours.",
    category: "Business Strategy",
    tags: ["pricing", "business", "profit"],
    publishedAt: new Date("2026-01-28"),
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Overcoming Imposter Syndrome as an Entrepreneur",
    slug: "overcoming-imposter-syndrome",
    excerpt: "Feeling like a fraud? You're not alone. Here's how to overcome imposter syndrome and step into your power as a business owner.",
    category: "Mindset",
    tags: ["imposter syndrome", "mindset", "confidence"],
    publishedAt: new Date("2026-01-25"),
    readTime: "5 min read",
    featured: false,
  },
]

const categories = [
  "All Posts",
  "Career Transition",
  "Branding",
  "Mindset",
  "Business Strategy",
]

export default function BlogPage() {
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
              The MogulTask <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, strategies, and inspiration to help you build the business 
              and life you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Featured Articles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-plum-200 transition-all duration-300 hover:shadow-xl group">
                  {/* Featured Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-plum-200 to-gold-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-serif font-bold text-white">
                        {post.title.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <div className="inline-block bg-plum-100 text-plum-700 px-3 py-1 rounded-full text-sm mb-3">
                      {post.category}
                    </div>
                    
                    <CardTitle className="text-2xl font-serif group-hover:text-plum-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-plum-600 hover:text-plum-700 font-medium group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
              All Articles
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border-2 border-plum-200 text-gray-700 hover:border-plum-600 hover:text-plum-600 transition-colors text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full border-2 hover:border-plum-200 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <div className="inline-block bg-plum-100 text-plum-700 px-3 py-1 rounded-full text-xs mb-3 w-fit">
                          {post.category}
                        </div>
                        
                        <CardTitle className="text-xl font-serif group-hover:text-plum-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        
                        <CardDescription>
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-xs text-gray-600"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-plum-900 to-plum-950 text-white">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Never Miss an Article
            </h2>
            <p className="text-lg text-plum-200 mb-8">
              Subscribe to get new posts delivered straight to your inbox, plus exclusive 
              tips and resources for building your dream business.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className="h-12 px-8 rounded-md bg-gold-500 text-white font-medium hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
