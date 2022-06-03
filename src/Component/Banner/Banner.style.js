import styled, { css } from "styled-components";

export const StyledBanner = styled.div`
    width: 50%;
    background-color: ${({ theme }) => theme.colors.PrimaryBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    
    button {
        display: none;
        position: absolute;
        bottom: 10px;
    }
    

    @media (max-width: 600px) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: 1s all;

        ${props => props.active && css`
            transform: translateX(100%);
        `}     

        button {
            display: block;
        }



        
    }
`;