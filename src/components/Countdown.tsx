'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the event date to April 11, 2026 at 7:00 PM
    const eventDate = new Date('2026-04-11T19:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-2 mt-4">
      <div className="bg-white/20 rounded-lg p-3">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="bg-white/20 rounded-lg p-3">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="bg-white/20 rounded-lg p-3">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="bg-white/20 rounded-lg p-3">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
  )
}

export default Countdown
