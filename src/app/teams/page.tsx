import Image from 'next/image'
import Link from 'next/link'

export default function TeamsPage() {
  // Sample instructors data - this would typically come from a CMS or API
  const instructors = [
    {
      id: 1,
      name: 'Alicia Rivera',
      specialty: 'Hip Hop & Contemporary',
      bio: 'With over 10 years of professional experience, Alicia brings energy and innovation to every performance. She has choreographed for music videos and national dance competitions.',
      image: '/images/instructor-1.jpg',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      specialty: 'Breaking & Street Styles',
      bio: "Marcus started breaking at age 12 and has since become one of the most respected B-boys in the Midwest. He's competed internationally and brings authentic street style to his coaching.",
      image: '/images/instructor-2.jpg',
    },
    {
      id: 3,
      name: 'Sophie Chen',
      specialty: 'Ballet & Jazz',
      bio: 'Classically trained at Juilliard, Sophie combines technical precision with creative expression. Her choreography seamlessly blends traditional and modern elements.',
      image: '/images/instructor-3.jpg',
    },
    {
      id: 4,
      name: 'Darnell Washington',
      specialty: 'Urban & Commercial',
      bio: 'Darnell has danced for major recording artists and brings industry experience to his teaching. His dynamic style and attention to detail help teams stand out on stage.',
      image: '/images/instructor-4.jpg',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Team Registration Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Register Your Team
          </h2>
          <p className="section-subtitle">
            Ready to get served? Sign up your team and represent your favorite
            non-profit!
          </p>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl shadow-lg border border-purple-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white text-center">
                <h3 className="text-2xl font-bold font-poppins mb-2">
                  Team Application
                </h3>
                <p className="text-purple-100">
                  Fill out the form below and we&apos;ll reach out with more
                  details!
                </p>
              </div>

              <form className="p-8 space-y-6">
                {/* Number of Dancers */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    How Many Dancers? *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200">
                    <option value="">Select number of dancers</option>
                    {Array.from({ length: 16 }, (_, i) => i + 5).map((num) => (
                      <option key={num} value={num}>
                        {num} dancers
                      </option>
                    ))}
                  </select>
                </div>

                {/* Non-Profit Organization */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    What Non-Profit Organization do you want to represent? *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="Enter the non-profit organization name"
                  />
                </div>

                {/* Theme/Music Type */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Theme/Music Type *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                    placeholder="e.g., Hip Hop, Pop, R&B, Latin, etc."
                  />
                </div>

                {/* Contact Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Email and Location Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                {/* Important Notice */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-bold text-purple-800">
                        What happens next?
                      </h4>
                      <p className="text-sm text-purple-700 mt-1">
                        After you submit this form, someone from our team will
                        reach out to you soon with more details about the
                        competition, practice schedules, and next steps.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 px-12 rounded-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Team Application
                  </button>
                </div>

                {/* Required Fields Note */}
                <p className="text-sm text-gray-500 text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="section-padding bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Meet Our Instructors
          </h2>
          <p className="section-subtitle">
            Professional dancers from Dimensions who will coach our competing
            teams
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 font-poppins">
                    {instructor.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {instructor.specialty}
                  </p>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Dance Styles</h2>
          <p className="section-subtitle">
            Our competition embraces a wide variety of dance styles
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Hip Hop', color: 'bg-blue-500' },
              { name: 'Contemporary', color: 'bg-purple-500' },
              { name: 'Breaking', color: 'bg-red-500' },
              { name: 'Jazz', color: 'bg-yellow-500' },
              { name: 'Ballet', color: 'bg-pink-500' },
              { name: 'Street', color: 'bg-green-500' },
              { name: 'Latin', color: 'bg-orange-500' },
              { name: 'Fusion', color: 'bg-indigo-500' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
            Want to Participate?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Interested in forming a team or volunteering for the event? Get in
            touch with us!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
            >
              Contact Us
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
