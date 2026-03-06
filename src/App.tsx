import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Works from './components/Works'
import Graphics from './components/Graphics'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Modal from './components/Modal'
import { ModalProvider } from './context/ModalContext'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <ModalProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Works />
          <Graphics />
        </main>
        <Footer />
        <ScrollToTop />
        <Modal />
      </div>
    </ModalProvider>
  )
}

export default App
