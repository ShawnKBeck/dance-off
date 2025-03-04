import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Rules data
  const rules = [
    {
      number: 1,
      title: "Serve or Be Served",
      description: "Teams challenge each other to dance battles. The challenging team performs first, setting the bar for the competition.",
    },
    {
      number: 2,
      title: "You Got Served",
      description: "Once challenged, the receiving team must accept or concede defeat. There's no backing down from a challenge!",
    },
    {
      number: 3,
      title: "Dance Instructor",
      description: "Each team receives coaching from a professional Dance Dimensions instructor who will help choreograph and perfect their routine.",
    },
    {
      number: 4,
      title: "Judges Decide",
      description: "Impartial judges declare the winner based on style, originality, and attitude. Their decision is final and binding.",
    },
    {
      number: 5,
      title: "Bring It!",
      description: "Show up with your best moves and attitude! This is your chance to prove you've got what it takes to dominate the dance floor.",
    },
  ];

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
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 via-purple-600/60 to-indigo-700/50"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 drop-shadow-lg" style={{ color: '#1b365f' }}>
            You&apos;ve Been <span className="text-pink-500 drop-shadow-lg">Served!</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8 drop-shadow-md">
            A charitable competitive dance-off event raising money for local charities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets" className="btn-primary">
              Buy Tickets
            </Link>
            <Link href="/donate" className="btn-secondary bg-white/90">
              Donate Now
            </Link>
            <Link href="/about" className="btn-tertiary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Bringing the community together through dance and charity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m-9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Community Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All proceeds from the event go directly to local charities in DeKalb County, making a real difference in our community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-pink-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Entertainment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience an unforgettable evening of dance battles, professional showcases, and interactive audience participation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Local Talent</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Showcasing the incredible dance talent in our community, from beginners to professionals, all united for a common cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Preview Section */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            How It Works
          </h2>
          <p className="section-subtitle">
            The official rules of our dance-off competition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rules.map((rule) => (
              <div key={rule.number} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {rule.number}
                  </div>
                  <h3 className="text-xl font-bold font-poppins">{rule.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{rule.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/rules" className="btn-secondary inline-block">
              Learn More About the Rules
            </Link>
          </div>
        </div>
      </section>

      {/* Event Info & Countdown */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-8 md:p-12 text-white shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 font-poppins">Mark Your Calendar!</h2>
                <p className="text-lg mb-6">
                  Join us for an unforgettable night of dance, fun, and charity at the historic Egyptian Theatre in DeKalb.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-yellow-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Date & Time</h4>
                      <p>October 15, 2025 • 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-yellow-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p>Egyptian Theatre, DeKalb, IL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 font-poppins">Countdown to the Event</h3>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">224</div>
                    <div className="text-sm">Days</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">16</div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">43</div>
                    <div className="text-sm">Minutes</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm">Seconds</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/tickets" className="btn-tertiary bg-white text-purple-600 hover:bg-yellow-100">
                    Get Your Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Sponsors</h2>
          <p className="section-subtitle">
            Thank you to the generous organizations making this event possible
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500">Sponsor Logo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500">Sponsor Logo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500">Sponsor Logo</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-40 h-40 flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500">Sponsor Logo</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Become a Sponsor</h3>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Interested in supporting our event and promoting your business to the community? Contact us to learn about our sponsorship packages.
            </p>
            <Link href="/contact" className="btn-secondary inline-block">
              Contact Us About Sponsorship
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}