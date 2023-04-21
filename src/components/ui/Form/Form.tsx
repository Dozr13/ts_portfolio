import React from 'react'

import { FormStyled, FormGroup, FormInput, FormLabel, FormHeaderContainer, FormHeaderText, FormSubHeaderText, FormButtonContainer } from './Form.styles'
import useInput from '../../../hooks/useInput'
import Button from '../Button/Button'

const Form = () => {
  const nameInput = useInput({ initialValue: '' })
  const emailInput = useInput({ initialValue: '' })
  const messageInput = useInput({ initialValue: '' })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(nameInput.value)
    console.log(emailInput.value)
    console.log(messageInput.value)
  }

  // * May implement later
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // useAutosizeTextArea(textAreaRef.current, messageInput.value);

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormHeaderContainer grid-area='header'>
        <FormHeaderText>Let's talk.</FormHeaderText>
        <br />
        <FormSubHeaderText>New projects, freelance inquiry or even a coffee</FormSubHeaderText>
      </FormHeaderContainer>

      <FormGroup>
        <FormLabel>Name *</FormLabel>
        {/* // TODO: build out custom inputs */}
        <FormInput type='text' required {...nameInput} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Email *</FormLabel>
        <FormInput type='text' required {...emailInput} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Message *</FormLabel>
        <FormInput type='text' required {...messageInput} />
      </FormGroup>

      <FormButtonContainer>
        <Button title='Send Message' />
      </FormButtonContainer>
    </FormStyled>
  )
}

export default Form