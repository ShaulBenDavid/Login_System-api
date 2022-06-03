import styled, { css } from 'styled-components';

export const StyledPost = styled.article`
    width: 98%;
    background-color: ${({theme}) => theme.colors.UiGray};
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 2px 4px 2px rgb(16 26 68 / 40%);

    p {
        color: ${({ theme }) => theme.colors.PrimaryBlue};
        
        &::first-letter{
            text-transform: capitalize;
        }
    }
    form {
        margin-top: 20px;
    }

`;

export const ButtonWrapper = styled.div`
    width: 100%;
`;

// post button
export const PostButton = styled.button`
    width: 50%;
    border: none;
    font-size: 1.1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: ease-in .3s;

    /* Delete */
    ${(props) => props.varient === 'delete' && css`
        background-color: #fd0a54;
        &:hover {
            background-color: #e30246;
        }
                
        &:active {
            background-color: #b10236;
        }
    `}
        /* Rename */
    ${(props) => props.varient === 'rename' && css`
        background-color: #0de5a8;
        &:hover {
            background-color: #0bc18d;
        }   

        &:active {
            background-color: #08916a;
        }
    `}
    /* Change */
    ${(props) => props.varient === 'change' && css`
        width: 100%;
        background-color: ${({ theme }) => theme.colors.PrimaryOrange};
        border-radius: 20px;
        margin-bottom: 5px;

        &:hover {
            background-color: #c63606;
        }
        
        &:active {
            background-color: #942905;
        }
    `}
`;

