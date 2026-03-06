import { useState } from 'react'

const base = import.meta.env.BASE_URL
const images = [
  { src: `${base}image/enaga.png`, alt: 'エナガ' },
  { src: `${base}image/suzume.png`, alt: 'スズメ' },
  { src: `${base}image/owl.png`, alt: 'フクロウ' },
  { src: `${base}image/tanabata.jpg`, alt: '七夕' },
  { src: `${base}image/jane.jpg`, alt: 'Jane' },
  { src: `${base}image/wakamo.jpg`, alt: 'ワカモ' },
  { src: `${base}image/revdol.jpg`, alt: 'Revdol' },
  { src: `${base}image/tamamo.jpg`, alt: 'タマモ' },
  { src: `${base}image/20200528-mini.jpg`, alt: 'イラスト' },
]

export default function Graphics() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)

  const changeImage = (index: number) => {
    if (index === activeIndex) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(index)
      setFading(false)
    }, 250)
  }

  return (
    <section id="graphics" className="py-24 bg-sacred-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="fade-in mb-16">
          <p className="font-display text-xs font-black tracking-widest text-bougainvillea uppercase mb-2">
            Gallery
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-greek-blue leading-none">
            Graphics
          </h2>
        </div>

        {/* Main preview — no white box, just clean bg */}
        <div
          className="fade-in mb-4 bg-limestone/40 flex items-center justify-center"
          style={{ minHeight: '480px' }}
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className={`max-w-full max-h-[600px] object-contain transition-opacity duration-250 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        {/* Caption */}
        <p className="fade-in text-xs font-display font-bold tracking-widest text-greek-blue/40 uppercase text-center mb-6">
          {images[activeIndex].alt}
        </p>

        {/* Thumbnails — compact grid */}
        <div className="fade-in grid grid-cols-9 gap-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => changeImage(i)}
              className={`aspect-square overflow-hidden transition-all duration-200 ${
                i === activeIndex
                  ? 'ring-2 ring-bougainvillea ring-offset-2'
                  : 'opacity-40 hover:opacity-90'
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
