import styled, { keyframes } from "styled-components";

export function CreateTodoButton({ onClick }) {
  return (
    <Wrap>
      <Btn onClick={onClick} title="Nueva tarea">
        <span>+</span>
      </Btn>
    </Wrap>
  );
}

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(239,239,234,0.15); }
  50%       { box-shadow: 0 0 0 8px rgba(239,239,234,0); }
`;

const Wrap = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 50;

  @media (max-width: 768px) {
    bottom: 24px;
    right: 24px;
  }
`;

const Btn = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--fg);
  border: none;
  color: var(--bg);
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.2s,
    background 0.2s;
  animation: ${pulse} 2.5s ease infinite;

  span {
    line-height: 1;
    margin-top: -2px;
  }

  &:hover {
    transform: scale(1.1) rotate(90deg);
    background: var(--fg);
  }

  &:active {
    transform: scale(0.95);
  }
`;
