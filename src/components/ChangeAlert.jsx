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
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  min-width: 280px;
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
  background: var(--fg);
  border: none;
  color: var(--bg);
  font-size: 10px;
  letter-spacing: 3px;
  padding: 10px 24px;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: transparent;
    color: var(--fg);
    border: 1px solid var(--fg);
  }
`;
