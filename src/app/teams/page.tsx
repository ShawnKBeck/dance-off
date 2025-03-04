import Image from "next/image";
import Link from "next/link";

export default function TeamsPage() {
  // Sample instructors data - this would typically come from a CMS or API
  const instructors = [
    {
      id: 1,
      name: "Alicia Rivera",
      specialty: "Hip Hop & Contemporary",
      bio: "With over 10 years of professional experience, Alicia brings energy and innovation to every performance. She has choreographed for music videos and national dance competitions.",
      image: "/images/instructor-1.jpg",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      specialty: "Breaking & Street Styles",
      bio: "Marcus started breaking at age 12 and has since become one of the most respected B-boys in the Midwest. He's competed internationally and brings authentic street style to his coaching.",
      image: "/images/instructor-2.jpg",
    },
    {
      id: 3,
      name: "Sophie Chen",
      specialty: "Ballet & Jazz",
      bio: "Classically trained at Juilliard, Sophie combines technical precision with creative expression. Her choreography seamlessly blends traditional and modern elements.",
      image: "/images/instructor-3.jpg",
    },
    {
      id: 4,
      name: "Darnell Washington",
      specialty: "Urban & Commercial",
      bio: "Darnell has danced for major recording artists and brings industry experience to his teaching. His dynamic style and attention to detail help teams stand out on stage.",
      image: "/images/instructor-4.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/teams-hero.jpg"
              alt="Teams & Instructors"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4 drop-shadow-lg text-shadow-lg">
            Teams & Instructors
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow-md text-shadow">
            Meet the talented dancers and coaches who bring the competition to life
          </p>
        </div>
      </section>

      {/* Teams Section - Coming Soon */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Competing Teams
          </h2>
          <p className="section-subtitle">
            Check back soon to discover who&apos;ll step up and get served!
          </p>

          <div className="max-w-3xl mx-auto mt-12 p-8 bg-purple-50 dark:bg-slate-800 rounded-xl shadow-md text-center">
            <div className="text-purple-600 dark:text-purple-400 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">Team Registration Coming Soon</h3>
            <p className="text-lg mb-6">
              We&apos;re currently accepting team applications for this exciting event. Teams will be announced here once registration closes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Inquire About Registering
              </Link>
              <button className="btn-secondary">
                Get Notified When Teams Are Announced
              </button>
            </div>
          </div>

          {/* Placeholder for team cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-3 w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-1/2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-full"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-purple-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Meet Our Instructors
          </h2>
          <p className="section-subtitle">
            Professional dancers from Dance Dimensions who will coach our competing teams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 font-poppins">{instructor.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{instructor.specialty}</p>
                  <p className="text-gray-600 dark:text-gray-300">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="section-padding bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Dance Styles</h2>
          <p className="section-subtitle">
            Our competition embraces a wide variety of dance styles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: "Hip Hop", color: "bg-blue-500" },
              { name: "Contemporary", color: "bg-purple-500" },
              { name: "Breaking", color: "bg-red-500" },
              { name: "Jazz", color: "bg-yellow-500" },
              { name: "Ballet", color: "bg-pink-500" },
              { name: "Street", color: "bg-green-500" },
              { name: "Latin", color: "bg-orange-500" },
              { name: "Fusion", color: "bg-indigo-500" },
            ].map((style, index) => (
              <div 
                key={index} 
                className={`${style.color} rounded-lg p-6 text-white text-center shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1`}
              >
                <h3 className="text-xl font-bold font-poppins">{style.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Want to Participate?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Interested in forming a team or volunteering for the event? Get in touch with us!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md">
              Contact Us
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
