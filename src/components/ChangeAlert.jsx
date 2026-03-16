import styled, { keyframes } from "styled-components";
import { useStorageListener } from "../hooks/useStorageListener";

export function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);

  if (!show) return null;

  return (
    <Overlay>
      <Alert>
        <AlertIcon>⚡</AlertIcon>
        <AlertTitle>CAMBIOS DETECTADOS</AlertTitle>
        <AlertText>Hay cambios en otra pestaña o ventana.</AlertText>
        <SyncBtn onClick={toggleShow}>SINCRONIZAR</SyncBtn>
      </Alert>
    </Overlay>
  );
}

const slideUp = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  animation: ${slideUp} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Alert = styled.div`
  background: rgba(15, 23, 42, 0.88);
  border: 1px solid rgba(148, 163, 184, 0.4);
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  min-width: 280px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-subtle);
  backdrop-filter: blur(16px);
`;

const AlertIcon = styled.span`
  font-size: 24px;
  margin-bottom: 4px;
`;

const AlertTitle = styled.p`
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 3px;
`;

const AlertText = styled.p`
  font-size: 11px;
  color: var(--dim);
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const SyncBtn = styled.button`
  background: var(--accent);
  border: none;
  color: #020617;
  font-size: 11px;
  letter-spacing: 3px;
  padding: 10px 26px;
  border-radius: 999px;
  transition:
    background 0.18s ease-out,
    color 0.18s ease-out,
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out;

  &:hover {
    background: #4f46e5;
    color: #e5e7eb;
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.55);
    transform: translateY(-1px);
  }
`;
