import styled from 'styled-components';

export const StyledButton = styled.button`
    line-height: normal;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: 0.5s;
    border-radius: 100px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.PrimaryOrange};
    border: 0;
    text-transform: uppercase;
    color: white;
    box-shadow: 4px 4px 20px 0 rgb(16 26 68 / 30%);
    width: 75%;
    transition: all .3s;

    &:hover {
        transform: scale(1.05);
        background-color: ${({ theme }) => theme.colors.ButtonHover};
    }

    &:active {
        transform: scale(.95);
        box-shadow: none;
        background-color: ${({ theme }) => theme.colors.ButtonActive};
    }
`;