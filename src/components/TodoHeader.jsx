import styled from "styled-components";

export function TodoHeader({ children, loading }) {
  return (
    <Header>
      <HeaderInner>
        <Brand>
          <BrandText>TAREAS</BrandText>
          <BrandDot $loading={loading}>.</BrandDot>
        </Brand>
        <Controls>{children}</Controls>
      </HeaderInner>
    </Header>
  );
}

const Header = styled.header`
  background: rgba(38, 41, 41, 0.95);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderInner = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Brand = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

const BrandText = styled.h1`
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
`;

const BrandDot = styled.span`
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: ${({ $loading }) => ($loading ? "var(--dim)" : "var(--fg)")};
  animation: ${({ $loading }) =>
    $loading ? "blink 1s ease infinite" : "none"};

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
