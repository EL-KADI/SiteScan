import Link from "next/link"
import { Globe, Shield, Eye, Lock, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Globe className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-xl font-bold text-gray-900">SiteScan</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-2">Last updated: January 1, 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Website URLs</h4>
                  <p className="text-gray-600 text-sm">
                    When you use SiteScan to analyze a website, we temporarily process the URL you provide. This
                    information is used solely for the purpose of conducting the analysis and is not stored permanently.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    We collect anonymous usage statistics to help us improve our service. This includes information
                    about how often our tools are used and which features are most popular.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <p className="text-gray-600 text-sm">
                    If you contact us through our contact form, we collect your name, email address, and message content
                    to respond to your inquiry.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Provision</h4>
                  <p className="text-gray-600 text-sm">
                    We use the website URLs you provide to perform the requested analysis and generate reports. This
                    processing happens in real-time and the data is not stored after the analysis is complete.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Improvement</h4>
                  <p className="text-gray-600 text-sm">
                    Anonymous usage data helps us understand how our service is being used and identify areas for
                    improvement. This data cannot be traced back to individual users.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                  <p className="text-gray-600 text-sm">
                    Contact information is used solely to respond to your inquiries and provide customer support. We do
                    not use this information for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
                  <p className="text-gray-600 text-sm">
                    We implement appropriate technical and organizational security measures to protect your information
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Retention</h4>
                  <p className="text-gray-600 text-sm">
                    Website analysis data is processed in real-time and not stored. Contact form submissions are
                    retained for up to 2 years for customer service purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Third-Party Services</h4>
                  <p className="text-gray-600 text-sm">
                    We may use third-party services for analytics and infrastructure. These services are carefully
                    selected and required to maintain appropriate data protection standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-orange-600" />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access and Correction</h4>
                  <p className="text-gray-600 text-sm">
                    You have the right to access and correct any personal information we hold about you. Since we don't
                    store analysis data, this primarily applies to contact form submissions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Deletion</h4>
                  <p className="text-gray-600 text-sm">
                    You can request deletion of any personal information we have collected. Contact us using the
                    information provided in our Contact page.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opt-Out</h4>
                  <p className="text-gray-600 text-sm">
                    You can opt out of analytics tracking by using browser settings or privacy tools. This will not
                    affect the functionality of our analysis tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">SiteScan uses minimal cookies and tracking technologies:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
                  <li>Essential cookies for basic website functionality</li>
                  <li>Anonymous analytics cookies to understand usage patterns</li>
                  <li>No advertising or marketing cookies</li>
                  <li>No cross-site tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  We may update this privacy policy from time to time to reflect changes in our practices or for other
                  operational, legal, or regulatory reasons. We will notify users of any material changes by posting the
                  updated policy on this page with a new "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Email:</strong> privacy@sitescan.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Globe className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-lg font-semibold">SiteScan</span>
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="text-white">
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">© 2025 SiteScan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
