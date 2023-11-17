import styled from "styled-components";
import NumpadButton from "./NumpadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

const NumpadSection = styled.section`
    width: 95%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    justify-items: center;
    align-self: center;
    margin-top: 30px;
`

const Numpad = ({ addDigit, calculate, clearExpression, deleteDigit }) => {
    return (
        <NumpadSection>
            <NumpadButton
                action={() => clearExpression()}
            >
                C
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                ( )
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                %
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                /
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                7
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                8
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                9
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                *
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                4
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                5
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                6
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                -
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                1
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                2
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                3
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                +
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                .
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
            >
                0
            </NumpadButton>


            <NumpadButton
                action={() => deleteDigit()}
            >
                <FontAwesomeIcon icon={faDeleteLeft} />
            </NumpadButton>

            <NumpadButton
                action={() => calculate()}
            >
                =
            </NumpadButton>
        </NumpadSection>
    )
}

export default Numpad;