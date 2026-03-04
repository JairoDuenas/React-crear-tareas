import { useState } from "react";
import styled, { css } from "styled-components";

export function TodoItem({ text, completed, onComplete, onEdit, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Item
      $completed={completed}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CheckBtn
        onClick={onComplete}
        $completed={completed}
        title="Completar"
        disabled={completed}
      >
        {completed ? "✓" : "○"}
      </CheckBtn>

      <Text $completed={completed}>{text}</Text>

      <Actions $visible={hovered}>
        <ActionBtn onClick={onEdit} title="Editar" $variant="edit">
          ✎
        </ActionBtn>
        <ActionBtn onClick={onDelete} title="Eliminar" $variant="delete">
          ✕
        </ActionBtn>
      </Actions>
    </Item>
  );
}

const Item = styled.li`
  display: grid;
  grid-template-columns: 36px 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition:
    background 0.2s,
    border-color 0.2s;

  &:hover {
    background: var(--bg-hover);
    border-color: #2a2a2a;
  }

  ${({ $completed }) =>
    $completed &&
    css`
      opacity: 0.4;
    `}
`;

const CheckBtn = styled.button`
  background: none;
  border: 1px solid
    ${({ $completed }) => ($completed ? "var(--success)" : "var(--dim)")};
  color: ${({ $completed }) => ($completed ? "var(--success)" : "var(--dim)")};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition:
    border-color 0.2s,
    color 0.2s;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    border-color: var(--success);
    color: var(--success);
  }
`;

const Text = styled.span`
  font-size: 13px;
  letter-spacing: 0.5px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  word-break: break-word;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s;
`;

const ActionBtn = styled.button`
  background: none;
  border: 1px solid var(--border);
  color: var(--dim);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: ${({ $variant }) =>
      $variant === "delete" ? "var(--danger)" : "var(--fg)"};
    color: ${({ $variant }) =>
      $variant === "delete" ? "var(--danger)" : "var(--fg)"};
  }
`;
