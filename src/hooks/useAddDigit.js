import { useContext } from "react"
import { InputContext } from "../context/InputContext"

export const useAddDigit = () => {
    const { input, setInput } = useContext(InputContext);
    let ops = ['+', '-', '*', '/']
    let digitsRegex = /\d/
    let operator = ''

    const updateCalc = value => {
        if (input === "Error" || input === "Valor muito alto!") {
            resetInput(value)
        } else if (input.toString().length > 16) {
            setInput('Valor muito alto!')
        }

        else {
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
                if (input.length < 1 || !digitsRegex.test(input[input.length - 1])) {
                    setInput([...input, "0."])
                } else {
                    setInput([...input, "."])
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
                if (includesOps && !input.includes('(')) {
                    try {
                        setInput([eval(input.join('')), value])
                    } catch (error) {
                        setInput("Error")
                    }
                } else {
                    setInput([...input, value])
                }
            }

            else {
                setInput([...input, value])
            }
        }
    }

    const includesOps = () => {
        return ops.some(operator => input.includes(operator))
    }

    const clearExpression = () => {
        setInput([])
    }

    const resetInput = (value) => {
        setInput([value]);
    }

    const formatResult = (result) => {
        const decimalCount = (result.toString().split('.')[1] || '').length;
        if (decimalCount > 8) {
            return parseFloat(result).toFixed(8);
        } else {
            return result
        }
    }

    const calculate = () => {
        try {
            const formattedResult = formatResult(eval(input.join('')));
            setInput([formattedResult])
        } catch (error) {
            setInput('Error')
        }
    }

    const deleteDigit = () => {
        setInput(input.slice(0, -1))
    }


    return {
        input,
        updateCalc,
        clearExpression,
        calculate,
        deleteDigit
    }
}