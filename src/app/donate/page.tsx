'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function DonatePage() {
  const charities = [
    {
      name: 'Society for the Prevention of Awkward Dancing',
      description:
        'Dedicated to eliminating cringe-worthy dance moves and teaching proper rhythm to the rhythmically challenged.',
      impact: 'Has saved 247 wedding receptions from disaster',
    },
    {
      name: 'The International Brotherhood of Dramatic Pirouettes',
      description:
        'Supporting overly theatrical spins and providing emergency sequins to dancers in need of extra sparkle.',
      impact: 'Distributed 1,847 emergency jazz hands annually',
    },
    {
      name: 'Cats Who Think They Can Dance Foundation',
      description:
        'Funding interpretive dance lessons for felines who believe they possess untapped choreographic genius.',
      impact: 'Helped 97 cats achieve their dreams of stardom',
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
              alt="Donate to Support Local Charities"
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
            Support Our Cause
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Every donation directly impacts local charities in DeKalb County
          </p>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Your Impact
          </h2>
          <p className="section-subtitle">
            100% of proceeds go directly to local charities - no administrative
            fees
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-purple-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">$25</div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Feeds a Family
              </h3>
              <p className="text-gray-600">
                Provides a week&apos;s worth of groceries for a family of four
                through our food pantry partners.
              </p>
            </div>

            <div className="text-center p-6 bg-pink-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-pink-500 mb-2">$50</div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Youth Dance Classes
              </h3>
              <p className="text-gray-600">
                Sponsors one month of dance classes for a child in our
                after-school program.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                $100
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">
                Senior Activities
              </h3>
              <p className="text-gray-600">
                Funds recreational activities and wellness programs for seniors
                for one week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Partners */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
            Our Charity Partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {charities.map((charity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-bold mb-3 font-poppins text-purple-600">
                  {charity.name}
                </h3>
                <p className="text-gray-700 mb-4">{charity.description}</p>
                <div className="text-sm text-pink-500 font-medium">
                  {charity.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
              Make a Donation
            </h2>

            <div className="bg-purple-50 p-8 rounded-xl shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    className="bg-white border-2 border-purple-300 text-purple-600 font-bold py-3 px-4 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Message (Optional)
                </label>
                <textarea
                  placeholder="Share why you're supporting this cause..."
                  rows={3}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105 shadow-md">
                Donate Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure donation processing powered by Stripe. Your donation is
                tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Thank You for Your Support!
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Your generosity helps us build a stronger, more vibrant community
            through the power of dance and giving.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Learn More About Our Mission
            </Link>
            <Link
              href="/tickets"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              Get Event Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
