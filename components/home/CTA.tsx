"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-gold-50 to-plum-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-plum-100 text-plum-700 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Don&apos;t just dream about the life, career or business you want.
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Break free from what&apos;s holding you back and &apos;Let&apos;s Make It Happen&apos; with your very own{" "}
            <Link href="/programs/great-escape" className="font-bold text-plum-600 hover:text-plum-700 underline">
              Great Escape Package
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/book">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="/programs">
                View Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30-Minute Session</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Free & Confidential</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
