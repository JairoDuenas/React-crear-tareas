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
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: var(--fg);
  font-size: 12px;
  letter-spacing: 1.5px;
  padding: 12px 44px 12px 42px;
  outline: none;
  transition:
    border-color 0.18s ease-out,
    box-shadow 0.18s ease-out,
    background 0.18s ease-out;
  border-radius: 999px;

  &::placeholder {
    color: var(--dim);
  }
  &:focus {
    border-color: rgba(129, 140, 248, 0.9);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
    background: rgba(15, 23, 42, 0.82);
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: var(--dim);
  font-size: 12px;
  padding: 0;
  transition: color 0.2s;
  &:hover {
    color: var(--fg);
  }
`;
