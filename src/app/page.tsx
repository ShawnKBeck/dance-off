'use client'

import Image from 'next/image'
import Link from 'next/link'
import Countdown from '../components/Countdown'
import DanceRulesStackingCards from '../components/DanceRulesStackingCards'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2c4a6e] py-8 md:py-12">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b365f] via-[#2c4a6e] to-[#1b365f]"></div>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 206, 209, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 206, 209, 0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 z-20 w-full">
          <div className="max-w-7xl mx-auto">
            {/* Logo - Top on Mobile */}
            <div className="flex justify-center lg:hidden mb-3">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 drop-shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/ygs.png"
                  alt="You Got Served Logo"
                  fill
                  priority
                  className="object-contain"
                />
                {/* Glow effect behind logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-cyan-400/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Desktop: Logo + Title/Info Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
              {/* Logo - Left Side */}
              <div className="lg:col-span-5 flex justify-end">
                <div className="relative w-96 h-96 drop-shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      maskImage:
                        'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage:
                        'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    <Image
                      src="/images/ygs.png"
                      alt="You Got Served Logo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  {/* Glow effect behind logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-cyan-400/30 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>

              {/* Title & Info - Right Side */}
              <div className="lg:col-span-7 text-left space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="event-date text-yellow-400 drop-shadow-lg">
                    April 11, 2026
                  </span>
                  <br />
                  <span className="text-cyan-300">Egyptian Theatre</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl lg:max-w-none">
                  An unforgettable night where dance meets purpose. All proceeds
                  benefit local DeKalb County charities.
                </p>
              </div>
            </div>

            {/* Mobile: Title & Info */}
            <div className="lg:hidden text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight px-2">
                <span className="event-date text-yellow-400 drop-shadow-lg">
                  April 11, 2026
                </span>
                <br />
                <span className="text-cyan-300">Egyptian Theatre</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-200 max-w-md mx-auto px-4 leading-relaxed">
                An unforgettable night where dance meets purpose. All proceeds
                benefit local DeKalb County charities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-6 md:pt-8 lg:pt-6 px-4">
              <Link
                href="/tickets"
                className="btn-retro-pink text-sm sm:text-base w-full max-w-xs sm:max-w-none sm:w-auto text-center"
              >
                Buy Tickets
              </Link>
              <Link
                href="/donate"
                className="btn-retro-cyan text-sm sm:text-base w-full max-w-xs sm:max-w-none sm:w-auto text-center"
              >
                Donate Now
              </Link>
              <Link
                href="/about"
                className="btn-retro-yellow text-sm sm:text-base w-full max-w-xs sm:max-w-none sm:w-auto text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Desktop only */}
        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="text-cyan-300 text-sm font-semibold mb-2">
            Scroll to explore
          </div>
          <div className="w-6 h-9 border-2 border-cyan-300 rounded-full mx-auto flex justify-center animate-bounce-slow">
            <div className="w-1.5 h-2 bg-cyan-300 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Rules Stacking Cards Section */}
      <DanceRulesStackingCards />

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Bringing the community together through dance and purpose
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-cyan-400">
              <div className="text-cyan-500 text-4xl mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#06b6d4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m-9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-poppins text-[#1b365f]">
                Community Impact
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                All proceeds from the event go directly to local organizations
                making a difference in DeKalb County communities.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-pink-500">
              <div className="text-pink-500 text-4xl mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12"
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-poppins text-[#1b365f]">
                Entertainment
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Experience an unforgettable evening of dance battles,
                professional showcases, and interactive audience participation.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-yellow-400">
              <div className="text-yellow-500 text-4xl mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#eab308"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-poppins text-[#1b365f]">
                Local Talent
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Showcasing the incredible dance talent in our community, from
                beginners to professionals, all united for a common cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info & Countdown */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#1b365f] via-[#2c4a6e] to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-white shadow-2xl border-4 border-cyan-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 font-poppins">
                  Mark Your Calendar!
                </h2>
                <p className="text-base sm:text-lg mb-4 md:mb-6">
                  Join us for an unforgettable night of dance, fun, and
                  community impact at our event in DeKalb.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start">
                    <div className="text-cyan-300 mr-2 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
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
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold">
                        Date & Time
                      </h3>
                      <p className="text-sm sm:text-base">
                        April 11, 2026 • 7:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-cyan-300 mr-2 sm:mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6"
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
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold">
                        Location
                      </h3>
                      <p className="text-sm sm:text-base">
                        Egyptian Theatre, DeKalb, IL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-poppins">
                  Countdown to the Event
                </h3>
                <Countdown />
                <div className="mt-4 md:mt-6">
                  <Link
                    href="/tickets"
                    className="inline-block bg-white text-[#1b365f] font-bold py-2.5 px-5 sm:py-3 sm:px-6 text-sm sm:text-base rounded-lg hover:bg-cyan-50 transition duration-300 transform hover:scale-105 shadow-md border-2 border-cyan-400"
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
      <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 206, 209, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 206, 209, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-poppins drop-shadow-lg">
            Ready to Bring It?
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 drop-shadow-md px-4">
            Got served by another organization? You have two options: Accept the
            challenge and register your team to compete live, or support the
            cause with a donation. Either way, you&apos;re helping our
            community!
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="/register"
              className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-[#1b365f] font-black py-3 px-6 sm:py-4 sm:px-8 md:px-10 text-sm sm:text-base rounded-2xl hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-cyan-300/50"
            >
              Register Your Team
            </Link>
            <Link
              href="/tickets"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-black py-3 px-6 sm:py-4 sm:px-8 md:px-10 text-sm sm:text-base rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
