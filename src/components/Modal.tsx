import { useEffect } from 'react'
import { useModal } from '../context/ModalContext'

export default function Modal() {
  const { content, close } = useModal()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }

    if (content) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [content, close])

  if (!content) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-greek-blue/30 backdrop-blur-sm animate-fade-in"
      onClick={close}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-2xl my-12 p-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-limestone/50 hover:bg-bougainvillea hover:text-white flex items-center justify-center text-xl transition-all"
          aria-label="閉じる"
        >
          &times;
        </button>

        <div className="mt-4">{content.body}</div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.25s ease-out; }
        .animate-slide-up { animation: slideUp 0.3s ease-out; }
      `}</style>
    </div>
  )
}
