import styled, { keyframes } from "styled-components";

/* ── EmptyTodos ── */
function EmptyTodos() {
  return (
    <StateWrap>
      <StateIcon>◻</StateIcon>
      <StateTitle>SIN TAREAS</StateTitle>
      <StateText>Crea tu primera tarea con el botón +</StateText>
    </StateWrap>
  );
}

/* ── TodosLoading ── */
function TodosLoading() {
  return (
    <StateWrap>
      <Spinner />
      <StateText>CARGANDO...</StateText>
    </StateWrap>
  );
}

/* ── TodosError ── */
function TodosError() {
  return (
    <StateWrap>
      <StateIcon>!</StateIcon>
      <StateTitle>ERROR</StateTitle>
      <StateText>No se pudieron cargar las tareas</StateText>
    </StateWrap>
  );
}

/* ── shared styled ── */
const StateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 32px;
  gap: 12px;
  text-align: center;
`;

const StateIcon = styled.span`
  font-family: var(--font-display);
  font-size: 48px;
  color: var(--border);
  line-height: 1;
`;

const StateTitle = styled.p`
  font-family: var(--font-display);
  font-size: 24px;
  letter-spacing: 4px;
  color: var(--dim);
`;

const StateText = styled.p`
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--dim);
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 1.5px solid var(--border);
  border-top-color: var(--fg);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 8px;
`;

export { EmptyTodos, TodosLoading, TodosError };
