import css from 'components/ContactList/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getAllContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.list}>
        {contacts.map(obj => {
          return (
            <li key={obj.id} className={css.item}>
              <p className={css.text}>
                <span className={css.phone}>
                  {obj.name} : {obj.phone}
                </span>
              </p>
              <button
                type="button"
                className={css.btn}
                onClick={() => dispatch(deleteContact(obj.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
