import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function TodoForm({
  label,
  defaultTodoText = "",
  submitText,
  submitEvent,
}) {
  const [text, setText] = useState(defaultTodoText);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    submitEvent(text.trim());
    navigate("/");
  };

  return (
    <Page>
      <FormCard>
        <FormLabel>{label}</FormLabel>
        <Form onSubmit={handleSubmit}>
          <Textarea
            autoFocus
            placeholder="ESCRIBE AQUÍ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
          />
          <Actions>
            <BackBtn type="button" onClick={() => navigate("/")}>
              ← CANCELAR
            </BackBtn>
            <SubmitBtn type="submit" disabled={!text.trim()}>
              {submitText} →
            </SubmitBtn>
          </Actions>
        </Form>
      </FormCard>
    </Page>
  );
}

const Page = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 96px 20px 40px;
  overflow-x: hidden;

  @media (max-width: 960px) {
    padding: 96px 16px 40px;
  }

  @media (max-width: 640px) {
    padding: 88px 16px 32px;
  }
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.22);
  padding: 24px 20px 20px;
  background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.9),
      rgba(15, 23, 42, 0.8)
    );
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  backdrop-filter: blur(16px);
`;

const FormLabel = styled.h2`
  font-family: var(--font-display);
  font-size: 24px;
  letter-spacing: 0.12em;
  margin-bottom: 16px;
  line-height: 1;
  text-transform: uppercase;
  color: var(--fg);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--fg);
  font-size: 14px;
  letter-spacing: 0.2px;
  padding: 16px 20px 16px 16px;
  outline: none;
  resize: none;
  line-height: 1.7;
  transition:
    border-color 0.18s ease-out,
    box-shadow 0.18s ease-out,
    background 0.18s ease-out;
  border-radius: var(--radius-md);

  &::placeholder {
    color: rgba(148, 163, 184, 0.8);
  }
  &:focus {
    border-color: rgba(129, 140, 248, 0.85);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    background: rgba(15, 23, 42, 1);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
`;

const BackBtn = styled.button`
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--fg);
  font-size: 12px;
  letter-spacing: 2px;
  padding: 12px 20px;
  transition:
    border-color 0.18s ease-out,
    color 0.18s ease-out,
    transform 0.18s ease-out,
    background 0.18s ease-out;
  border-radius: 999px;

  &:hover {
    border-color: var(--fg);
    color: var(--fg);
    transform: translateY(-1px);
  }
`;

const SubmitBtn = styled.button`
  background: linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #38bdf8 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #f9fafb;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 12px 28px;
  transition:
    background 0.18s ease-out,
    color 0.18s ease-out,
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out;
  border-radius: 999px;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 40%, #38bdf8 100%);
    color: #020617;
    transform: translateY(-1px);
    box-shadow: 0 16px 45px rgba(79, 70, 229, 0.55);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
