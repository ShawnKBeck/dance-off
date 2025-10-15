import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Simple Header */}
      <section className="bg-gradient-to-r from-[#1b365f] to-cyan-600 py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-3 md:mb-4">
            About the Event
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto px-4">
            A charitable dance competition with a mission to make a difference
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 font-poppins text-[#1b365f]">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg mb-3 md:mb-4">
                &quot;You Got Served&quot; is more than just a dance
                competition—it&apos;s a community-driven initiative to raise
                funds and awareness for local causes that matter in DeKalb
                County.
              </p>
              <p className="text-lg mb-4">
                Through the universal language of dance, we bring together
                people from all walks of life to celebrate artistic expression
                while making a meaningful impact on our community.
              </p>
              <p className="text-lg mb-4">
                100% of the proceeds from ticket sales, donations, and
                sponsorships go directly to supporting local organizations
                making a difference in our community.
              </p>
              <div className="mt-6">
                <Link href="/donate" className="btn-retro-cyan inline-block">
                  Support Our Cause
                </Link>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mission.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Competition Format</h2>
          <p className="section-subtitle">
            An exciting dance-off inspired by the spirit of friendly competition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-cyan-400">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-[#1b365f]">
                The Dance-Off
              </h3>
              <p className="mb-4">
                Teams will compete in head-to-head dance battles, showcasing
                their skills, creativity, and teamwork. Each team will be
                coached by a professional instructor from Dimensions.
              </p>
              <p className="mb-4">
                The competition follows a bracket format, with teams advancing
                based on judges&apos; scores and audience reaction. The winning
                team not only earns bragging rights but also gets to direct a
                portion of the proceeds to their chosen local charity.
              </p>
              <div className="mt-6">
                <Link
                  href="/rules"
                  className="text-cyan-600 font-medium hover:text-cyan-700 transition duration-300 flex items-center"
                >
                  <span>View Official Rules</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-pink-500">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-[#1b365f]">
                Entertainment & Community
              </h3>
              <p className="mb-4">
                Beyond the competition, &quot;You Got Served&quot; offers a full
                evening of entertainment with professional dance showcases, live
                music, and interactive elements that get the whole audience
                involved.
              </p>
              <p className="mb-4">
                This event is designed to bring our community together,
                celebrating the diverse talents of DeKalb County while
                supporting causes that matter. It&apos;s a night of fun,
                inspiration, and positive impact.
              </p>
              <div className="mt-6">
                <Link
                  href="/schedule"
                  className="text-pink-600 font-medium hover:text-pink-700 transition duration-300 flex items-center"
                >
                  <span>View Event Schedule</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Meet Our Hosts</h2>
          <p className="section-subtitle">
            &quot;You Got Served&quot; is proudly hosted by Dimensions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-lg shadow-md border-t-4 border-yellow-400">
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/dance-dimensions.jpg"
                  alt="Dimensions"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-poppins text-[#1b365f]">
                Dimensions
              </h3>
              <p className="mb-4">
                Dimensions is DeKalb&apos;s premier dance studio, offering
                instruction in various styles for all ages and skill levels.
                With a team of professional instructors and a passion for
                artistic expression, they bring technical expertise and creative
                vision to &quot;You Got Served.&quot;
              </p>
              <p className="mb-4">
                Their instructors will coach each competing team, sharing their
                knowledge and helping participants shine on stage while
                fostering a spirit of friendly competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Be Part of Something Special
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you&apos;re competing, cheering, or supporting, join us for
            an unforgettable night that celebrates dance and community.
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
