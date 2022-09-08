import styled from "styled-components";

export const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto 20px;
    text-align: start;
    width: 100%;
    padding: 20px;
    background-color: ${p => p.theme.colors.bgBody};
    border-radius: 5px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${p => `${p.theme.sizes[0]}px`};
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.white};
    :not(:last-child) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;

export const Input = styled.input`
    font-size: 20px;
    padding: 5px 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    :focus {
        border-color: ${p => p.theme.colors.primary};
    }
`;

export const Button = styled.button`
    min-width: 100px;
    padding: 5px 10px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    border: 1px solid ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.primary};
    background-color: transparent;
    border: 1px solid ${p => p.theme.colors.primary};
    transition: all 100ms linear;
    cursor: pointer;
    :not(:last-child) {
        margin-right: 10px;
    }
    :hover {
        color: ${p => p.theme.colors.white};
        border-color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.primary};
    }
`;
