import React, { useState } from 'react';
import axios from 'axios';

function Main() {
  const [favorites, setFavorites] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/', { favorites })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    setFavorites(''); 
  };

  const language = (event) => {
    setFavorites(event.target.value);
  };

  const getLanguages = () => {
    axios.get('http://localhost:3000/languages')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={favorites}
          onChange={language}
          placeholder="Ur fav language"
        />
        <button type="submit">submit</button>
      </form>
      <button onClick={getLanguages}>Get languages</button>
    </div>
  );
  }

export default Main;
