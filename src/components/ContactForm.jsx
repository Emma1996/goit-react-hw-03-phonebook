import PropTypes from 'prop-types';

export const ContactForm = ({
  onNameChange,
  onNumberChange,
  onSubmit,
  name,
  number,
}) => {
  return (
    <div
      style={{
        borderStyle: 'groove',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 30,
        color: '#010101',
        padding: 10,
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onNameChange}
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="number"
            pattern="\\+?\\d{1,4}[-.\\s]?\\d{1,3}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onNumberChange}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
