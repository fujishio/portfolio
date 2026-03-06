import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Works', href: '#works' },
  { label: 'Graphics', href: '#graphics' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sacred-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold text-greek-blue tracking-wide">
          FUJISHIO
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold text-greek-blue hover:text-bougainvillea transition-colors pb-0.5 border-b-2 border-transparent hover:border-bougainvillea"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-greek-blue"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-sacred-white/95 backdrop-blur-md border-t border-limestone px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-display text-sm font-semibold text-greek-blue hover:text-bougainvillea transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
