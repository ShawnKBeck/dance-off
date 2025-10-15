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
          width: 400px;
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
        {/* Simple Header */}
        <section className="bg-gradient-to-r from-[#1b365f] to-cyan-600 py-10 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins mb-3 md:mb-4">
              Support Our Cause
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-cyan-100 max-w-3xl mx-auto px-4">
              Make a tax-deductible donation to support local DeKalb County
              charities
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 font-poppins text-center text-[#1b365f]">
                Make a Donation
              </h2>

              <div className="bg-gradient-to-br from-cyan-50 to-white p-5 sm:p-6 md:p-8 rounded-xl shadow-md border-t-4 border-cyan-400">
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
        <section className="py-12 md:py-16 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-poppins">
              Thank You for Your Support!
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8 px-4">
              Your generosity helps us build a stronger, more vibrant community
              through the power of dance and giving.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Link href="/about" className="btn-retro-cyan">
                Learn More About Our Mission
              </Link>
              <Link href="/tickets" className="btn-retro-pink">
                Get Event Tickets
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
