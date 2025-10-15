'use client'

import Link from 'next/link'
import Script from 'next/script'
import { useEffect } from 'react'

// Type declaration for PayPal SDK
declare global {
  interface Window {
    paypal?: {
      HostedButtons: (config: { hostedButtonId: string }) => {
        render: (selector: string) => void
      }
    }
  }
}

export default function DonatePage() {
  useEffect(() => {
    // Initialize PayPal when component mounts or when PayPal becomes available
    const initPayPal = () => {
      const container = document.getElementById(
        'paypal-container-HXAJUF5JSEGDL'
      )

      if (window.paypal && container) {
        // Clear any existing buttons first
        container.innerHTML = ''

        window.paypal
          .HostedButtons({
            hostedButtonId: 'HXAJUF5JSEGDL',
          })
          .render('#paypal-container-HXAJUF5JSEGDL')

        console.log('PayPal buttons initialized')
      } else {
        // Retry if not ready yet
        setTimeout(initPayPal, 100)
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initPayPal, 200)

    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
      {/* CSS to center PayPal content */}
      <style>{`
        #paypal-container-HXAJUF5JSEGDL {
          text-align: center;
        }
        #paypal-container-HXAJUF5JSEGDL iframe {
          margin: 0 auto;
          display: block;
        }
      `}</style>

      {/* Part 1: PayPal SDK */}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAslsIIJZsg08ryGpuvgmeDDB0fsUmSFvZkjoWnlSulhirZlGWjiuaR0mhGZirf6ouNVGzK9RvMWxz2g0&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="afterInteractive"
      />

      <div className="min-h-screen">
        {/* Donation Impact */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              Your Impact
            </h2>
            <p className="section-subtitle">
              100% of proceeds go directly to local charities - no
              administrative fees
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-purple-50 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  $25
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">
                  Feeds a Family
                </h3>
                <p className="text-gray-600">
                  Provides a week&apos;s worth of groceries for a family of four
                  through our food pantry partners.
                </p>
              </div>

              <div className="text-center p-6 bg-pink-50 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-pink-500 mb-2">$50</div>
                <h3 className="text-xl font-bold mb-2 font-poppins">
                  Youth Dance Classes
                </h3>
                <p className="text-gray-600">
                  Sponsors one month of dance classes for a child in our
                  after-school program.
                </p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-xl shadow-md">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  $100
                </div>
                <h3 className="text-xl font-bold mb-2 font-poppins">
                  Senior Activities
                </h3>
                <p className="text-gray-600">
                  Funds recreational activities and wellness programs for
                  seniors for one week.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
                Make a Donation
              </h2>

              <div className="bg-purple-50 p-8 rounded-xl shadow-md">
                {/* Part 3: PayPal Container with Flexbox Centering */}
                <div className="flex justify-center items-center">
                  <div
                    id="paypal-container-HXAJUF5JSEGDL"
                    className="w-full max-w-md flex-none"
                  ></div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Secure donation processing powered by PayPal. Your donation is
                  tax-deductible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Thank You for Your Support!
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Your generosity helps us build a stronger, more vibrant community
              through the power of dance and giving.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-md"
              >
                Learn More About Our Mission
              </Link>
              <Link
                href="/tickets"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300 transform hover:scale-105"
              >
                Get Event Tickets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
