'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SchedulePage() {
  const schedule = [
    {
      time: '6:00 PM',
      event: 'Doors Open & Registration',
      description: 'Check-in for teams and guests, last-minute registration',
    },
    {
      time: '6:30 PM',
      event: 'Opening Ceremony',
      description: 'Welcome and introduction of teams and instructors',
    },
    {
      time: '7:00 PM',
      event: 'Professional Showcase',
      description: 'Dance Dimensions instructors perform opening number',
    },
    {
      time: '7:30 PM',
      event: 'Round 1 - Preliminary Battles',
      description: 'All teams compete in initial dance-off rounds',
    },
    {
      time: '8:30 PM',
      event: 'Intermission',
      description: 'Refreshments and community mingling',
    },
    {
      time: '9:00 PM',
      event: 'Semi-Finals',
      description: 'Top teams advance to semi-final battles',
    },
    {
      time: '9:45 PM',
      event: 'Final Battle',
      description: 'Championship round - winner takes all!',
    },
    {
      time: '10:15 PM',
      event: 'Awards & Closing',
      description: 'Trophy presentation and charity donation announcement',
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
              alt="Event Schedule"
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
            Event Schedule
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md">
            Your complete guide to the night&apos;s festivities
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Night of the Event
          </h2>
          <p className="section-subtitle">
            March 14, 2026 • DeKalb Community Center
          </p>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-center font-bold text-lg">
                      {item.time}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2 font-poppins text-purple-700">
                      {item.event}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
            Important Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 font-poppins text-purple-600">
                For Participants
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Team check-in begins at 6:00 PM</li>
                <li>• Bring comfortable shoes and water</li>
                <li>• Final costume checks at 6:45 PM</li>
                <li>• Teams must be present for opening ceremony</li>
                <li>• Professional photographer will be present</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 font-poppins text-pink-500">
                For Spectators
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Doors open at 6:00 PM</li>
                <li>• Concessions available during intermission</li>
                <li>• Photography encouraged (no flash during performances)</li>
                <li>• Parking available at community center</li>
                <li>• Event ends approximately 10:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Ready for the Big Night?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Don&apos;t miss this incredible evening of dance and community
            spirit!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tickets"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Get Your Tickets
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
