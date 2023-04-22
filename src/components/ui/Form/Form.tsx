import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { FormStyled, FormGroup, FormInput, FormLabel, FormHeaderContainer, FormHeaderText, FormSubHeaderText, FormTextArea, FormFlexGroup } from './Form.styles';
import apiKeys from '../../../api/.secret/apiKeys';
import useAutosizeTextArea from '../../../hooks/useAutoSizingTextArea';
import useInput from '../../../hooks/useInput';
import Button from '../Button/Button';

const Form = () => {
  const MySwal = withReactContent(Swal);
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const nameInput = useInput({ initialValue: '' });
  const emailInput = useInput({ initialValue: '' });
  const messageInput = useInput({ initialValue: '' });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, messageInput.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailjs.sendForm(
      apiKeys.SERVICE_ID,
      apiKeys.TEMPLATE_ID,
      form.current,
      apiKeys.PUBLIC_KEY
    ).then((result) => {
      MySwal.fire({
        icon: 'success',
        title: `Message Sent, I'll get back to you shortly`,
        text: result.text = ''
      });
      nameInput.reset();
      emailInput.reset();
      messageInput.reset();
    }, (error) => {
      MySwal.fire({
        icon: 'error',
        title: 'Oops, something went wrong, please try again',
        text: error.text = ''
      });
    });

    document.addEventListener('touchmove', (event) => {
      event.preventDefault(), { passive: true };
    }, { passive: true });
  };

  return (
    <FormStyled role="form" onSubmit={handleSubmit} ref={form}>
      <FormHeaderContainer grid-area='header'>
        <FormHeaderText>Let's talk.</FormHeaderText>
        <br />
        <FormSubHeaderText>New projects, freelance inquiry or even a coffee</FormSubHeaderText>
      </FormHeaderContainer>

      <FormGroup grid-area='nameInput'>
        <FormLabel>Name *</FormLabel>
        <FormInput name='name' type='text' required {...nameInput} />
      </FormGroup>

      <FormGroup grid-area='emailInput'>
        <FormLabel>Email *</FormLabel>
        <FormInput name='email' type='email' required {...emailInput} />
      </FormGroup>

      <FormFlexGroup>
        <FormLabel>Message *</FormLabel>
        <FormTextArea name='message' ref={textAreaRef} required {...messageInput} rows={1} />
        <Button title='Send Message' type='submit' />
      </FormFlexGroup>
    </FormStyled>
  );
};

export default Form;


