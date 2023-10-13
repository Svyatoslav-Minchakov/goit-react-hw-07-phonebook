import css from 'components/App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { fetchContacts } from '../redux/operations';
import { getAllContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getAllContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className={css.container}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error ? (
          <div className={css.loader}>
            <ThreeDots />
          </div>
        ) : (
          <ContactList />
        )}
        {!contacts.length && (
          <p className={css.message}>There are no contacts in the Phonebook</p>
        )}
      </div>
    </div>
  );
};
