import { nanoid } from 'nanoid'
import { Button, Form, Input, Label } from "./ContactForm.styled";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsOperation';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch()

  const nameId = nanoid(4)
  const numberId = nanoid(4)

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name, value)
    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();
      return Notiflix.Notify.info(`${name} is already in contacts`);
    }

    dispatch(addContact({name, number}));
    reset();
  };

  return (
      <Form onSubmit={handleSubmit}>  
        <Label htmlFor={nameId}>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            id={nameId}
          />
        </Label>  
        <Label htmlFor={numberId}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            id={numberId}
          />            
        </Label>
        <Button>Add contact</Button>
      </Form>
    )
}

export default ContactForm