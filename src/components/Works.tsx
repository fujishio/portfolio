import { works } from '../data/works'
import { useModal } from '../context/ModalContext'

export default function Works() {
  const { open } = useModal()

  const games = works.filter((w) => w.category === 'games')
  const others = works.filter((w) => w.category === 'others')

  return (
    <section id="works" className="py-24 bg-limestone/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="fade-in mb-16">
          <p className="font-display text-xs font-black tracking-widest text-bougainvillea uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-greek-blue leading-none">
            Works
          </h2>
        </div>

        {/* Games */}
        <div className="fade-in flex items-center gap-4 mb-8">
          <span className="font-display text-xs font-bold tracking-widest text-greek-blue/50 uppercase">Games</span>
          <div className="flex-1 h-px bg-greek-blue/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {games.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              delay={i * 80}
              onClick={() => open({ title: work.title, body: work.detail })}
            />
          ))}
        </div>

        {/* Others */}
        <div className="fade-in flex items-center gap-4 mb-8">
          <span className="font-display text-xs font-bold tracking-widest text-greek-blue/50 uppercase">Others</span>
          <div className="flex-1 h-px bg-greek-blue/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {others.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              delay={i * 80}
              onClick={() => open({ title: work.title, body: work.detail })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({
  work,
  delay,
  onClick,
}: {
  work: typeof works[number]
  delay: number
  onClick: () => void
}) {
  return (
    <div
      className="fade-in group cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="overflow-hidden relative mb-4">
        <img
          src={work.thumbnail}
          alt={work.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Pink bottom bar on hover */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-bougainvillea scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Title */}
      <h4 className="font-display font-black text-greek-blue text-sm tracking-wide group-hover:text-bougainvillea transition-colors duration-200">
        {work.title}
      </h4>
    </div>
  )
}
