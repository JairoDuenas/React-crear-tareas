import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <MyRoutes />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default App;
