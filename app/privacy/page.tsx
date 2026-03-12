export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom section-padding max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> February 18, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and improve our services</li>
              <li>Send you updates and marketing communications</li>
              <li>Process your transactions</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with trusted service providers who assist us 
              in operating our website and conducting our business.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information 
              from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              6. Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@mogultask.com" className="text-plum-600 hover:text-plum-700">
                privacy@mogultask.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
