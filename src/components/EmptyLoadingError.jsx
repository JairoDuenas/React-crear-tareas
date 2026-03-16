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
  padding: 56px 24px;
  gap: 12px;
  text-align: center;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-subtle);
`;

const StateIcon = styled.span`
  font-family: var(--font-display);
  font-size: 48px;
  color: rgba(148, 163, 184, 0.65);
  line-height: 1;
`;

const StateTitle = styled.p`
  font-family: var(--font-display);
  font-size: 24px;
  letter-spacing: 4px;
  color: var(--fg);
`;

const StateText = styled.p`
  font-size: 12px;
  letter-spacing: 1.8px;
  color: var(--dim);
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 1.5px solid rgba(148, 163, 184, 0.45);
  border-top-color: rgba(129, 140, 248, 0.95);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-bottom: 8px;
`;

export { EmptyTodos, TodosLoading, TodosError };
