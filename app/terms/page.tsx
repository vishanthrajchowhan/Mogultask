export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom section-padding max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> February 18, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using MogulTask services, you accept and agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please do not 
              use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              2. Services Description
            </h2>
            <p className="text-gray-600">
              MogulTask provides coaching, training, and educational services to help 
              individuals build and grow their businesses. Services may include 1-on-1 
              coaching, group programs, digital products, and educational content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              3. Payment Terms
            </h2>
            <p className="text-gray-600 mb-4">
              All fees are as stated on our website and are subject to change. Payment is 
              due at the time of purchase unless otherwise agreed in writing. We accept 
              payment via credit card, debit card, and other methods as indicated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              4. Refund Policy
            </h2>
            <p className="text-gray-600">
              Digital products come with a 30-day money-back guarantee. Coaching packages 
              may have different refund terms as specified in your service agreement. 
              Please review your specific program terms for details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content, materials, and intellectual property provided through MogulTask 
              services remain the property of MogulTask and are protected by copyright laws. 
              You may not reproduce, distribute, or create derivative works without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              MogulTask provides educational and coaching services. Results may vary, and we 
              make no guarantee of specific outcomes. You are responsible for implementing 
              the strategies and taking action on the guidance provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              7. Contact Information
            </h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, contact us at{' '}
              <a href="mailto:legal@mogultask.com" className="text-plum-600 hover:text-plum-700">
                legal@mogultask.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
