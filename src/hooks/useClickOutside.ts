import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
  outsideClickHandler: () => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = elementRef?.current

      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }

      outsideClickHandler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [elementRef, outsideClickHandler])
}
