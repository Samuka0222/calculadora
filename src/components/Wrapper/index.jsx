import styled from "styled-components";
import theme from "../Theme";
import Display from "./Display";
import Numpad from "./Numpad";
import { useAddDigit } from "../../hooks/useAddDigit"

const WrapperMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
    width: 60%;
    max-width: 580px;
    background-color: ${theme.colors.alternative};
    border-radius: 20px;
    padding-bottom: 1.4rem;

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 414px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }

`

const StyledTitle = styled.h1`
    color: ${theme.colors.white};
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    font-size: 1.5rem;

    @media (max-width: 414px) {
        margin-top: 30px;
    }
`

const Wrapper = () => {
    const {
        input,
        updateCalc,
        clearExpression,
        deleteDigit,
        calculate
    } = useAddDigit();

    return (
        <WrapperMain>
            <StyledTitle>Simple Calculator: 3000</StyledTitle>
            <Display
                displayResult={input}
            />
            <Numpad
                addDigit={updateCalc}
                calculate={calculate}
                deleteDigit={deleteDigit}
                clearExpression={clearExpression}
            />
        </WrapperMain>
    )
}

export default Wrapper;