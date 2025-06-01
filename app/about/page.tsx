import Link from "next/link"
import { Globe, Target, Users, Award, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
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
              <Link href="/about" className="text-blue-600 font-medium">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About SiteScan</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're dedicated to helping developers and website owners optimize their web presence through comprehensive
              analysis and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To democratize website optimization by providing easy-to-use tools that help everyone create faster,
                  more accessible, and better-performing websites. We believe that great web experiences should be
                  accessible to all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team consists of experienced web developers, UX designers, and SEO specialists who are passionate
                  about web performance and accessibility. We combine technical expertise with user-centered design.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Analyze</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">Load times, optimization opportunities, and speed metrics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">SEO</h3>
                <p className="text-sm text-gray-600">Meta tags, content structure, and search optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                <p className="text-sm text-gray-600">WCAG compliance, screen reader support, and inclusive design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
                <p className="text-sm text-gray-600">Security, modern standards, and development practices</p>
              </div>
            </div>
          </div>

          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Why Choose SiteScan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comprehensive Analysis</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    We analyze multiple aspects of your website including performance, SEO, accessibility, and best
                    practices to give you a complete picture.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Actionable Insights</h4>
                  <p className="text-gray-600 text-sm">
                    Our reports don't just identify issues - they provide specific recommendations on how to fix them.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy to Use</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Simply enter your website URL and get detailed analysis results in seconds. No technical expertise
                    required.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Free & Fast</h4>
                  <p className="text-gray-600 text-sm">
                    Get instant results without any cost. Perfect for developers, agencies, and website owners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Website?</h2>
            <p className="text-gray-600 mb-8">
              Start analyzing your website today and discover opportunities for improvement.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Analysis
            </Link>
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
              <Link href="/about" className="text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white">
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
