import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <Page>
      <Card>
        <Code>404</Code>
        <Message>PÁGINA NO ENCONTRADA</Message>
        <BackBtn onClick={() => navigate("/")}>← VOLVER AL INICIO</BackBtn>
      </Card>
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
  padding: 32px 16px;
`;

const Card = styled.div`
  width: 100%;
  max-width: 560px;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
`;

const Code = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(80px, 20vw, 160px);
  line-height: 1;
  letter-spacing: -2px;
  background: linear-gradient(135deg, #e5e7eb 0%, #818cf8 45%, #38bdf8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Message = styled.p`
  font-size: 12px;
  letter-spacing: 3px;
  color: var(--dim);
  text-transform: uppercase;
`;

const BackBtn = styled.button`
  margin-top: 10px;
  background: rgba(2, 6, 23, 0.35);
  border: 1px solid rgba(148, 163, 184, 0.3);
  color: var(--fg);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 12px 24px;
  transition:
    border-color 0.18s ease-out,
    transform 0.18s ease-out,
    background 0.18s ease-out,
    box-shadow 0.18s ease-out;
  border-radius: 999px;

  &:hover {
    border-color: rgba(129, 140, 248, 0.65);
    background: rgba(99, 102, 241, 0.16);
    transform: translateY(-1px);
    box-shadow: 0 14px 40px rgba(79, 70, 229, 0.35);
  }
`;
