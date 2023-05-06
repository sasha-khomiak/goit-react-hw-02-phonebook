import { Ul, Li, Name, Button } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Ul>
      {contacts.map(item => {
        return (
          <Li key={item.id}>
            <Name>{item.name}: </Name> <p>{item.number}</p>
            <Button type="button" onClick={() => deleteContact(item.id)}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default ContactList;
