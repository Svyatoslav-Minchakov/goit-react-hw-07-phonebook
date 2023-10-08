import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const listContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };
  return (
    <ul className={css.list}>
      {listContact().map(cont => {
        return (
          <li key={cont.id} className={css.listItem}>
            <p className={css.text}>
              <span className={css.phone}>
                {cont.name}: {cont.number}
              </span>
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => {
                dispatch(remove(cont.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
