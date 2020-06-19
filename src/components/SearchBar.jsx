import React from 'react';

export default function SearchBar({ oS, v, oC }) {
  return (
    <form onSubmit={oS}>
      <input
        data-testid="query-input"
        className="SearchBar"
        type="text"
        value={v}
        onChange={oC}
      />
      <button type="submit" className="btnSearch">
        Pesquisar
      </button>
    </form>
  );
}
