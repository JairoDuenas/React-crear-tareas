import styled from "styled-components";

export function TodoList({
  loading,
  error,
  searchedTodos,
  totalTodos,
  searchText,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  children,
}) {
  return (
    <List>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !error && !totalTodos && onEmptyTodos()}
      {!loading &&
        !error &&
        !!totalTodos &&
        !searchedTodos.length &&
        onEmptySearchResults(searchText)}
      {!loading && !error && searchedTodos.map(children)}
    </List>
  );
}

const List = styled.ul`
  max-width: 760px;
  margin: 0 auto;
  padding: 20px 20px 140px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
