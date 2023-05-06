const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button type="button" onClick={() => deleteContact(item.id)}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
