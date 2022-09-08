import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 20px; 
`
export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin-bottom: ${p => `${p.theme.space[4]}px`};
`

export const Button = styled.button`
    padding: 2px 16px;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.sm};
    &:hover{
      background-color: ${p => p.theme.colors.primary};
    }
`