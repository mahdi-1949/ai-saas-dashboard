"use client"

import { useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-full border border-white/10 px-4 py-2 text-sm"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  )
}
