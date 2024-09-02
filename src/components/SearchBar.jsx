import React, { useState } from 'react';

function SearchBar({ setLocation }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) { // Проверка на пустой ввод
      setLocation(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите город"
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
}

export default SearchBar;