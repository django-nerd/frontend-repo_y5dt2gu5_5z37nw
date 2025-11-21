export default function Showcase(){
  const features = [
    'Vehicle Marketplace (cars + parts)',
    'AI VIN Decoder (instant vehicle history)',
    'Maintenance Assistant (24/7 AI support)',
    'Price Estimator (real market data)',
    'Events Platform (ticketing + judging)',
    'BMW Clubs (500+ communities)',
    'Forums & Messaging (real-time chat)',
    'Garage Tracker (expenses + mods)',
    'Business Suite (analytics + tools)',
    'Gamification (XP, badges, leaderboards)'
  ]
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0a0a0f] to-[#0b0b12] text-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-extrabold">One Platform. Everything BMW.</h3>
          <ul className="mt-6 space-y-3 text-white/80">
            {features.map((f,i)=> (
              <li key={i} className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#1C69D4]" />{f}</li>
            ))}
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {['Marketplace interface','AI Maintenance Chat','Events Calendar','Clubs Directory','Business Suite Dashboard'].map((t,i)=> (
            <div key={i} className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex items-end text-xs text-white/70">
              <div className="w-full h-full bg-gradient-to-tr from-[#1C69D4]/20 to-[#8E44AD]/20 rounded" />
              <span className="absolute m-4 px-2 py-1 rounded bg-black/40 border border-white/10">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
