import styled, {css} from 'styled-components';


export const InputContainer = styled.div`
    position: relative;

    &:not(:last-child){
        margin-bottom: 40px;
    }
`;

export const LabelInput = styled.label`
    position: absolute;
    left: 0;
    bottom: 0;
    letter-spacing: 0.05em;
    font-weight: bold;
    font-size: 1.2rem;
    font-style: normal;
    line-height: 28px;
    transition: .3s ease all;
    color: ${({ theme }) => theme.colors.PrimaryBlue};


    ${props => props.shrink && css`
        top: -18px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.SecondaryBlue};
    `}
`;

export const ErrMessage = styled.span`
    position: absolute;
    top: 30px;
    right: 50%;
    display: none;
`;

export const InputBox = styled.input`
    background: inherit;
    border: none;
    border-bottom: 2px solid rgb(16, 26, 68);
    width: 100%;
    height: 28px;
    color: rgb(16, 26, 68);

    &:focus {
        outline: none;
    }

    &:focus ~ ${LabelInput} {
        top: -18px;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.SecondaryBlue};
    }

    &:invalid {

    ${props => props.focused && css`
        border-color: #bb1133;

        & ~ ${ErrMessage} {
            display: block;
        }
    `}

    }

`;



