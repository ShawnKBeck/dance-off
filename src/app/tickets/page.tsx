'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function TicketsPage() {
  const ticketTypes = [
    {
      name: 'General Admission',
      price: 15,
      description: 'Standard seating with full view of the dance floor',
      features: [
        'Access to main event',
        'Intermission refreshments included',
        'Event program',
        'Photo opportunities',
      ],
    },
    {
      name: 'VIP Experience',
      price: 35,
      description: 'Premium seating with exclusive perks',
      features: [
        'Front row reserved seating',
        'Meet & greet with instructors',
        'Complimentary drinks & snacks',
        'Event program + souvenir',
        'Professional event photos',
      ],
      popular: true,
    },
    {
      name: 'Family Pack',
      price: 50,
      description:
        'Perfect for families - includes 4 general admission tickets',
      features: [
        '4 general admission tickets',
        'Family photo opportunity',
        'Kids activity packet',
        'Reserved family seating section',
      ],
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
              alt="Get Your Tickets"
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
            Get Your Tickets
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Secure your spot for the most exciting dance event of the year!
          </p>
        </div>
      </section>

      {/* Event Info */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-purple-700">
              Event Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 mb-2">
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
                <p>March 14, 2026</p>
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
                <p>DeKalb Community Center</p>
                <p>DeKalb, IL</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 mb-2">
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

      {/* Ticket Options */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Choose Your Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2 ${
                  ticket.popular ? 'ring-4 ring-pink-500 ring-opacity-50' : ''
                }`}
              >
                {ticket.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 font-poppins text-purple-700">
                    {ticket.name}
                  </h3>
                  <div className="text-4xl font-bold text-pink-500 mb-4">
                    ${ticket.price}
                    <span className="text-lg text-gray-500 font-normal">
                      /ticket
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{ticket.description}</p>

                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md ${
                      ticket.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    Select Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Sales */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
              Group Sales & Special Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-poppins text-purple-600">
                  Group Discounts
                </h3>
                <p className="text-gray-700 mb-4">
                  Save when you bring a crowd! Groups of 10 or more receive
                  special pricing.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• 10-19 people: 10% off</li>
                  <li>• 20-49 people: 15% off</li>
                  <li>• 50+ people: 20% off</li>
                </ul>
                <Link
                  href="/contact"
                  className="text-purple-600 font-medium hover:text-purple-800 transition duration-300"
                >
                  Contact us for group rates →
                </Link>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-poppins text-pink-500">
                  Early Bird Special
                </h3>
                <p className="text-gray-700 mb-4">
                  Purchase your tickets before February 1st, 2026 and save!
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• General Admission: $12 (save $3)</li>
                  <li>• VIP Experience: $28 (save $7)</li>
                  <li>• Family Pack: $40 (save $10)</li>
                </ul>
                <div className="text-pink-500 font-medium">
                  Limited time offer!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Tickets are selling fast. Secure your spot for this one-of-a-kind
            charitable dance event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
              Buy Tickets Now
            </button>
            <Link
              href="/schedule"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              View Event Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
