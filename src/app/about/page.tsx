import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-purple-100">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/about-hero.jpg"
              alt="About the Event"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/70 via-purple-600/60 to-indigo-700/50"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4 drop-shadow-lg text-shadow-lg">
            About the Event
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md text-shadow">
            A charitable dance competition with a mission to make a difference
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-poppins text-purple-600">Our Mission</h2>
              <p className="text-lg mb-4">
                &quot;You Got Served&quot; is more than just a dance competition—it&apos;s a community-driven initiative to raise funds and awareness for local charities in DeKalb County.
              </p>
              <p className="text-lg mb-4">
                Through the universal language of dance, we bring together people from all walks of life to celebrate artistic expression while making a meaningful impact on our community.
              </p>
              <p className="text-lg mb-4">
                100% of the proceeds from ticket sales, donations, and sponsorships go directly to supporting local charities that provide essential services to those in need.
              </p>
              <div className="mt-6">
                <Link href="/donate" className="btn-primary inline-block">
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
      <section className="section-padding bg-purple-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Competition Format</h2>
          <p className="section-subtitle">
            An exciting dance-off inspired by the spirit of friendly competition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-purple-600">The Dance-Off</h3>
              <p className="mb-4">
                Teams will compete in head-to-head dance battles, showcasing their skills, creativity, and teamwork. Each team will be coached by a professional instructor from Dance Dimensions.
              </p>
              <p className="mb-4">
                The competition follows a bracket format, with teams advancing based on judges&apos; scores and audience reaction. The winning team not only earns bragging rights but also gets to direct a portion of the proceeds to their chosen local charity.
              </p>
              <div className="mt-6">
                <Link href="/rules" className="text-purple-600 font-medium hover:text-purple-800 transition duration-300 flex items-center">
                  <span>View Official Rules</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 font-poppins text-pink-500">Entertainment & Community</h3>
              <p className="mb-4">
                Beyond the competition, "You Got Served" offers a full evening of entertainment with professional dance showcases, live music, and interactive elements that get the whole audience involved.
              </p>
              <p className="mb-4">
                This event is designed to bring our community together, celebrating the diverse talents of DeKalb County while supporting causes that matter. It&apos;s a night of fun, inspiration, and positive impact.
              </p>
              <div className="mt-6">
                <Link href="/schedule" className="text-pink-500 font-medium hover:text-pink-700 transition duration-300 flex items-center">
                  <span>View Event Schedule</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Meet Our Hosts</h2>
          <p className="section-subtitle">
            "You Got Served" is proudly hosted by Dance Dimensions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-purple-50 dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/dance-dimensions.jpg"
                  alt="Dance Dimensions"
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-poppins text-purple-600">Dance Dimensions</h3>
              <p className="mb-4">
                Dance Dimensions is DeKalb&apos;s premier dance studio, offering instruction in various styles for all ages and skill levels. With a team of professional instructors and a passion for artistic expression, they bring technical expertise and creative vision to "You Got Served."
              </p>
              <p className="mb-4">
                Their instructors will coach each competing team, sharing their knowledge and helping participants shine on stage while fostering a spirit of friendly competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Be Part of Something Special</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Whether you&apos;re competing, cheering, or supporting, join us for an unforgettable night that celebrates dance and community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tickets" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
              Get Your Tickets
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
