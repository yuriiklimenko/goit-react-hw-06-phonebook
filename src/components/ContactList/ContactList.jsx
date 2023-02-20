import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

const getVisibleContact = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContact(contacts, filter);

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
