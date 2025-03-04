import Image from "next/image";
import Link from "next/link";

export default function RulesPage() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-purple-100">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/rules-hero.jpg"
              alt="Dance Competition Rules"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 via-purple-600/60 to-indigo-700/50"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4 drop-shadow-lg text-shadow-lg">
            Bring It!
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md text-shadow">
            Official Dance-Off Rules Inspired by South Park
          </p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              The Official Rules
            </h2>
            <p className="section-subtitle">
              These are the sacred laws of the dance-off. Follow them with honor and respect!
            </p>

            <div className="mt-12 space-y-12">
              {rules.map((rule) => (
                <div key={rule.number} className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 bg-purple-50 dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 font-poppins flex items-center">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        {rule.number}
                      </span>
                      {rule.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded-lg">
              <h3 className="text-xl font-bold mb-2 font-poppins text-purple-700 dark:text-purple-400">Remember</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This competition is all about having fun while supporting a great cause. Bring your best moves, your team spirit, and your respect for fellow dancers. May the best team win!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* South Park Inspiration */}
      <section className="section-padding bg-purple-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-poppins text-center">The South Park Inspiration</h2>
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                Our "You Got Served" event pays homage to the iconic South Park episode where Stan, Kyle, Kenny, and Cartman find themselves in an unexpected dance battle after being "served" by a rival dance crew.
              </p>
              <p className="text-lg mb-4">
                While our event takes inspiration from this comedic portrayal, we've transformed it into a positive community experience that celebrates dance as an art form and a way to bring people together for a good cause.
              </p>
              <p className="text-lg">
                Don't worry - no actual "serving" or dance intimidation is required! Just bring your enthusiasm, support your favorite team, and enjoy the show!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Format & Judging */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins text-purple-600">Competition Format</h2>
              <div className="bg-purple-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Teams will be arranged in a tournament bracket.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Each battle consists of two teams performing back-to-back.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Performances are limited to 3 minutes per team.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">Winners advance to the next round until a champion is crowned.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg">All music will be family-friendly and provided by our DJ.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins text-pink-500">Judging Criteria</h2>
              <div className="bg-pink-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg"><strong>Style (30%):</strong> Creativity, originality, and uniqueness of choreography.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg"><strong>Technique (25%):</strong> Execution, precision, and skill level.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg"><strong>Attitude (20%):</strong> Energy, confidence, and stage presence.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg"><strong>Teamwork (15%):</strong> Synchronization and cohesiveness as a group.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg"><strong>Audience Response (10%):</strong> Crowd engagement and reaction.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Get Served?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join us for an epic night of dance battles and help support local charities in DeKalb County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/teams" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
              Meet The Teams
            </Link>
            <Link href="/tickets" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105">
              Get Your Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
