import Link from 'next/link'

export default function TeamsPage() {
  return (
    <div className="min-h-screen">
      {/* Team Registration Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Register Your Team</h2>
          <p className="section-subtitle">
            Ready to get served? Sign up your team and represent your favorite
            non-profit!
          </p>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg border border-cyan-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1b365f] to-cyan-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold font-poppins mb-2">
                  Team Application
                </h3>
                <p className="text-cyan-100">
                  Fill out the form below and we&apos;ll reach out with more
                  details!
                </p>
              </div>

              <form className="p-8 space-y-6">
                {/* Number of Dancers */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    How Many Dancers? *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200">
                    <option value="">Select number of dancers</option>
                    {Array.from({ length: 16 }, (_, i) => i + 5).map((num) => (
                      <option key={num} value={num}>
                        {num} dancers
                      </option>
                    ))}
                  </select>
                </div>

                {/* Non-Profit Organization */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    What Non-Profit Organization do you want to represent? *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                    placeholder="Enter the non-profit organization name"
                  />
                </div>

                {/* Theme/Music Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Theme/Music Type *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                    placeholder="e.g., Hip Hop, Pop, R&B, Latin, etc."
                  />
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Email and Location Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-cyan-600 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-bold text-[#1b365f]">
                        What happens next?
                      </h4>
                      <p className="text-sm text-gray-700 mt-1">
                        After you submit this form, someone from our team will
                        reach out to you soon with more details about the
                        competition, practice schedules, and next steps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-retro-cyan">
                    Submit Team Application
                  </button>
                </div>

                {/* Required Fields Note */}
                <p className="text-sm text-gray-500 text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins text-[#1b365f]">
                  Questions About Teams?
                </h2>

                <p className="text-lg text-gray-600 mb-6">
                  Have questions about forming a team, competition rules, or the
                  registration process? We&apos;re here to help!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-cyan-600 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-[#1b365f] mb-1">
                        Email Us
                      </h3>
                      <p className="text-sm text-gray-600">
                        Get in touch via our contact page
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-pink-500 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-[#1b365f] mb-1">
                        Quick Response
                      </h3>
                      <p className="text-sm text-gray-600">
                        We typically respond within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-600 text-white font-bold py-4 px-10 rounded-lg hover:from-cyan-700 hover:to-cyan-700 transition duration-300 transform hover:scale-105 shadow-md"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Want to Participate?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Interested in forming a team or volunteering for the event? Get in
            touch with us!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-retro-pink">
              Contact Us
            </Link>
            <Link
              href="/tickets"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
