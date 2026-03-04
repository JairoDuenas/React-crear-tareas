import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
//import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Container>
        <MyRoutes />
      </Container>
    </>
  );
}
const Container = styled.div``;

export default App;
