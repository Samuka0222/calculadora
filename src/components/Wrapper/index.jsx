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
    width: 60%;
    max-width: 580px;
    background-color: ${theme.colors.alternative};
    border-radius: 20px;
    padding-bottom: 1.4rem;

    @media (max-width: 767px) {
        width: 80%;
    }

    @media (max-width: 390px) {
        width: 100vw;
        height: 100vh;
        border-radius: none;
    }

`

const StyledTitle = styled.h1`
    color: ${theme.colors.white};
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    font-size: 1.2rem;

    @media (max-width: 390px) {
        margin-top: 30px;
    }
`


const Wrapper = () => {
    const [input, setInput] = useState([])
    let ops = ['+', '-', '*', '/']
    let operator = ''

    const updateCalc = value => {
        if (value === '( )') {
            if (input.includes('(')) {
                operator = ')'
                setInput([...input, operator])
            } else {
                operator = '('
                setInput([...input, operator])
            }
        } 
        
        else if (value === ".") {
            if (input.length < 1) {
                setInput(["0."])
            } else {
                if (input.includes('.') && includesOps != true) {
                    return
                } else {
                    setInput([...input, value])
                }
            }
        } 
        
        else if (value === "%") {
            const lastElement = input.pop()
            if (!ops.includes(lastElement)) {
                const percentage = lastElement / 100
                setInput([...input, percentage])
            } else {
                return
            }
        } 
        
        else if (ops.includes(value)) {
            if (includesOps && !input.includes('(') ) {
                setInput([eval(input.join('')), value])
            } else {
                setInput([...input, value])
            }
        }
        
        else {
            setInput([...input, value])
        }
    }

    const includesOps = () => {
        return ops.some(operator => input.includes(operator))
    }

    const clearExpression = () => {
        setInput([])
    }

    const calculate = () => {
        setInput([eval(input.join(''))])
    }

    const deleteDigit = () => {
        setInput(input.slice(0, -1))
    }

    useEffect(() => {
        console.log(input)
    }, useEffect[input])

    return (
        <WrapperMain>
            <StyledTitle>Simple Calculator</StyledTitle>
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