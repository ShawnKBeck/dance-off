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
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        #paypal-container-HXAJUF5JSEGDL > * {
          flex: 0 0 auto;
          width: 390px;
          max-width: 100%;
          text-align: center;
        }
        #paypal-container-HXAJUF5JSEGDL iframe {
          writing-mode: horizontal-tb !important;
          text-align: center !important;
        }
      `}</style>

      {/* Part 1: PayPal SDK */}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=BAAslsIIJZsg08ryGpuvgmeDDB0fsUmSFvZkjoWnlSulhirZlGWjiuaR0mhGZirf6ouNVGzK9RvMWxz2g0&components=hosted-buttons&enable-funding=venmo&currency=USD"
        strategy="afterInteractive"
      />

      <div className="min-h-screen">
        {/* Donation Form */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 font-poppins text-center text-purple-700">
                Make a Donation
              </h2>

              <div className="bg-purple-50 p-8 rounded-xl shadow-md">
                {/* PayPal Container */}
                <div id="paypal-container-HXAJUF5JSEGDL"></div>

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
