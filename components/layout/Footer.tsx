import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Linkedin, Twitter, Mail } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Programs", href: "/programs" },
    { name: "Speaking", href: "/speaking" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Free Resources", href: "/resources" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Shop", href: "/shop" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Mekadivine/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/MekaDivine/" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/mekadivine" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-plum-900 to-plum-950 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold text-white">
                MogulTask
              </span>
            </Link>
            <p className="text-plum-200 mb-6 max-w-md">
              Empowering GoalGetters to Stand Up, Step Out and Shine by clearing the clutter of self-sabotage 
              and perceived blocks. Join our community of MogulTaskers today!
            </p>
            <div className="mb-6">
              <p className="text-gold-300 font-semibold mb-2">
                <a href="mailto:info@mogultask.com" className="hover:text-gold-200 transition-colors">
                  info@mogultask.com
                </a>
              </p>
              <p className="text-gold-300 font-semibold">
                <a href="tel:754-422-2106" className="hover:text-gold-200 transition-colors">
                  754-422-2106
                </a>
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-plum-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-plum-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-plum-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-plum-200">
          <p>© {new Date().getFullYear()} MogulTask. All rights reserved.</p>
          <p className="font-medium text-gold-300">
            #DWTBG - Don&apos;t Wait To Be Great!
          </p>
        </div>
      </div>
    </footer>
  )
}
