import { ContactsList } from './contacts.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span> {number}</span>
            <button onClick={() => deleteContact(id)} type="button">
              DEL
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};
