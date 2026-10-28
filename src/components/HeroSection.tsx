'use client'

import { basePath } from '@/data/society'

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={`${basePath}/images/cover.png`}
        alt=""
        className="w-full h-auto block"
      />
    </section>
  )
}
