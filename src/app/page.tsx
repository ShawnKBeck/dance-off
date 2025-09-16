'use client'

import Image from 'next/image'
import Link from 'next/link'
import Countdown from '../components/Countdown'
import DanceRulesStackingCards from '../components/DanceRulesStackingCards'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-purple-100">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-dance.jpg"
              alt="Dance Competition"
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

        <div className="container mx-auto px-4 z-20 text-center">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 drop-shadow-lg"
            style={{ color: '#1b365f' }}
          >
            You <span className="text-pink-500 drop-shadow-lg">Got</span>{' '}
            Served!
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            Dance battles for community impact
          </p>

          {/* Hero Dance Icons */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mb-8">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                <span className="text-5xl md:text-6xl lg:text-7xl animate-dance-moves">
                  💃
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-pink-500 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <span className="text-base md:text-lg">✨</span>
              </div>
            </div>

            <div className="text-4xl md:text-6xl lg:text-7xl text-white/80 font-bold drop-shadow-lg">
              VS
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                <span
                  className="text-5xl md:text-6xl lg:text-7xl animate-dance-moves"
                  style={{ animationDelay: '1.5s' }}
                >
                  🕺🏾
                </span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-purple-500 rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <span className="text-base md:text-lg">⚡</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets" className="btn-primary">
              Buy Tickets
            </Link>
            <Link href="/donate" className="btn-secondary bg-white/90">
              Donate Now
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Rules Stacking Cards Section */}
      <DanceRulesStackingCards />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-purple-700">Our Mission</h2>
          <p className="section-subtitle">
            Bringing the community together through dance and purpose
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#7c3aed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m-9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
                Community Impact
              </h3>
              <p className="text-gray-600">
                All proceeds from the event go directly to local organizations
                making a difference in DeKalb County communities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-pink-500 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ec4899"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
                Entertainment
              </h3>
              <p className="text-gray-600">
                Experience an unforgettable evening of dance battles,
                professional showcases, and interactive audience participation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#7c3aed"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
                Local Talent
              </h3>
              <p className="text-gray-600">
                Showcasing the incredible dance talent in our community, from
                beginners to professionals, all united for a common cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info & Countdown */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-8 md:p-12 text-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
                  Mark Your Calendar!
                </h2>
                <p className="text-lg mb-6">
                  Join us for an unforgettable night of dance, fun, and
                  community impact at our event in DeKalb.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-yellow-300 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#7c3aed"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold">
                        Date & Time
                      </h4>
                      <p>April 11, 2026 • 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-yellow-300 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#7c3aed"
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
                    <div>
                      <h4 className="text-lg md:text-xl font-bold">Location</h4>
                      <p>Egyptian Theatre, DeKalb, IL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-poppins">
                  Countdown to the Event
                </h3>
                <Countdown />
                <div className="mt-6">
                  <Link
                    href="/tickets"
                    className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
                  >
                    Get Your Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-poppins">
            Ready to Bring It?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you want to compete, volunteer, or just enjoy the show,
            there&apos;s a place for you at our dance-off event!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Register Your Team
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
