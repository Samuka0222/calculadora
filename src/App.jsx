import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Wrapper from "./components/Wrapper"
import theme from "./components/Theme"
import SVGBackground from "./assets/img/ooorganize.svg"
import { InputProvider } from "./context/InputContext"

const Background = styled.div`
  background-color: ${theme.colors.bg};
  background-image: url(${SVGBackground});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  return (
    <InputProvider>
      <Background>
        <GlobalStyles />
        <Wrapper />
      </Background>
    </InputProvider>
  )
}

export default App

