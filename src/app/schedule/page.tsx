'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SchedulePage() {
  const schedule = [
    {
      time: '6:00 - 6:30 PM',
      event: 'Doors Open & Registration',
      description: 'Check-in for teams and guests, mingle time',
      phase: 'arrival',
      intensity: 'low',
    },
    {
      time: '6:30 - 7:00 PM',
      event: 'Opening Ceremony',
      description:
        'Performance from Dimensions Dance Academy instructors, team introductions with instructors, and judge introductions',
      phase: 'opening',
      intensity: 'medium',
    },
    {
      time: '7:00 - 7:45 PM',
      event: 'Round 1',
      description:
        '10 teams compete with 2-3 minute routines, direct feedback from judges',
      phase: 'competition',
      intensity: 'high',
    },
    {
      time: '7:45 - 8:00 PM',
      event: 'Intermission',
      description: 'Refreshments and community mingling',
      phase: 'break',
      intensity: 'low',
    },
    {
      time: '8:00 - 8:30 PM',
      event: 'Semi-Finals',
      description: 'Top teams advance to semi-final battles',
      phase: 'competition',
      intensity: 'high',
    },
    {
      time: '8:30 - 8:45 PM',
      event: 'Final Battle',
      description: 'Championship round - winner takes all!',
      phase: 'finale',
      intensity: 'extreme',
    },
    {
      time: '8:45 - 9:00 PM',
      event: 'Awards & Closing',
      description: 'Trophy presentation and charity donation announcement',
      phase: 'celebration',
      intensity: 'medium',
    },
  ]

  const getPhaseStyles = (phase: string) => {
    const styles = {
      arrival: 'from-blue-500 to-teal-500',
      opening: 'from-purple-600 to-indigo-600',
      competition: 'from-red-500 to-orange-500',
      break: 'from-green-500 to-emerald-500',
      finale: 'from-yellow-400 to-red-600',
      celebration: 'from-pink-500 to-purple-600',
    }
    return styles[phase as keyof typeof styles] || 'from-purple-600 to-pink-500'
  }

  const getIntensityBorder = (intensity: string) => {
    const borders = {
      low: 'border-l-4 border-blue-400',
      medium: 'border-l-4 border-yellow-400',
      high: 'border-l-4 border-orange-500',
      extreme: 'border-l-4 border-red-500',
    }
    return (
      borders[intensity as keyof typeof borders] ||
      'border-l-4 border-purple-400'
    )
  }

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
          <p className="section-subtitle">April 11, 2026 • Egyptian Theatre</p>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${getIntensityBorder(
                    item.intensity
                  )} overflow-hidden group`}
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${getPhaseStyles(
                      item.phase
                    )} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>

                  {/* Timeline connector */}
                  {index < schedule.length - 1 && (
                    <div className="absolute left-6 bottom-0 w-0.5 h-6 bg-gradient-to-b from-purple-300 to-transparent transform translate-y-full"></div>
                  )}

                  <div className="md:w-1/3 relative z-10">
                    <div
                      className={`bg-gradient-to-r ${getPhaseStyles(
                        item.phase
                      )} text-white px-4 py-3 rounded-lg text-center font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105`}
                    >
                      {item.time}
                    </div>
                    <div className="mt-3 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                          item.phase === 'arrival'
                            ? 'bg-blue-100 text-blue-700'
                            : item.phase === 'opening'
                            ? 'bg-purple-100 text-purple-700'
                            : item.phase === 'competition'
                            ? 'bg-orange-100 text-orange-700'
                            : item.phase === 'break'
                            ? 'bg-green-100 text-green-700'
                            : item.phase === 'finale'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-pink-100 text-pink-700'
                        }`}
                      >
                        {item.phase === 'arrival'
                          ? 'Welcome'
                          : item.phase === 'opening'
                          ? 'Ceremony'
                          : item.phase === 'competition'
                          ? 'Battle'
                          : item.phase === 'break'
                          ? 'Social'
                          : item.phase === 'finale'
                          ? 'Championship'
                          : 'Celebration'}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-2/3 relative z-10">
                    <h3 className="text-2xl font-bold mb-3 font-poppins text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                      {item.event}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
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
            <div className="bg-white p-6 rounded-lg shadow-md border border-purple-100">
              <h3 className="text-xl font-bold mb-4 font-poppins text-purple-600 flex items-center">
                🕺💃 For Participants
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 🏁 Team check-in begins at 6:00 PM</li>
                <li>• 👟💧 Bring comfortable shoes and water</li>
                <li>• 👗✨ Final costume checks at 6:45 PM</li>
                <li>• 🎭 Teams must be present for opening ceremony</li>
                <li>• 📸 Professional photographer will be present</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
              <h3 className="text-xl font-bold mb-4 font-poppins text-pink-500 flex items-center">
                🎊👀 For Spectators
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 🚪 Doors open at 6:00 PM</li>
                <li>• 🍿🥤 Concessions available during intermission</li>
                <li>
                  • 📱✨ Photography encouraged (no flash during performances)
                </li>
                <li>• 🅿️ Parking available at community center</li>
                <li>• ⏰ Event ends at 9:00 PM</li>
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
