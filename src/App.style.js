import styled from 'styled-components';
import { theme } from './GlobalDesgin/theme';

export const AppContainer = styled.div`
    text-align: center;
    background: linear-gradient(42deg, rgba(255,82,135,1) 0%, rgb(249, 116, 72) 100%);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthBox = styled.div`
    width: 70%;
    max-width: 900px;
    height: 600px;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 4px 4px 40px 4px rgb(16 26 68 / 50%);
`;

export const FormSide = styled.div`
    width: 50%;
    background-color: ${({ theme }) => theme.colors.UiGray};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    p {
        color: ${({ theme }) => theme.colors.PrimaryBlue};
        position: absolute;
        bottom: 16px;
    }
`;

export const ToggleButton = styled.button`
    background: inherit;
    border: none;
    text-decoration: underline;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.PrimaryOrange};
    cursor: pointer;
`;

export const Banner = styled.div`
    width: 50%;
    background-color: ${({ theme }) => theme.colors.PrimaryBlue};
    display: flex;
    justify-content: center;
    align-items: center;
`;
