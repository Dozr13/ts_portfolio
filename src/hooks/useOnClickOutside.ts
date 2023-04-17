import { useEffect, MutableRefObject, SetStateAction } from "react"

interface Props {
  ref: MutableRefObject<Element | null>
  handler: (value: SetStateAction<boolean>) => void
}

const useOnClickOutside = ({ ref, handler }: Props): void => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(false)
    }
    document.addEventListener("mousedown", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
