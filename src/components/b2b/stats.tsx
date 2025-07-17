"use client"

interface Stat {
  id: number
  title: string
  description: string
  highlight?: string
}

const stats: Stat[] = [
  {
    id: 1,
    title: "2,500+ Referrals Tracked",
    description: "Real customers referred by real partners and every one of them is trackable through your dashboard.",
    highlight: "+",
  },
  {
    id: 2,
    title: "500+ Active Partners Nationwide",
    description:
      "From body shops to legal offices, businesses across the U.S. are already using our platform to earn more.",
    highlight: "+",
  },
  {
    id: 3,
    title: "$500,000+ Paid in Referral Bonuses",
    description: "We reward every successful referral. Whether you're big or small, every payout counts.",
    highlight: "+",
  },
  {
    id: 4,
    title: "2min to Start",
    description: "That's all it takes to join the program. No contracts, no pressure, just a smart way to add value.",
    highlight: "min",
  },
]

const escapeRegExp = (string: string) =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escapes special characters

const highlightText = (text: string, highlight?: string) => {
  if (!highlight) return text

  const escapedHighlight = escapeRegExp(highlight)
  const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'))

  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={index} className="text-yellow-500">
        {part}
      </span>
    ) : (
      part
    ),
  )
}


export default function StatsSection() {
  return (
    <section className="relative bg-black py-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/5"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-white/10" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/3 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 leading-tight">
                  {highlightText(stat.title, stat.highlight)}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{stat.description}</p>
              </div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
