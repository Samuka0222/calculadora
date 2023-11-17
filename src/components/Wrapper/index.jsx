import styled from "styled-components";
import theme from "../Theme";
import Display from "./Display";
import Numpad from "./Numpad";
import { useEffect, useState } from "react";

const WrapperMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70%;
    min-width: 60%;
    background-color: ${theme.colors.alternative};
    border-radius: 20px;
    padding-bottom: 1.4rem;
`

const StyledTitle = styled.h1`
    color: ${theme.colors.white};
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    font-size: 1.2rem;
`


const Wrapper = () => {
    const [calc, setCalc] = useState("")
    const [result, setResult] = useState("")

    const ops = ['/', '*', '+', '-', '.', '%']

    const updateCalc = value => {
        if (ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))) {
            return
        }
        setCalc(calc + value)

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString())
        }
    }

    const clearExpression = () => {
        setCalc('')
        setResult('')
    }

    const deleteDigit = () => {
        setCalc(calc.split('').slice(0, -1).join(''))
        setResult(eval(calc + value).toString())
    }

    const calculate = () => {
        setCalc(eval(calc).toString())
    }

    return (
        <WrapperMain>
            <StyledTitle>Calculator 3000</StyledTitle>
            <Display 
            displayResult={calc}
            displayRealtimeResult={result}
            />
            <Numpad 
            addDigit={updateCalc}
            calculate={calculate}
            clearExpression={clearExpression}
            deleteDigit={deleteDigit}
            />
        </WrapperMain>
    )
}

export default Wrapper;