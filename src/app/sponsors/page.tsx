'use client'

import Link from 'next/link'

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      name: 'Friend of the Event',
      price: '$100+',
      color: 'from-blue-400 to-cyan-500',
      benefits: [
        'Business name in event program',
        'Website thank you listing',
        '2 general admission tickets included',
        'Social media recognition',
        'Program acknowledgment',
      ],
    },
    {
      name: 'Community Supporter',
      price: '$200+',
      color: 'from-green-400 to-emerald-500',
      benefits: [
        'Business name in event program',
        'Business name on event t-shirts (small text)',
        'Website thank you listing',
        '4 general admission tickets included',
        'Social media recognition post',
        'Program thank you section listing',
      ],
    },
    {
      name: 'Supporting Sponsor',
      price: '$500+',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Logo in event program and website',
        'Logo placement on event t-shirts (back)',
        'Table tent signage at event',
        '6 general admission tickets included',
        'Social media recognition',
        'Quarter-page advertisement in event program',
        'Business listing on website sponsor page',
      ],
    },
    {
      name: 'Presenting Partner',
      price: '$1,000+',
      color: 'from-yellow-400 to-orange-500',
      benefits: [
        'Logo on all marketing materials',
        'Logo placement on event t-shirts (sleeve)',
        'Banner placement at event venue',
        '10 general admission tickets included',
        'Recognition during event ceremonies',
        'Social media mentions throughout campaign',
        'Half-page advertisement in event program',
        'Featured listing on website',
        'Opportunity to distribute promotional materials',
      ],
    },
    {
      name: 'Title Sponsor',
      price: '$5,000+',
      color: 'from-purple-600 to-indigo-800',
      benefits: [
        'Event named after your business (e.g., "Company Name presents You Got Served")',
        'Logo prominently displayed on all marketing materials',
        'Logo placement on event t-shirts (front chest)',
        'Main stage banner placement',
        '20 VIP tickets included',
        'Recognition during opening and closing ceremonies',
        'Opportunity to present grand prize trophy',
        'Meet & greet with dance instructors and judges',
        'Social media campaign featuring your business',
        'Full-page advertisement in event program',
        'Website homepage feature',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Sponsorship Opportunities */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-poppins text-center text-purple-700">
            Become a Sponsor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Partner with us to support local charities while gaining valuable
            exposure for your business. Join our mission to strengthen the
            DeKalb community through dance and giving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {sponsorTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${tier.color} text-white p-6 text-center`}
                >
                  <h3 className="text-xl font-bold mb-2 font-poppins">
                    {tier.name}
                  </h3>
                  <div className="text-2xl font-bold">{tier.price}</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Opportunity Showcase */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Your Logo Could Be Here
          </h2>
          <p className="section-subtitle">
            See how your brand will be showcased at different sponsorship levels
          </p>

          <div className="space-y-8 mt-12 max-w-6xl mx-auto">
            {/* Title Sponsor - Full Width Banner */}
            <div className="bg-white border-2 border-dashed border-purple-300 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-800 rounded-lg mb-6 text-white font-bold relative overflow-hidden h-40">
                <div className="text-center">
                  <div className="text-4xl mb-2">YOUR LOGO HERE</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-purple-700 font-bold text-2xl mb-3">
                  Title Sponsor
                </div>
                <p className="text-gray-600 text-lg">
                  Your company logo prominently featured across all materials
                </p>
              </div>
            </div>

            {/* Presenting Partner - Large Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-dashed border-purple-300 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 text-white font-bold relative overflow-hidden h-24">
                  <div className="text-center">
                    <div className="text-2xl">YOUR LOGO HERE</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-700 font-bold text-xl mb-2">
                    Presenting Partner
                  </div>
                  <p className="text-gray-600">
                    High visibility placement for your brand
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-dashed border-purple-300 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg mb-4 text-white font-bold relative overflow-hidden h-20">
                  <div className="text-center">
                    <div className="text-lg">YOUR LOGO HERE</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-700 font-bold text-lg mb-2">
                    Supporting Sponsor
                  </div>
                  <p className="text-gray-600">
                    Professional recognition for your business
                  </p>
                </div>
              </div>
            </div>

            {/* Community Supporter & Friend - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border-2 border-dashed border-purple-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg mb-3 text-white font-bold relative overflow-hidden h-12">
                  <div className="text-center">
                    <div className="text-sm">YOUR BUSINESS NAME</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-700 font-bold text-base mb-1">
                    Community Supporter
                  </div>
                  <p className="text-gray-600 text-sm">
                    Business name recognition throughout event materials
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-dashed border-purple-300 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg mb-3 text-white font-bold relative overflow-hidden h-10">
                  <div className="text-center">
                    <div className="text-xs">YOUR BUSINESS NAME</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-purple-700 font-bold text-base mb-1">
                    Friend of the Event
                  </div>
                  <p className="text-gray-600 text-sm">
                    Thank you listing in program and website
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-purple-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us today to secure your sponsorship and get your logo
                featured at &quot;You Got Served&quot; 2026!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Become a Sponsor
                </Link>
                <button className="border-2 border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-purple-50 transition duration-300">
                  Download Info Packet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* T-Shirt Logo Placement */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
            Event T-Shirt Logo Placement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Your logo will be prominently displayed on our event t-shirts worn
            by volunteers, staff, and available for purchase by attendees.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* T-Shirt Mockup */}
                <div className="relative">
                  <div className="w-64 h-80 bg-gradient-to-b from-purple-600 to-purple-800 rounded-lg shadow-xl relative overflow-hidden">
                    {/* Shirt shape */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-purple-700 rounded-b-xl"></div>

                    {/* Title Sponsor - Front Chest */}
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-white/90 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">
                        TITLE
                      </span>
                    </div>

                    {/* Presenting Partner - Sleeve */}
                    <div className="absolute top-20 right-2 w-12 h-6 bg-white/80 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">
                        1K
                      </span>
                    </div>

                    {/* Supporting Sponsor - Back (shown as small indicator) */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-white/70 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">
                        500
                      </span>
                    </div>

                    {/* Community Supporter - Small text */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-white/60 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-800">
                        200
                      </span>
                    </div>
                  </div>
                </div>

                {/* Logo Placement Legend */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-700">
                        Title Sponsor ($5,000)
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Large logo on front chest - Maximum visibility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-600">
                        Presenting Partner ($1,000)
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Medium logo on sleeve - High visibility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-600">
                        Supporting Sponsor ($500)
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Small logo on back - Good visibility
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold text-green-600">
                        Community Supporter ($200)
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Business name in small text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-poppins text-center text-purple-700">
            Why Sponsor &quot;You Got Served&quot;?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m-9 9c1.657 0 3-4.03 3-9s-1.343-9 3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Directly support local charities and demonstrate your commitment
                to the DeKalb community. Your sponsorship creates lasting
                positive change.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-pink-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Brand Visibility
              </h3>
              <p className="text-gray-600">
                Gain exposure to hundreds of community members, families, and
                local business leaders in a fun, positive environment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-purple-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Networking
              </h3>
              <p className="text-gray-600">
                Connect with other local business leaders and community members
                who share your values of giving back and supporting the arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join our growing list of sponsors and help make this event a huge
            success for our community charities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Become a Sponsor
            </Link>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105">
              Download Sponsorship Packet
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
