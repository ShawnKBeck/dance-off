import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Rules data
  const rules = [
    {
      number: 1,
      title: "You Are Served",
      description: "When a team challenges you to a dance battle, you have officially been 'served'. This is the formal initiation of a dance challenge that cannot be ignored.",
    },
    {
      number: 2,
      title: "It's On",
      description: "Once served, the battle is automatically 'on'. There's no backing down from a challenge - refusing to accept means automatic defeat and public shame.",
    },
    {
      number: 3,
      title: "Dance Instructor",
      description: "Each team receives coaching from a professional Dance Dimensions instructor who will help choreograph and perfect their routine.",
    },
    {
      number: 4,
      title: "Bring It",
      description: "The challenged team must 'bring it' with their best dance moves and attitude. This is your chance to respond and prove your dance superiority.",
    },
    {
      number: 5,
      title: "Judges Decide",
      description: "Impartial judges declare the winner based on style, originality, and attitude. Their decision is final and binding.",
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
            You <span className="text-pink-500 drop-shadow-lg">Got</span> Served!
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
            A charitable competitive dance-off event raising money for local charities
          </p>
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

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-purple-700">
            Our Mission
          </h2>
          <p className="section-subtitle">
            Bringing the community together through dance and charity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#7c3aed">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9m-9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Community Impact</h3>
              <p className="text-gray-600">
                All proceeds from the event go directly to local charities in DeKalb County, making a real difference in our community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-pink-500 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#ec4899">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Entertainment</h3>
              <p className="text-gray-600">
                Experience an unforgettable evening of dance battles, professional showcases, and interactive audience participation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="text-purple-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#7c3aed">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 font-poppins">Local Talent</h3>
              <p className="text-gray-600">
                Showcasing the incredible dance talent in our community, from beginners to professionals, all united for a common cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Preview Section */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-purple-700 bg-clip-text">
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
                <p className="text-gray-600">{rule.description}</p>
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
                  Join us for an unforgettable night of dance, fun, and charity at our event in DeKalb.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="text-yellow-300 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7c3aed">
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#7c3aed">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Location</h4>
                      <p>DeKalb Community Center, DeKalb, IL</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2 font-poppins">Countdown to the Event</h3>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">
                      224
                    </div>
                    <div className="text-sm">Days</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">
                      16
                    </div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">
                      43
                    </div>
                    <div className="text-sm">Minutes</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-3xl font-bold">
                      12
                    </div>
                    <div className="text-sm">Seconds</div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/tickets" className="bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Get Served?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you want to compete, volunteer, or just enjoy the show, there&apos;s a place for you at our dance-off event!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
              Register Your Team
            </Link>
            <Link href="/tickets" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105">
              Get Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}