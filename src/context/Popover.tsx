import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useRef,
  ReactNode,
  RefObject,
} from 'react'
import { useClickOutside } from 'src/hooks/useClickOutside'

interface PopoverContextType {
  closePopover: () => void
  openPopover: () => void
  popoverRef: RefObject<HTMLDivElement> | null
  toggle: boolean
}

interface PopoverProviderType {
  children: ReactNode
}

const PopoverContext = createContext<PopoverContextType>({
  closePopover: () => null,
  openPopover: () => null,
  popoverRef: null,
  toggle: false,
})

const PopoverProvider = ({ children }: PopoverProviderType) => {
  const popoverRef = useRef(null)
  const [toggle, setToggle] = useState<boolean>(false)

  function closePopover() {
    setToggle(false)
  }

  function openPopover() {
    setToggle(true)
  }

  const autoClosePopover = useCallback(() => setToggle(false), [])

  useClickOutside(popoverRef, autoClosePopover)

  return (
    <PopoverContext.Provider value={{ closePopover, openPopover, popoverRef, toggle }}>
      {children}
    </PopoverContext.Provider>
  )
}

const usePopover = () => {
  const context = useContext(PopoverContext)

  if (!context) {
    throw new Error('usePopover must be used within PopoverProvider')
  }

  return context
}

export { PopoverProvider, usePopover }
