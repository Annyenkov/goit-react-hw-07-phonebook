import React from "react";
import PropTypes from "prop-types";
import { Button, Icon, ListItem } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilterValue } from "redux/selectors";
import { fetchContacts, deleteContact } from '../../redux/contactsOperation';
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  const filterValue = useSelector(getFilterValue);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul>
      {visibleContacts.map(({id, name, number}) => {
        return (
          <ListItem key={id}>
            <Icon></Icon>
            <span>{name}:</span>
            <span>{number}</span>
            <Button
              onClick={() => dispatch(deleteContact(id))}
            >Delete</Button>
          </ListItem>
        )
      })}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }))
}


export default ContactList;