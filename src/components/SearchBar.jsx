import React from 'react';

export default function SearchBar({ oS, v, oC }) {
  return (
    <form>
      <input
        data-testid="query-input"
        className="SearchBar"
        type="text"
        value={v}
        onChange={oC}
      />
      <button
        type="submit"
        className="btnSearch"
        data-testid="query-button"
        onClick={oS}
      >
        Pesquisar
      </button>
    </form>
  );
}
