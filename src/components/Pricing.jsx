export default function Pricing(){
  const tiers = [
    {name:'FREE', price:'€0', period:'/month', features:['1 listing','Basic search','Community access','100 AI credits/month']},
    {name:'ENTHUSIAST ⭐', price:'€9', period:'/month', features:['3 listings','Advanced filters','Priority support','500 AI credits/month'], popular:true},
    {name:'PREMIUM 💎', price:'€29', period:'/month', features:['8 listings','AI maintenance chat','Market insights','2,000 AI credits/month']},
    {name:'BUSINESS 🏢', price:'€99', period:'/month', features:['30 listings','Team management','Analytics dashboard','10,000 AI credits/month']},
    {name:'DEALERSHIP 🏎️', price:'€199', period:'/month', features:['60 listings','Verified badge','Premium placement','100,000 AI credits/month']},
  ]
  return (
    <section id="pricing" className="relative py-20 bg-[#0a0a0f] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_20%_20%,rgba(142,68,173,0.18),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Choose Your Plan</h2>
          <p className="mt-3 text-white/70">From casual browsers to professional dealerships - we've got you covered</p>
        </div>
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 gap-6">
          {tiers.map((t,idx)=> (
            <div key={idx} className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(28,105,212,0.8)] ${t.popular?'ring-1 ring-[#1C69D4]/40':''}`}>
              {t.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] px-2 py-0.5 rounded-full border border-[#1C69D4]/40 text-[#1C69D4] bg-[#1C69D4]/10">Most Popular</div>}
              <div className="text-sm text-white/60">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold">{t.price}<span className="text-base font-normal text-white/60">{t.period}</span></div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {t.features.map((f,i)=>(<li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#1C69D4]" />{f}</li>))}
              </ul>
              <button className="mt-6 w-full rounded-xl bg-white/10 border border-white/10 py-2 font-semibold hover:bg-white/15">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
