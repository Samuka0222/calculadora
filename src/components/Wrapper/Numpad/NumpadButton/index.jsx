import styled from "styled-components";
import theme from "../../../Theme"

const StyledDigit = styled.button`
    height: 65px;
    width: 100%;
    border: none;
    border-radius: 15px;
    font-size: 2.8rem;
    color: ${theme.colors.white};
    background-color: ${props => props.$type === "number"
        ? `${theme.colors.secundary}` : `${theme.colors.primary}`};
    text-align: center;
    font-weight: bold;
    box-shadow: 2px 3px 6px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: ease-in-out .35s;

    &:hover {
        opacity: 0.5;
        color: ${theme.colors.alternative}
    }

    @media screen and (max-width: 414px) {
        height: 95px;
        border-radius: 0;
        border: 1px solid ${theme.colors.alternative}
    }

    @media screen and (max-width: 400px) {
        height: 85px;
    }
`

const NumpadButton = ({ children, action, $type }) => {
    return (
        <StyledDigit
            onClick={action}
            $type={$type}
        >
            {children}
        </StyledDigit>
    )
}

export default NumpadButton;