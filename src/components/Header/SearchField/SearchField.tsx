import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import searchIcon from './../../../assets/search.svg';

const SearchForm = styled.form`
  .search-icon{
      opacity: 0;
      display: none;
      padding: 0.875rem 1rem;
      img {
        width: 1.5rem;
      }
    }
  @media (max-width: 768px) {
    order: 4;
    display: flex;
    .search-icon {
      opacity:1;
      display: inline;
      background-color: transparent;
    }
  }
`;

const SearchInputContainer = styled.div<{ showInput: boolean }>`
  display: flex;
  align-items: center;
  opacity: 1;
  @media (max-width: 768px) {
    opacity: ${({ showInput }) => (showInput ? '1' : '0')};
    display: ${({ showInput }) => (showInput ? 'flex' : 'none')};
  }
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
  @media (max-width: 768px) {
    min-width: 50vw;
  }

  @media (max-width: 480px) {
    max-width: 35vw;
    min-width: 10vw;
    margin-right: 0.5rem;
  }
`;

const SearchButton = styled.button`
  padding: 0.625rem 1.25rem;
  border: none;
  font-size: 0.9rem;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    background-color: #F2ECFF;
    box-shadow: 0 0 5px #727272;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const SearchField = () =>
{
  const [searchQuery, setSearchQuery] = useState<string | ''>('');
  const [showInput, setShowInput] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
  {
    event.preventDefault();
    navigate(`/categories?search=${searchQuery}`);
  };

  const handleClick = () =>
  {
    setShowInput(!showInput);
  };

  return (

    <SearchForm onSubmit={handleSubmit}>
      <button className="search-icon" type="button" onClick={handleClick}>
        <img src={searchIcon} alt="Search Icon" />
      </button>
      <SearchInputContainer showInput={showInput}>
        <SearchInput
          type="text"
          placeholder="Пошук товарів..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <SearchButton type="submit">Пошук</SearchButton>
      </SearchInputContainer>
    </SearchForm>
  );
};