import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: absolute;
    top: 5px;
    width: 70%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;

    button {
        background: inherit;
        border: none;
        transition: .5s;
        color: ${({ theme }) => theme.colors.PrimaryBlue};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.PrimaryBlue};
        cursor: pointer; 
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;