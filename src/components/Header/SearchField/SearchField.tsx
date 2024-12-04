import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import SearchIcon from './../../../assets/search.svg?react';

const SearchForm = styled.form`
  .search-icon {
      opacity: 0;
      color: ${({ theme }) => theme.colors.textPrimary};
      display: none;
      padding: 0.875rem 1rem;
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
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color:  ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  margin-right: 1.25rem;
  &:focus {
    border-color:  ${({ theme }) => theme.colors.accentPrimary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.accentPrimary};
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
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.boxShadow};
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
        <SearchIcon width="32px" height="32px" />
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