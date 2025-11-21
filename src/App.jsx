import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#1C69D4] to-[#8E44AD]" />
            <span className="font-semibold tracking-tight">BimmerHub</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#community" className="hover:text-white">Community</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-white/15 bg-white/5">Sign in</button>
            <button className="px-4 py-2 rounded-xl bg-[#1C69D4] text-white font-semibold">Create Free Account</button>
          </div>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Features />
      <Showcase />
      <Pricing />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid md:grid-cols-3 gap-8 text-white/70">
          <div>
            <div className="font-semibold text-white">BimmerHub</div>
            <p className="mt-3 text-sm">BMW, M, and all model designations are trademarks of BMW AG. BimmerHub is an independent enthusiast platform not affiliated with BMW AG.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-white font-medium">Product</div>
              <a href="#" className="block hover:text-white">Features</a>
              <a href="#" className="block hover:text-white">Pricing</a>
              <a href="#" className="block hover:text-white">Events</a>
              <a href="#" className="block hover:text-white">Clubs</a>
            </div>
            <div className="space-y-2">
              <div className="text-white font-medium">Company</div>
              <a href="#" className="block hover:text-white">About</a>
              <a href="#" className="block hover:text-white">Careers</a>
              <a href="#" className="block hover:text-white">Contact</a>
              <a href="#" className="block hover:text-white">Privacy</a>
            </div>
          </div>
          <div className="text-sm">
            <div className="text-white font-medium">Join the community</div>
            <div className="mt-3 flex gap-3">
              {['Instagram','TikTok','YouTube','Twitter','Discord'].map((s)=> (
                <span key={s} className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
