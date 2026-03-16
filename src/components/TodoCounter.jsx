import styled from "styled-components";

export function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <Counter>
      <Num>{completedTodos}</Num>
      <Sep>/</Sep>
      <Total>{totalTodos}</Total>
      <Label>COMPLETADAS</Label>
    </Counter>
  );
}

const Counter = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 999px;
  width: fit-content;
`;

const Num = styled.span`
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--fg);
  line-height: 1;
`;

const Sep = styled.span`
  font-size: 18px;
  color: rgba(148, 163, 184, 0.5);
`;

const Total = styled.span`
  font-family: var(--font-display);
  font-size: 28px;
  color: var(--dim);
  line-height: 1;
`;

const Label = styled.span`
  font-size: 9px;
  letter-spacing: 3px;
  color: var(--dim);
  margin-left: 4px;
`;
