"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "instant" instead of "smooth" to avoid visual issues
    })
  }, [pathname])

  return null // This component doesn't render anything
}

