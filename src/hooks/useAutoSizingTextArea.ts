import { useEffect } from 'react'

const useAutosizeTextArea = (
  textAreaElement: HTMLTextAreaElement | null,
  text: string
) => {
  useEffect(() => {
    const element = textAreaElement
    if (element) {
      element.style.height = 'inherit'
      element.style.height = `${element.scrollHeight}px`
    }
  }, [text, textAreaElement])
}

export default useAutosizeTextArea
