import styled from "styled-components";
import theme from "../../Theme";

const DisplayContainer = styled.div`
    background-color: ${theme.colors.black};
    width: 95%;
    height: 130px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    @media (max-width: 414px) {
        height: 30%;
        align-items: end;
    }

    @media screen and (max-width: 390px) {
        height: 25%;
    }
`

const DisplayExpression = styled.p`
    color: ${theme.colors.white};
    margin-right: 10px;
    font-size: 4.5rem;
    font-weight: bold;
`

const Display = ({ displayResult }) => {
    return (
        <DisplayContainer>
            <DisplayExpression>
                {displayResult.length < 1 ? "0" : displayResult}
            </DisplayExpression>

        </DisplayContainer>
    )
}

export default Display;