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
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  transition:
    background 0.18s ease-out,
    border-color 0.18s ease-out,
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out;

  &:hover {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(129, 140, 248, 0.45);
    transform: translateY(-1px);
    box-shadow: 0 22px 60px rgba(15, 23, 42, 0.75);
  }

  ${({ $completed }) =>
    $completed &&
    css`
      opacity: 0.55;
    `}
`;

const CheckBtn = styled.button`
  background: ${({ $completed }) =>
    $completed ? "rgba(34, 197, 94, 0.15)" : "transparent"};
  border: 1px solid
    ${({ $completed }) =>
      $completed ? "rgba(34, 197, 94, 0.7)" : "rgba(148, 163, 184, 0.55)"};
  color: ${({ $completed }) => ($completed ? "var(--success)" : "var(--dim)")};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition:
    border-color 0.18s ease-out,
    color 0.18s ease-out,
    background 0.18s ease-out,
    transform 0.18s ease-out;
  flex-shrink: 0;
  border-radius: 10px;

  &:hover:not(:disabled) {
    border-color: rgba(34, 197, 94, 0.9);
    color: var(--success);
    background: rgba(34, 197, 94, 0.14);
    transform: translateY(-1px);
  }
`;

const Text = styled.span`
  font-size: 14px;
  letter-spacing: 0.2px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  word-break: break-word;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "translateY(0)" : "translateY(2px)")};
  transition:
    opacity 0.18s ease-out,
    transform 0.18s ease-out;
`;

const ActionBtn = styled.button`
  background: rgba(2, 6, 23, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.3);
  color: var(--dim);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transition:
    border-color 0.18s ease-out,
    color 0.18s ease-out,
    transform 0.18s ease-out,
    background 0.18s ease-out;
  border-radius: 10px;

  &:hover {
    border-color: ${({ $variant }) =>
      $variant === "delete"
        ? "rgba(249, 115, 115, 0.85)"
        : "rgba(129, 140, 248, 0.7)"};
    color: ${({ $variant }) => ($variant === "delete" ? "var(--danger)" : "var(--fg)")};
    background: ${({ $variant }) =>
      $variant === "delete" ? "rgba(249, 115, 115, 0.12)" : "rgba(99, 102, 241, 0.16)"};
    transform: translateY(-1px);
  }
`;
