import { useEffect } from 'react'

import { UseOnClickOutsideProps } from '../types/types'

const useOnClickOutside = ({ ref, handler }: UseOnClickOutsideProps): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(false)
    }
    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
