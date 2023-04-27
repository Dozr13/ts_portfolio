import React, { useState } from 'react'

import { UseInputProps } from '../types/types'

const useInput = ({ initialValue }: UseInputProps) => {
  const [value, setValue] = useState<string>(initialValue)

  const reset = () => {
    setValue(initialValue)
  }

  const onChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange,
    reset,
  }
}

export default useInput
