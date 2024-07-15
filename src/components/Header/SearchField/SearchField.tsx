import React, { useState } from 'react';
import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  min-width: 20vw;
  padding: 0.625rem;
  font-size: 0.875rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-right: 1.25rem;
  &:focus {
    border-color: #8685EF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const SearchButton = styled.button`
  padding: 0.625rem 1.25rem;
  border: none;
  font-size:0.9rem;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    background-color: #F2ECFF;
    box-shadow: 0 0 5px #727272;
  }
`;

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
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Пошук товарів..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <SearchButton type="submit">Пошук</SearchButton>
    </SearchForm>
  );
};