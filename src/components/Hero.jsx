import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'

function useCounter(target = 1000, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start = 0
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = Math.floor(start + (target - start) * eased)
      setValue(next)
      if (progress < 1) requestAnimationFrame(tick)
    }
    const r = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(r)
  }, [target, duration])
  return value
}

export default function Hero() {
  const listings = useCounter(10247, 2000)
  const members = useCounter(52893, 2200)
  const volume = useCounter(2300, 2400) // Represent €2.3B as 2.3k (we'll format)

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(28,105,212,0.25),transparent),radial-gradient(1000px_600px_at_80%_110%,rgba(142,68,173,0.18),transparent)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0b0b12] to-[#14142a]" />
      {/* Subtle animated gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 70% 20%, rgba(28,105,212,0.25), transparent 35%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#1C69D4] animate-pulse" />
            <span className="text-xs text-white/80">Trust-first BMW marketplace</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="block">The Ultimate BMW Marketplace</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70 max-w-xl">
            Buy, Sell, Connect. Trust-First Platform with AI-Powered Tools.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#marketplace" className="rounded-xl bg-[#1C69D4] text-white px-6 py-3 font-semibold shadow-[0_0_40px_-10px_rgba(28,105,212,0.9)] hover:brightness-110 transition">Browse Marketplace</a>
            <a href="#pricing" className="rounded-xl border border-white/20 text-white px-6 py-3 font-semibold backdrop-blur bg-white/5 hover:bg-white/10 transition">View Pricing</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <Stat label="Active Listings" value={listings.toLocaleString()} prefix="" />
            <Stat label="Members" value={members.toLocaleString()} prefix="" />
            <Stat label="Transactions" value={`${(volume/10).toFixed(1)}B€`} prefix="" />
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#1C69D4]/30 bg-[#1C69D4]/10 px-3 py-1.5">
            <span className="text-sm">Commission</span>
            <span className="text-sm font-semibold text-[#1C69D4]">5%</span>
            <span className="ml-2 h-2 w-2 rounded-full bg-[#1C69D4] animate-ping" />
          </div>
        </div>

        <div className="relative h-[520px] sm:h-[620px]">
          {/* Glow backdrop */}
          <div className="absolute -inset-10 bg-gradient-to-t from-[#1C69D4]/30 via-transparent to-transparent blur-2xl" />
          {/* Spline Scene */}
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-black/30">
            <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Floating badges */}
          <Floating label="10,000+ Active Listings" className="left-4 top-6" />
          <Floating label="50,000+ Members" className="right-6 top-1/3" />
          <Floating label="€2B+ Transactions" className="left-10 bottom-24" />
          <Floating label="5% Commission" pulse className="right-8 bottom-10" />
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, prefix }) {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-4">
      <div className="text-2xl font-bold text-white">{prefix}{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  )
}

function Floating({ label, className = '', pulse = false }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className={`select-none rounded-xl bg-white/10 backdrop-blur px-3 py-1.5 text-white text-xs border border-white/15 shadow-2xl ${pulse ? 'ring-2 ring-[#1C69D4]/40 animate-pulse' : ''}`}>
        {label}
      </div>
    </div>
  )
}
