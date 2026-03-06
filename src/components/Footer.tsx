export default function Footer() {
  return (
    <footer className="bg-greek-blue pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-display text-3xl font-black text-sacred-white tracking-widest mb-1">FUJISHIO</p>
        <p className="font-display text-xs font-bold tracking-widest text-bougainvillea uppercase mb-8">
          Illustrator &amp; Developer
        </p>
        <div className="w-6 h-0.5 bg-bougainvillea mx-auto mb-8" />
        <p className="text-sacred-white/40 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} FUJISHIO. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
