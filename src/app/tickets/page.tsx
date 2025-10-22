'use client'

import Link from 'next/link'

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gradient-to-r from-[#1b365f] to-cyan-600 py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-3 md:mb-4">
            Tickets
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto px-4">
            Join us for the most exciting dance event of the year!
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-[#1b365f]">
              Event Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-cyan-50 rounded-lg">
                <div className="text-cyan-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Date & Time</h3>
                <p>April 11, 2026</p>
                <p>7:00 PM - 10:30 PM</p>
              </div>

              <div className="p-4 bg-pink-50 rounded-lg">
                <div className="text-pink-500 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Location</h3>
                <p>Egyptian Theatre</p>
                <p>145 N 2nd St, DeKalb, IL 60115</p>
              </div>

              <div className="p-4 bg-cyan-50 rounded-lg">
                <div className="text-cyan-600 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">For Charity</h3>
                <p>100% of proceeds</p>
                <p>support local causes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-12 md:p-16">
              <div className="mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20 mx-auto text-cyan-600 mb-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-[#1b365f]">
                Ticket Information Coming Soon
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We&apos;re finalizing ticket details and pricing. Check back soon for updates, or follow us on social media to be the first to know when tickets go on sale!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-cyan-600 text-white font-bold py-3 px-8 rounded-lg hover:from-cyan-700 hover:to-cyan-700 transition duration-300 transform hover:scale-105 shadow-md"
                >
                  Contact Us
                </Link>
                <Link
                  href="/schedule"
                  className="bg-white border-2 border-cyan-600 text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-cyan-50 transition duration-300 transform hover:scale-105"
                >
                  View Event Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-[#1b365f]">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Want to be notified when tickets become available? Reach out through our contact page and we&apos;ll keep you informed!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-pink-600 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Get Notified
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
