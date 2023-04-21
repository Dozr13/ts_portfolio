import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { FormStyled, FormGroup, FormInput, FormLabel, FormHeaderContainer, FormHeaderText, FormSubHeaderText, FormButtonContainer } from './Form.styles';
import apiKeys from '../../../api/secret/apiKeys';
import useInput from '../../../hooks/useInput';
import Button from '../Button/Button';

const Form = () => {
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;
  const nameInput = useInput({ initialValue: '' });
  const emailInput = useInput({ initialValue: '' });
  const messageInput = useInput({ initialValue: '' });
  const MySwal = withReactContent(Swal);

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

      <FormGroup>
        <FormLabel>Name *</FormLabel>
        <FormInput type='text' required {...nameInput} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Email *</FormLabel>
        <FormInput type='email' required {...emailInput} />
      </FormGroup>

      <FormGroup>
        <FormLabel>Message *</FormLabel>
        <FormInput type='text' required {...messageInput} />
      </FormGroup>

      <FormButtonContainer>
        <Button title='Send Message' type='submit' />
      </FormButtonContainer>
    </FormStyled>
  );
};

export default Form;
