import { useState } from 'react';
import { Wrapper } from './Searchbar.styles';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();

    onSubmit(searchQuery);

    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  const handleChangeForm = e => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  return (
    <Wrapper>
      <header>
        <form onSubmit={handleSubmitForm}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            onChange={handleChangeForm}
            value={searchQuery}
            autoFocus
            placeholder="Search character for name"
          />
        </form>
      </header>
    </Wrapper>
  );
}
