import css from './ContactList.module.css';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          <samp>{name}:</samp>
          <samp> {number}</samp>
          <button
            onClick={() => {
              onDeleteContact(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
