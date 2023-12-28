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

    @media (max-width: 414px) {
        gap: 0;
    }
`

const Numpad = ({ addDigit, calculate, deleteDigit, clearExpression }) => {
    return (
        <NumpadSection>
            <NumpadButton
                action={(e) => clearExpression()}
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
                $type={"number"}
            >
                7
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
            >
                8
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
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
                $type={"number"}
            >
                4
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
            >
                5
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
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
                $type={"number"}
            >
                1
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
            >
                2
            </NumpadButton>

            <NumpadButton
                action={(e) => addDigit(e.target.innerText)}
                $type={"number"}
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
                $type={"number"}
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