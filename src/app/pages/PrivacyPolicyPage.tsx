import logo from "/logo.png";
import { Link } from "react-router-dom";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background antialiased">
      {/* Header */}
      <section className="bg-gradient-to-br from-white via-red-50/30 to-slate-50 border-b border-slate-200">
        <div className="px-6 py-8 md:py-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <img src={logo} alt="DigiDataSense" className="h-12 md:h-16 lg:h-20" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 text-sm md:text-base text-slate-700 bg-white border-2 border-slate-300 rounded-lg hover:border-primary hover:text-primary transition-all duration-200"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 text-base md:text-lg">Last updated: January 12, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none">
          
          {/* Introduction */}
          <div className="mb-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              DigiDataSense ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
          </div>

          {/* Company Information */}
          <div className="mb-10 p-6 bg-slate-50 border-l-4 border-primary rounded-r-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Company Information</h2>
            <div className="space-y-2 text-slate-700">
              <p><strong>Company Name:</strong> DigiDataSense</p>
              <p><strong>Founder:</strong> Zuber Mukadam</p>
              <p><strong>Address:</strong> 130 Edgedale Plains, #11-06, Singapore - 820130</p>
              <p><strong>Phone:</strong> <a href="tel:+6596733536" className="text-primary hover:underline">+65 96733536</a></p>
              <p><strong>Email:</strong> <a href="mailto:zubairmukadam@hotmail.com" className="text-primary hover:underline">zubairmukadam@hotmail.com</a></p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>Request information about our services</li>
              <li>Schedule a consultation or strategy call</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Fill out a form on our website</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Name and job title</li>
              <li>Company name and industry</li>
              <li>Email address and phone number</li>
              <li>Business requirements and objectives</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device type and operating system</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver our MarTech transformation and APAC revenue acceleration services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Analyze website usage and optimize performance</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </div>

          {/* How We Share Your Information */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How We Share Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you (e.g., email service providers, analytics tools, scheduling platforms)</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities</li>
              <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, safety, or property, and that of our clients and others</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Data Retention */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Retention</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent to our processing of your information at any time</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              To exercise any of these rights, please contact us at <a href="mailto:zubairmukadam@hotmail.com" className="text-primary hover:underline">zubairmukadam@hotmail.com</a>.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may use cookies and similar tracking technologies to collect and track information about your website usage. Cookies are small data files stored on your device. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features of our website.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          {/* International Data Transfers */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. International Data Transfers</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to the transfer of your information to Singapore and other countries where we operate.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Last updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Us */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-slate-700">
              <p><strong>DigiDataSense</strong></p>
              <p>Attn: Zuber Mukadam</p>
              <p>130 Edgedale Plains, #11-06</p>
              <p>Singapore - 820130</p>
              <p>Phone: <a href="tel:+6596733536" className="text-primary hover:underline">+65 96733536</a></p>
              <p>Email: <a href="mailto:zubairmukadam@hotmail.com" className="text-primary hover:underline">zubairmukadam@hotmail.com</a></p>
            </div>
          </div>

          {/* Consent */}
          <div className="p-6 bg-red-50 border-l-4 border-primary rounded-r-lg">
            <p className="text-slate-700 leading-relaxed">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DigiDataSense. MarTech Transformation and Revenue Enablement Partner.
          </p>
        </div>
      </footer>
    </div>
  );
}
