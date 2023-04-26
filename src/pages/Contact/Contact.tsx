import React from 'react';

import { ContactContainer } from './Contact.styles';
import Form from '../../components/ui/Form/Form';

const Contact = () => {

  return (
    <ContactContainer id="contact">
      <Form header={'Let\'s Talk.'} subHeader={'New projects, freelance inquiry or even a coffee'} />
    </ContactContainer>
  );
};

export default Contact;