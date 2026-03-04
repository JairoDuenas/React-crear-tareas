import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Page>
      <Code>404</Code>
      <Message>PÁGINA NO ENCONTRADA</Message>
      <BackBtn onClick={() => navigate("/")}>← VOLVER AL INICIO</BackBtn>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Code = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(80px, 20vw, 160px);
  line-height: 1;
  -webkit-text-stroke: 1px var(--border);
  color: transparent;
`;

const Message = styled.p`
  font-size: 11px;
  letter-spacing: 4px;
  color: var(--dim);
`;

const BackBtn = styled.button`
  margin-top: 16px;
  background: none;
  border: 1px solid var(--border);
  color: var(--dim);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 12px 24px;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: var(--fg);
    color: var(--fg);
  }
`;
