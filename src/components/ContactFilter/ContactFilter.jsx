import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const visibleContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    const searchContact = e.target.value;

    dispatch(setFilter(searchContact.toLowerCase()));
  };

  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={visibleContacts}
        onChange={onChangeFilter}
      />
    </div>
  );
};
