import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/selectors';
import {
  deleteContact as deleteContactRedux,
  fetchContacts,
} from 'redux/operations';
import { Button, Li } from './Contact.styled';

const Contact = () => {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(selectContacts);
  const filterRedux = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading)
  const contacts = filterRedux === '' ? contactsRedux : onActiveFilter();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const deleteContact = id => {
    dispatch(deleteContactRedux(id));
  };

  function onActiveFilter() {
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(filterRedux)
    );
  }

  return (
    <>
      {contacts.map(({ id, name, phone }) => (
        <Li key={id}>
          <p>
            {name}: {phone}
          </p>
          <Button type="button" disabled={isLoading} onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </Li>
      ))}
      
    </>
  );
};

export default Contact;
