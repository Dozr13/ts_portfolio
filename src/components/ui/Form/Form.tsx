import React from 'react'
import useInput from '../../../hooks/useInput'

const Form = () => {
  const nameInput = useInput({ initialValue: '' })
  const emailInput = useInput({ initialValue: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(nameInput.value)
    console.log(emailInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' {...nameInput} />
      <input type='email' {...emailInput} />

      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form