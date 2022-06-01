import { StyledButton } from "./Button.style";

const Button = ({children, ...otherProps}) => {

    return (
        <StyledButton {...otherProps}>{children}</StyledButton>
    )
}

export default Button;