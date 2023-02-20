import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContact = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContact(contacts, filter);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
