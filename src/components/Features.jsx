export default function Features(){
  const items = [
    {title:'VIN Verification', desc:'Every listing includes VIN checks and title verification for complete transparency', badge:'', icon:'🛡️'},
    {title:'AI-Powered Tools', desc:'Instant price estimates, maintenance schedules, diagnostic help, and market analysis', badge:'PREMIUM', icon:'⚡'},
    {title:'Real-Time Market Data', desc:'Live pricing trends, comparative analysis, and regional market insights', badge:'PREMIUM', icon:'📊'},
    {title:'Thriving Community', desc:'Join 500+ BMW clubs, attend 1000+ events/year, connect with enthusiasts worldwide', badge:'', icon:'👥'},
    {title:'Events Platform', desc:'Create car shows, track days, meetups. QR ticketing, vehicle judging, photo galleries', badge:'NEW', icon:'🏎️'},
    {title:'Premium Features', desc:'Advanced search, saved alerts, exclusive AI capabilities, and business tools', badge:'PREMIUM', icon:'✨'},
  ]
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-[#0b0b12] to-[#0a0a0f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_80%_20%,rgba(28,105,212,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Why Choose BimmerHub</h2>
          <p className="mt-3 text-white/70">Built by enthusiasts, for enthusiasts. Experience the future of BMW trading.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it,idx)=> (
            <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(28,105,212,0.8)]">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{it.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{it.title}</h3>
                    {it.badge && <span className={`text-[10px] px-2 py-0.5 rounded-full border ${it.badge==='NEW'?'border-emerald-400/40 text-emerald-300 bg-emerald-400/10':'border-[#1C69D4]/40 text-[#1C69D4] bg-[#1C69D4]/10'}`}>{it.badge}</span>}
                  </div>
                  <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
