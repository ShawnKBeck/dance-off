'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SponsorsPage() {
  const sponsorTiers = [
    {
      name: 'Platinum Partner',
      price: '$2,500+',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Logo prominently displayed on all marketing materials',
        'Banner placement at main event',
        '10 VIP tickets included',
        'Recognition during opening and closing ceremonies',
        'Social media mentions and website feature',
        'Opportunity to present awards',
        'Meet & greet with dance instructors',
      ],
    },
    {
      name: 'Gold Sponsor',
      price: '$1,000+',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Logo on event program and website',
        'Banner placement at event venue',
        '6 general admission tickets included',
        'Recognition during event',
        'Social media mentions',
        'Program advertisement space',
      ],
    },
    {
      name: 'Silver Supporter',
      price: '$500+',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo in event program',
        'Website listing',
        '4 general admission tickets included',
        'Social media recognition',
        'Program thank you listing',
      ],
    },
    {
      name: 'Community Friend',
      price: '$250+',
      color: 'from-green-400 to-green-600',
      benefits: [
        'Name in event program',
        'Website thank you listing',
        '2 general admission tickets included',
        'Social media recognition',
      ],
    },
  ]

  const currentSponsors = [
    {
      name: 'Dance Dimensions',
      tier: 'Presenting Sponsor',
      description: "DeKalb's premier dance studio and event host",
    },
    {
      name: 'DeKalb Community Bank',
      tier: 'Platinum Partner',
      description: 'Supporting local community initiatives',
    },
    {
      name: 'Groovy Threads Costume Shop',
      tier: 'Gold Sponsor',
      description: 'Providing costumes and dancewear',
    },
    {
      name: 'Sound & Light Pro',
      tier: 'Silver Supporter',
      description: 'Professional audio/visual services',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-purple-100">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-dance.jpg"
              alt="Event Sponsors"
              fill
              priority
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 via-purple-600/60 to-indigo-700/50"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4 drop-shadow-lg">
            Our Sponsors
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Thank you to our amazing partners who make this event possible
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Thank You to Our 2026 Sponsors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {currentSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center h-20 bg-white rounded-lg mb-4">
                  <span className="text-2xl font-bold text-purple-600">
                    {sponsor.name}
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-pink-500 font-bold mb-2">
                    {sponsor.tier}
                  </div>
                  <p className="text-gray-700">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
            Become a Sponsor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Partner with us to support local charities while gaining valuable
            exposure for your business. Join our mission to strengthen the
            DeKalb community through dance and giving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Why Sponsor */}
      <section className="section-padding bg-white">
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
