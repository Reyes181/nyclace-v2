import styled from 'styled-components';

export const ToggleButton = styled.button`
    height: 30px;
    width: 30px;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    justify-content: space-around;

    &:focus {
        outline: none;
    }
`;

export const ToggleButtonSpan = styled.span`
    width: 30px;
    height: 1px;
    background: black;
`