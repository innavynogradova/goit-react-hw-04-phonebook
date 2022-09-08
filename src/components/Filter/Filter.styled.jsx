import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    font-size: ${p => `${p.theme.sizes[0]}px`};
    font-weight:  ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.black};
    :not(:last-child) {
        margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
`;