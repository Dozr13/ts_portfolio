import React, { useState } from 'react'

type Props = {
  initialValue: string
}

const useInput = ({ initialValue }: Props) => {
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
