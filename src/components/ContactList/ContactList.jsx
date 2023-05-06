const ContactList = props => {
  console.log(props);
  const { contacts } = props.state;
  console.log(contacts);
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button type="button" onClick={() => props.deleteContact(item.id)}>
              Delete contact!
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
