import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COUNTRY } from '../graphql/mutations/mutations';

function AddCountryForm() {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [code, setCode] = useState('');
  
  const [addCountry] = useMutation(ADD_COUNTRY);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const { data } = await addCountry({
        variables: {
          data: {
            name,
            emoji,
            code
          }
        }
      });
      console.log('Pays ajouté:', data.addCountry);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du pays:', error);
    }
  };

  return (
    <div className="countries-container">
      <h1 className="header-title-list">Ajouter un pays</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-row">
          <label htmlFor="name">Nom du pays :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="emoji">Emoji :</label>
          <input
            type="text"
            id="emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="code">Code :</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
  
}

export default AddCountryForm;
