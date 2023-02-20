import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import Button from 'components/UI/Button/Button';
import PropTypes from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      <p className={css.name}>{contact.name}: </p>
      <p className={css.tel}>{contact.number}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
