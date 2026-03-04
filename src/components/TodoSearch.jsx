import styled from "styled-components";

export function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <SearchWrap>
      <SearchIcon>⌕</SearchIcon>
      <Input
        type="text"
        placeholder="BUSCAR TAREA..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && <ClearBtn onClick={() => setSearchValue("")}>✕</ClearBtn>}
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 14px;
  font-size: 18px;
  color: var(--dim);
  pointer-events: none;
  line-height: 1;
`;

const Input = styled.input`
  width: 100%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--fg);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 12px 40px 12px 40px;
  outline: none;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--dim);
  }
  &:focus {
    border-color: var(--fg);
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: var(--dim);
  font-size: 11px;
  padding: 0;
  transition: color 0.2s;
  &:hover {
    color: var(--fg);
  }
`;
