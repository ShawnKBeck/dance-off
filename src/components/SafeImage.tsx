'use client'

import Image from 'next/image'
import { useState } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  className?: string
  width?: number
  height?: number
}

const SafeImage = ({
  src,
  alt,
  fill,
  priority,
  className,
  width,
  height,
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center ${className}`}
      >
        <div className="text-center text-purple-600 opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      className={className}
      width={width}
      height={height}
      onError={() => setHasError(true)}
    />
  )
}

export default SafeImage
