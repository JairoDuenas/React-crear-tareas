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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: var(--bg);
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 560px;
  border: 1px solid var(--border);
  padding: 48px;
  background: var(--bg-card);
`;

const FormLabel = styled.h2`
  font-family: var(--font-display);
  font-size: 36px;
  letter-spacing: 2px;
  margin-bottom: 32px;
  line-height: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--fg);
  font-size: 13px;
  letter-spacing: 1px;
  padding: 16px;
  outline: none;
  resize: none;
  line-height: 1.7;
  transition: border-color 0.2s;

  &::placeholder {
    color: var(--dim);
  }
  &:focus {
    border-color: var(--fg);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
`;

const BackBtn = styled.button`
  background: none;
  border: 1px solid var(--border);
  color: var(--dim);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 12px 20px;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: var(--fg);
    color: var(--fg);
  }
`;

const SubmitBtn = styled.button`
  background: var(--fg);
  border: 1px solid var(--fg);
  color: var(--bg);
  font-size: 11px;
  letter-spacing: 2px;
  padding: 12px 28px;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover:not(:disabled) {
    background: transparent;
    color: var(--fg);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
