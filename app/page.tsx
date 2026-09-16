"use client"

import { useEffect, useState } from "react"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const redZoneDeep = 1200
  const progress = Math.min(scrollY / redZoneDeep, 1)
  const backgroundColor = `hsl(${280 - progress * 90} 55% 40%)`
  const squareColor = `hsl(${0 + progress * 55} 72% 52%)`

  return (
    <main
      className="min-h-[220vh] transition-colors duration-500 ease-out"
      style={{ backgroundColor }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center p-6">
        <div
          className="flex h-[520px] w-[520px] max-h-[80vw] max-w-[80vw] items-center justify-center shadow-2xl transition-colors duration-500 ease-out"
          style={{ backgroundColor: squareColor }}
        >
          <p
            className="px-10 text-center text-xl leading-relaxed text-white"
            style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </main>
  )
}
