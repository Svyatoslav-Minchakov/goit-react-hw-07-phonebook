export const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);

  function handleButton(contactId) {
    // console.log(contactId);
    // console.log(contacts);
    deleteContact(contactId);
  }

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}:</span>
            <span> {contact.number}</span>
            <button onClick={() => handleButton(contact.id)} type="button">
              DEL
            </button>
          </li>
        );
      })}
    </ul>
  );
};
