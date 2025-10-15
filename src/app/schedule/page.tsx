'use client'

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
      arrival: 'from-cyan-400 to-cyan-500',
      opening: 'from-[#1b365f] to-cyan-600',
      competition: 'from-pink-500 to-pink-600',
      break: 'from-yellow-400 to-yellow-500',
      finale: 'from-pink-600 to-pink-700',
      celebration: 'from-yellow-400 to-yellow-500',
    }
    return styles[phase as keyof typeof styles] || 'from-[#1b365f] to-cyan-600'
  }

  const getPhaseBorder = (phase: string) => {
    const borders = {
      arrival: 'border-l-4 border-cyan-400',
      opening: 'border-l-4 border-[#1b365f]',
      competition: 'border-l-4 border-pink-500',
      break: 'border-l-4 border-yellow-400',
      finale: 'border-l-4 border-pink-600',
      celebration: 'border-l-4 border-yellow-400',
    }
    return (
      borders[phase as keyof typeof borders] || 'border-l-4 border-cyan-400'
    )
  }

  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gradient-to-r from-[#1b365f] to-cyan-600 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Event Schedule
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Your complete guide to the night&apos;s festivities
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Night of the Event</h2>
          <p className="section-subtitle">April 11, 2026 • Egyptian Theatre</p>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${getPhaseBorder(
                    item.phase
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
                    <div className="absolute left-6 bottom-0 w-0.5 h-6 bg-gradient-to-b from-cyan-300 to-transparent transform translate-y-full"></div>
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
                            ? 'bg-cyan-100 text-cyan-700'
                            : item.phase === 'opening'
                            ? 'bg-[#1b365f]/10 text-[#1b365f]'
                            : item.phase === 'competition'
                            ? 'bg-pink-100 text-pink-700'
                            : item.phase === 'break'
                            ? 'bg-yellow-100 text-[#1b365f]'
                            : item.phase === 'finale'
                            ? 'bg-pink-100 text-pink-700'
                            : 'bg-yellow-100 text-[#1b365f]'
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
                    <h3 className="text-2xl font-bold mb-3 font-poppins text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
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
      <section className="section-padding bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-[#1b365f]">
            Important Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-cyan-100">
              <h3 className="text-xl font-bold mb-4 font-poppins text-cyan-600 flex items-center">
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
      <section className="py-16 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Ready for the Big Night?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Don&apos;t miss this incredible evening of dance and community
            spirit!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets" className="btn-retro-pink">
              Get Your Tickets
            </Link>
            <Link href="/contact" className="btn-retro-yellow">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
