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
  0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.35); }
  50%       { box-shadow: 0 0 0 10px rgba(99, 102, 241, 0); }
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
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 35%, #38bdf8 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #020617;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.18s ease-out,
    filter 0.18s ease-out,
    box-shadow 0.18s ease-out;
  animation: ${pulse} 2.5s ease infinite;
  box-shadow: 0 22px 55px rgba(79, 70, 229, 0.45);

  span {
    line-height: 1;
    margin-top: -2px;
  }

  &:hover {
    transform: translateY(-2px) scale(1.06) rotate(90deg);
    filter: brightness(1.05) saturate(1.05);
    box-shadow: 0 28px 70px rgba(79, 70, 229, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;
