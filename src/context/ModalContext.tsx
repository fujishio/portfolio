import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

type ModalContent = {
  title: string
  body: ReactNode
} | null

type ModalContextType = {
  content: ModalContent
  open: (content: ModalContent) => void
  close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ModalContent>(null)

  const open = useCallback((c: ModalContent) => setContent(c), [])
  const close = useCallback(() => setContent(null), [])

  return (
    <ModalContext.Provider value={{ content, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
