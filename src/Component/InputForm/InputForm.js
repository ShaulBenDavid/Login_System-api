import { useState } from 'react';
import * as S from './inputForm.style';

const InputForm = ({ label, ...otherProps }) => {
    const [focused, setFocused] = useState(false);

    const handleBlur = () => {
        setFocused(true);
        console.log(focused);
    }
    return (
        <>
            <S.InputContainer>
                <S.InputBox
                    {...otherProps}
                    focused={focused}
                    onBlur={handleBlur}
                />
                <S.LabelInput
                    shrink={otherProps.value.length ? true : false}
                >{label}</S.LabelInput>
                <S.ErrMessage>s</S.ErrMessage>
            </S.InputContainer>
        </>
    );
}

export default InputForm;