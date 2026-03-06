const skills = [
  'Drawing', 'SAI2', 'Clip Studio', 'Adobe Photoshop', 'Adobe Premiere Pro',
  'Live 2D', 'HTML & CSS', 'TOEIC IP L&R 880', 'HSK grade 4',
  'Normal Vehicles License', 'PHP', 'MySQL',
]

const likes = [
  'SF literature', 'Submarine Movies', 'Garden Tree Trimming',
  'ANIME', 'KARAOKE', 'Games', 'Cookings', 'Aquarium',
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 bg-sacred-white overflow-hidden">

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Main hero: text left, photo right */}
        <div className="fade-in flex flex-col md:flex-row md:items-end mb-20 pb-16 border-b border-limestone">
          {/* Text — in front */}
          <div className="relative z-10 flex-1">
            <p className="font-display text-xs font-bold tracking-widest text-bougainvillea uppercase mb-4">
              Illustrator &amp; Developer
            </p>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-greek-blue leading-none mb-8 tracking-tight">
              FUJISHIO
            </h1>
            <p className="font-display text-base text-blue-eyes italic leading-relaxed max-w-xs">
              "Things don't always turn out as you expect, but they do turn out as you DO."
            </p>
          </div>

          {/* Photo — large, overlapping behind text */}
          <div className="relative z-0 flex-shrink-0 md:-ml-48 self-center md:self-start">
            <div className="absolute inset-0 bg-bougainvillea translate-x-2 translate-y-2" />
            <img
              src={`${import.meta.env.BASE_URL}image/20200508-mini.jpg`}
              alt="FUJISHIO"
              className="relative w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="fade-in mb-10" style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-display text-xs font-black tracking-widest text-bougainvillea uppercase">
              Skills
            </span>
            <div className="flex-1 h-px bg-limestone" />
          </div>
          <p className="text-greek-blue text-sm leading-relaxed tracking-wide">
            {skills.join('\u3000·\u3000')}
          </p>
        </div>

        {/* Likes */}
        <div className="fade-in" style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center gap-4 mb-3">
            <span className="font-display text-xs font-black tracking-widest text-bougainvillea uppercase">
              Likes
            </span>
            <div className="flex-1 h-px bg-limestone" />
          </div>
          <p className="text-greek-blue text-sm leading-relaxed tracking-wide">
            {likes.join('\u3000·\u3000')}
          </p>
        </div>
      </div>
    </section>
  )
}
