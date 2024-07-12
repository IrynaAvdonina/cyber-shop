import React, { useState } from 'react'
import './SearchField.css'

export const SearchField = () =>
{
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();
    // Ваш код для обробки пошукового запиту, наприклад, відправка на сервер або локальний пошук
    console.log(`Виконано пошук: ${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <input
        type="text"
        placeholder="Пошук товарів..."
        value={searchQuery}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">Пошук</button>
    </form>
  );
};