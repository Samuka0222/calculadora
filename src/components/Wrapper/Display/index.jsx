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
    align-items: end;
`

const DisplayRealTimeResult = styled.p`
    color: ${theme.colors.white};
    margin: 20px 5px;
    font-size: 1.7em;
    font-weight: bold;
`

const DisplayExpression = styled.p`
    color: ${theme.colors.white};
    margin: 0 20px 10px 0;
    font-size: 3em;
    font-weight: bold;
`

const Display = ({displayResult, displayRealtimeResult}) => {
    return (
        <DisplayContainer>
            {
              displayRealtimeResult !== '' 
              ? <DisplayRealTimeResult>({displayRealtimeResult})</DisplayRealTimeResult>
              : ''
            }
            <DisplayExpression>
                {displayResult === '' ? "0" : displayResult}
            </DisplayExpression>
            
        </DisplayContainer>
    )
}

export default Display;